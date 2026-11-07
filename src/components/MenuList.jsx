import MenuItemCard from './MenuItemCard.jsx'
import { useCart } from '../hooks/useCart.js'

function MenuList({ items }) {
  // get the addToCart function from context
  const { addToCart } = useCart()

  if (items.length === 0) {
    // if the array is empty, just show a message
    return <p className="muted">No items on this menu yet.</p>
  }
  return (
    <div className="grid">
      {items.map((item) => (
        <MenuItemCard key={item.id} item={item} onAdd={addToCart} />
      ))}
    </div>
  )
}
export default MenuList