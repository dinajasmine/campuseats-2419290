import { useCallback, useEffect, useState } from 'react'

// A hook that fetches vendor data from /api/vendors.json.
// Returns { vendors, loading, error, reload }.
export function useVendors() {
  const [vendors, setVendors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // useCallback keeps `load` stable across renders so the effect below doesn't
  // re-run infinitely (load would be a new function every render otherwise).
  const load = useCallback(() => {
    
    // AbortController = lets us cancel the fetch if the component disappears first
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    fetch('/api/vendors.json', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then(setVendors)
      .catch((err) => { // if we cancelled it ourselves, don't treat it as an error
        if (err.name !== 'AbortError') setError(err.message)
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    // Return the cancel function so the effect can pass it as cleanup.
    return () => controller.abort()
  }, [])

  useEffect(() => {
    const cancel = load()
    return cancel            // runs on unmount / before next run
  }, [load])

  // expose `reload` = same fn, so callers can re-fetch (Try again button).
  return { vendors, loading, error, reload: load }
}