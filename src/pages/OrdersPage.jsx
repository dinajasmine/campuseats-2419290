import { useCart } from '../hooks/useCart.js'

// Order history page.
function OrdersPage() {
  const { orders } = useCart()

  if (orders.length === 0) {
    return <p className="muted">You have no orders yet.</p>
  }

  return (
    <section>
      <h2 className="section-title">My orders</h2>
      {/* one card for each order */}
      {orders.map((order) => (
        <article key={order.id} className="card">
          <h3>Pickup at {order.mahallah}, {order.pickupTime}</h3>
          <p className="muted">
            For {order.name} · placed {new Date(order.placedAt).toLocaleString('en-MY')}
          </p>
          <ul>
            {order.lines.map((line) => (
              <li key={line.item.id}>
                {line.qty} × {line.item.name}
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: RM {order.total.toFixed(2)}</p>
        </article>
      ))}
    </section>
  )
}

export default OrdersPage