import { BrowserRouter, Routes, Route } from 'react-router'
//browserrouter for react to read url & change page without reload
//routes, route for list url and page to refer
import CartProvider from './context/CartProvider.jsx'
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import VendorPage from './pages/VendorPage.jsx'
import CartPage from './pages/CartPage.jsx'
import OrdersPage from './pages/OrdersPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import SearchBar from './components/SearchBar.jsx'


function App() {
  return (
    <BrowserRouter>
      <CartProvider> {/*for all route, so semua page can use cart*/}
        <Routes>
          <Route element={<Layout />}>
          {/* Layout is header & footer is same for all page.*/}
            <Route index element={<HomePage />} />
            <Route path="vendor/:id" element={<VendorPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App