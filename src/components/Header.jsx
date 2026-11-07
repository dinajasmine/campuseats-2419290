import { NavLink } from 'react-router'
import { useCart } from '../hooks/useCart.js'

function Header() {
  const { count } = useCart()   //total up items in cart directly from context (no need to pass props)
  return (
    <header className="header">
      <h1 className="logo">CampusEats</h1>
      <nav className="nav">
        {/* NavLink = macam <a> tapi tak reload page & auto highlight kalau tengah kat page tu.
            "end" untuk "/" supaya dia tak highlight kat semua page */}
        <NavLink to="/" end>Vendors</NavLink>
        <NavLink to="/orders">My Orders</NavLink>
        <NavLink to="/cart" className="cart">
          Cart <span className="badge">{count}</span>
        </NavLink>
      </nav>
    </header>
  )
}
export default Header