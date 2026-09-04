import {useState} from 'react';

function ContactForm() {
    const [form, setForm] = useState({ 
            name: '',
            email: '',
            message: ''
        })
    const handleSubmit = (event){
        event.preventDefault()
        console.log('Current Form:', form) 
    }
    return (
        <form onSubmit={handleSubmit}>

        </form>
    )
}