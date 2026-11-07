import { CartContext } from './cart-context.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

// Keeps the cart and orders in one place, then shares them with every page
function CartProvider({ children }) {
  // useLocalStorage so the cart and orders don't disappear when you refresh
  const [cart, setCart] = useLocalStorage('campuseats-cart', [])
  const [orders, setOrders] = useLocalStorage('campuseats-orders', [])

  // derived values
  const count = cart.reduce((sum, line) => sum + line.qty, 0)
  const total = cart.reduce((sum, line) => sum + line.item.price * line.qty, 0)

  function addToCart(item) {
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

  function changeQty(itemId, delta) {
    setCart((prev) =>
      prev
        .map((line) => (line.item.id === itemId ? { ...line, qty: line.qty + delta } : line))
        .filter((line) => line.qty > 0)
    )
  }

  function removeFromCart(itemId) {
    setCart((prev) => prev.filter((line) => line.item.id !== itemId))
  }

  function placeOrder(details) {
    const order = {
      id: Date.now(),
      ...details,
      lines: cart,
      total,
      placedAt: new Date().toISOString(),
    }
    setOrders((prev) => [order, ...prev])
    setCart([])
  }

    // everything the other pages are allowed to use
  const value = { cart, orders, count, total, addToCart, changeQty, removeFromCart, placeOrder }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export default CartProvider