import {useState} from 'react';

function ContactForm() {
    const [form, setForm] = useState({ 
            name: '',
            email: '',
            message: ''
        })
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Current Form:', form) 
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                placeholder="Name"
            />
            <input
                name="email"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                placeholder="Email"
            />
            <textarea
                name="message"
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                placeholder="Message"
            />
            <button type="submit">Submit</button>
        </form>
    )
}
export default ContactForm