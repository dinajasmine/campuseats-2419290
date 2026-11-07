// Two small components for while the data is loading and for when something goes wrong
export function Loading() {
  return <p className="muted" role="status">Loading menus...</p>
}

// message = what the error was, onRetry = function that runs when the user presses "Try again"
export function ErrorMessage({ message, onRetry }) {
  return (
    <div className="card error" role="alert">
      <p>Could not load menus: {message}</p>
      <button className="btn" onClick={onRetry}>Try again</button>
    </div>
  )
}

