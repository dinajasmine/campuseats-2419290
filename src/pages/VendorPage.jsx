import { useParams, Link, useSearchParams } from 'react-router'
import { useVendors } from '../hooks/useVendors.js'
import MenuList from '../components/MenuList.jsx'
import SearchBar from '../components/SearchBar.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'

function VendorPage() {
  // all hooks must go at the very top, before any early "return"
  const { id } = useParams() // get :id from the URL
  const [searchParams, setSearchParams] = useSearchParams() // read/write ?q= in the URL
  const { vendors, loading, error, reload } = useVendors()
  // the search text is read from the URL (?q=...). If it's missing, use an empty string
  const query = searchParams.get('q') ?? ''

  // called whenever the user types in the search bar
  function handleSearch(value) {
    setSearchParams(value ? { q: value } : {}, { replace: true })
  }

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  // find the vendor whose id matches the URL
  const vendor = vendors.find((v) => v.id === id)
  if (!vendor) {
    const visibleItems = vendor.menu.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    )

    return (
      <section>
        <h2 className="section-title">Vendor not found</h2>
        <p><Link to="/">Back to vendors</Link></p>
      </section>
    )
  }
  
  // Filter the menu using the search text.
  const visibleItems = vendor.menu.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <section>
      <h2 className="section-title">Menu: {vendor.name}</h2>
      <p className="muted">{vendor.location} · Open: {vendor.openHours}</p>
      <SearchBar value={query} onChange={handleSearch} />
      {query && visibleItems.length === 0 ? (
        <p className="muted">No items match “{query}”.</p>
      ) : (
      <MenuList items={visibleItems} />
      )}
    </section>
  )
}

export default VendorPage