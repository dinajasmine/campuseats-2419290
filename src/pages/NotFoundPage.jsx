import { Link } from 'react-router'

// Shows up when the URL doesn't exist (the "*" route)
function NotFoundPage() {
  return (
    <section>
      <h2 className="section-title">404: Page not found</h2>
      <p><Link to="/">Go back to vendors</Link></p>
    </section>
  )
}
export default NotFoundPage