import { useEffect, useState } from 'react'

// Works like useState but the data stays even after a page refresh
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key)
      return saved !== null ? JSON.parse(saved) : initialValue
    } catch {
      return initialValue // if the saved data is broken, use the default
    }
  })

  // every time the value changes, save it again
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // storage full or blocked: ignore, the app still works
    }
  }, [key, value])

  return [value, setValue]
}