import { useState } from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import CardList from './CardList.jsx'
import SearchBar from './SearchBar.jsx';
import ContactForm from './ContactForm.jsx'


function App() {
  const [showForm,setShowForm] = useState(false)
  let messageP = "This form is currently hidden. To reveal the form and continue with your application, please ensure you have completed all required fields in the previous section and agreed to the terms and conditions." 
  return (
    <>
      <Header/>
      <SearchBar/>
      <button onClick={()=> setShowForm (!showForm)}>
        {showForm ? 'Hide Form' : 'Show Form'}
      </button>
      <CardList/>
      {showForm ? <ContactForm/> : messageP}
      <Footer/>
    </>
  );
}

export default App