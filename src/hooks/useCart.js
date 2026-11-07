import { useContext } from 'react'
import { CartContext } from '../context/cart-context.js'

// A shortcut to get the cart from context.
export function useCart() {
  const context = useContext(CartContext)
  // if it's null, it means we forgot to wrap the app with <CartProvider>
  if (context === null) {
    throw new Error('useCart must be used inside <CartProvider>')
  }
  return context
}