import { useState } from 'react'

const MAHALLAHS = ['Ali', 'Aminah', 'Faruq', 'Asiah', 'Bilal', 'Hafsa', 'Uthman', 'Zubair']

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 3) {
    errors.name = 'Enter your name (at least 3 characters).'
  }
  if (!values.mahallah) {
    errors.mahallah = 'Choose your mahallah.'
  }
  if (!values.pickupTime || values.pickupTime < '07:00' || values.pickupTime > '22:00') {
    errors.pickupTime = 'Choose a pickup time between 07:00 and 22:00.'
  }
  return errors
}

// onPlaceOrder = a function from the parent, called when the form is valid
function CheckoutForm({ onPlaceOrder }) {
      // State for the input values and the error messages
  const [values, setValues] = useState({ name: '', mahallah: '', pickupTime: '' })
  const [errors, setErrors] = useState({})

  // One handler for all inputs. The input's "name" attribute matches a key in values.
  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault() // stop page reload
    const found = validate(values)
    setErrors(found)
    // if there are no errors at all, send the order
    if (Object.keys(found).length === 0) {
      onPlaceOrder(values)
    }
  }

  return (
    // noValidate = use our own validation instead of the browser's
    <form className="card form" onSubmit={handleSubmit} noValidate>
      <h3>Checkout</h3>

      {/* Name Input */}
      <label htmlFor="name">Name</label>
      <input id="name" name="name" value={values.name} onChange={handleChange} />
      {errors.name && <p className="field-error">{errors.name}</p>}

       {/* Mahallah Select */}
      <label htmlFor="mahallah">Mahallah</label>
      <select id="mahallah" name="mahallah" value={values.mahallah} onChange={handleChange}>
        <option value="">Select...</option>
        {MAHALLAHS.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
      {errors.mahallah && <p className="field-error">{errors.mahallah}</p>}

        {/* Pickup Time Input */}
      <label htmlFor="pickupTime">Pickup time</label>
      <input
        id="pickupTime"
        name="pickupTime"
        type="time"
        value={values.pickupTime}
        onChange={handleChange}
      />
      {errors.pickupTime && <p className="field-error">{errors.pickupTime}</p>}

      <button type="submit" className="btn">Place order</button>
    </form>
  )
}

export default CheckoutForm