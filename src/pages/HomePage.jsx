import { useVendors } from '../hooks/useVendors'
import VendorCard from '../components/VendorCard.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'

function HomePage() {
  // Same hook as Week 3, but the fetch logic lives in the hook now
  const { vendors, loading, error, reload } = useVendors()

  // still loading -> show Loading; got an error -> show the error + retry button
  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  return (
    <>
      <h2 className="section-title">Choose a vendor</h2>
      <div className="grid">
        {vendors.map((v) => <VendorCard key={v.id} vendor={v} />)}
      </div>
    </>
  )
}

export default HomePage