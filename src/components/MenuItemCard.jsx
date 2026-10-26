function MenuItemCard({ item, onAdd}) {
    return (
    <article className="card menu-card">
        <div className="thumb" aria-hidden="true">{item.name.charAt(0)}</div>
        <p className="tag">{item.category}</p>
        <h3>{item.name}</h3>
        <p className="muted">{item.description}</p>

        {/*ensures the price always has 2 decimal places*/}
        <p className="price">RM {item.price.toFixed(2)}</p>
        
        {/* Button text changes based on availability. Disabled if not available. */}
        <button 
        className="btn" 
        disabled={!item.available} 
        onClick={() => onAdd(item)}
        >
        {item.available ? 'Add to cart' : 'Sold out'}

        </button>
    </article>
 )
}

export default MenuItemCard