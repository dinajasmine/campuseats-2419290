// The search box where it doesn't store anything itself.
// value = the current text, onChange = the parent's function that updates that text.

function SearchBar({ value, onChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Search menu by name…"
      aria-label="Search menu by name"
      value={value} // controlled input is what you see in the box = the value from the parent
      onChange={(e) => onChange(e.target.value)} // e.target.value is the text the user just typed, send it to the parent
    />
  )
}
export default SearchBar