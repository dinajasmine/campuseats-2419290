function VendorCard({ vendor, isSelected, onSelect }) {
    return (
        /*If 'selected' is true, add the 'selected' CSS class for the green border*/
    <button
        type="button"
        className={isSelected ? 'card vendor-card selected' : 'card vendor-card'}
        onClick={() => onSelect(vendor.id)}
    >
        {/* Shows the first letter of the vendor name */}
        <div className="thumb" aria-hidden="true">{vendor.name.charAt(0)}</div>
        <div>
            <h3>{vendor.name}</h3>
            <p className="muted">{vendor.location}</p>
            <p className="muted">Open: {vendor.openHours}</p>
            
            {/* if isOpen is true, show "Open now" and green class. Otherwise red class */}
            <span className={vendor.isOpen ? 'status open' : 'status closed'}>
                {vendor.isOpen ? 'Open now' : 'Closed'}
            </span>
        </div>
    </button>
    )
}

export default VendorCard