import Header from './Header.jsx'
import Footer from './Footer.jsx'
import CardList from './CardList.jsx'
import SearchBar from './SearchBar.jsx';
import ContactForm from './ContactForm.jsx'


function App() {
  return (
    <>
      <Header/>
      <SearchBar/>
      <CardList/>
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default App