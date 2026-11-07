import { Outlet } from 'react-router'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

//for header & footer everypage.
function Layout() {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet /> {/*place for pages (Home/Vendor/Cart...) exist thru URL */}
      </main>
      <Footer />
    </>
  )
}

export default Layout