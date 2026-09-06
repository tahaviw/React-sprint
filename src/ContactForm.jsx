import { useState } from 'react'

function ContactForm() {
  const [data, setData] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()           // Stop the page from reloading
    console.log(data)            // Show our data in the console
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={data.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={data.email} onChange={handleChange} placeholder="Email" />
      <textarea name="message" value={data.message} onChange={handleChange} placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  )
}
export default ContactForm