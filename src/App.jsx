import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import VendorCard from './components/VendorCard.jsx'
import MenuList from './components/MenuList.jsx'
import CartPage from './components/CartPage.jsx'
import { Loading, ErrorMessage } from './components/Status.jsx'

function App() {
  //fetched data state 
  const [vendors, setVendors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  // UI state
  const [selectedVendorId, setSelectedVendorId] = useState(null)
  const [cart, setCart] = useState([]) // lines of { item, qty }
  const [view, setView] = useState('menu') // 'menu' | 'cart' | 'done'
  const [lastOrder, setLastOrder] = useState(null)

  //fetch effect
  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    fetch('/api/vendors.json', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        setVendors(data)
        // keep existing selection, otherwise pick the first vendor
        setSelectedVendorId((current) => current ?? data[0]?.id ?? null)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message)
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [reloadKey])

  //cart handlers
  function handleAddToCart(item) {
    setCart((prev) => {
      const existing = prev.find((line) => line.item.id === item.id)
      if (existing) {
        return prev.map((line) =>
          line.item.id === item.id ? { ...line, qty: line.qty + 1 } : line
        )
      }
      return [...prev, { item, qty: 1 }]
    })
  }

  function handleChangeQty(itemId, delta) {
    setCart((prev) =>
      prev
        .map((line) =>
          line.item.id === itemId ? { ...line, qty: line.qty + delta } : line
        )
        .filter((line) => line.qty > 0)
    )
  }

  function handleRemove(itemId) {
    setCart((prev) => prev.filter((line) => line.item.id !== itemId))
  }

  function handlePlaceOrder(details) {
    // IMPORTANT: compute total BEFORE clearing the cart
    const total = cart.reduce((sum, line) => sum + line.item.price * line.qty, 0)
    setLastOrder({ ...details, total })
    setCart([])
    setView('done')
  }

  //derived values
  const cartCount = cart.reduce((sum, line) => sum + line.qty, 0)
  const selectedVendor = vendors.find((v) => v.id === selectedVendorId)

  //view switch
  let content
  if (loading) {
    content = <Loading />
  } else if (error) {
    content = (
      <ErrorMessage message={error} onRetry={() => setReloadKey((k) => k + 1)} />
    )
  } else if (view === 'cart') {
    content = (
      <CartPage
        cart={cart}
        onChangeQty={handleChangeQty}
        onRemove={handleRemove}
        onPlaceOrder={handlePlaceOrder}
      />
    )
  } else if (view === 'done' && lastOrder) {
    content = (
      <section className="card">
        <h2>Order placed</h2>
        <p>
          Thank you, {lastOrder.name}. Pick up at {lastOrder.pickupTime}{' '}
          (Mahallah {lastOrder.mahallah}). Total RM {lastOrder.total.toFixed(2)}.
        </p>
        <button className="btn" onClick={() => setView('menu')}>
          Back to menus
        </button>
      </section>
    )
  } else {
    content = (
      <>
        <h2 className="section-title">Choose a vendor</h2>
        <div className="grid">
          {vendors.map((vendor) => (
            <VendorCard
              key={vendor.id}
              vendor={vendor}
              selected={vendor.id === selectedVendorId}
              onSelect={setSelectedVendorId}
            />
          ))}
        </div>

        {selectedVendor && (
          <>
            <h2 className="section-title">Menu: {selectedVendor.name}</h2>
            <MenuList items={selectedVendor.menu} onAdd={handleAddToCart} />
          </>
        )}
      </>
    )
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        onShowMenu={() => setView('menu')}
        onShowCart={() => setView('cart')}
      />
      <main className="container">{content}</main>
      <Footer />
    </>
  )
}

export default App