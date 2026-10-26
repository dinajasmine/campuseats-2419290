import { useState } from 'react'
import MenuItemCard from './MenuItemCard.jsx'

function MenuList({ items, onAdd }) {
    //State for the search input
    const [searchQuery, setSearchQuery] = useState('')

    if (items.length === 0) {
        return <p className="muted">No items on this menu yet.</p>
    }

    // filter list based on the search query
    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    
    return (
    <div>
        {/*Search Box */}
        <div style={{ marginBottom: '1rem' }}>
            <input
                type="text"
                placeholder="Search menu by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                    padding: '0.5rem',
                    borderRadius: '8px',
                    border: '1px solid #c5cbd3',
                    width: '100%',
                    maxWidth: '300px',
                    font: 'inherit'
                }}
            />
        </div>

        {/*render the filtered items. If no results, show a message */}
        {filteredItems.length === 0 ? (
            <p className="muted">No items found matching "{searchQuery}".</p>
        ) : (
            <div className="grid">
                {filteredItems.map((item) => (
                    <MenuItemCard key={item.id} item={item} onAdd={onAdd} />
                ))}
            </div>
        )}
    </div>
    )
}

export default MenuList