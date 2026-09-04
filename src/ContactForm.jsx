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
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form__group">
                <label htmlFor="name" className="contact-form__label">Name</label>
                <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    placeholder="Your name"
                    className="contact-form__input"
                />
            </div>
            <div className="contact-form__group">
                <label htmlFor="email" className="contact-form__label">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    placeholder="you@example.com"
                    className="contact-form__input"
                />
            </div>
            <div className="contact-form__group">
                <label htmlFor="message" className="contact-form__label">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                    placeholder="Your message"
                    rows="5"
                    className="contact-form__input"
                />
            </div>
            <button type="submit" className="contact-form__submit">Send</button>
        </form>
    )
}
export default ContactForm