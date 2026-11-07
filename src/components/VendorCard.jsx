import { Link } from 'react-router'

// Card for each vendor. "vendor" comes from parent (props).
function VendorCard({ vendor }) {
  return (
    // Link when clicked, go to that vendor's page
    <Link to={`/vendor/${vendor.id}`} className="card vendor-card">
      {/* first letter of the vendor name, used as a small thumbnail */}
      <div className="thumb" aria-hidden="true">{vendor.name.charAt(0)}</div>
      <div>
        <h3>{vendor.name}</h3>
        <p className="muted">{vendor.location}</p>
        <p className="muted">Open: {vendor.openHours}</p>
        {/* ternary: if open, green "Open now", otherwise, red "Closed" */}
        <span className={vendor.isOpen ? 'status open' : 'status closed'}>
          {vendor.isOpen ? 'Open now' : 'Closed'}
        </span>
      </div>
    </Link>
  )
}

export default VendorCard