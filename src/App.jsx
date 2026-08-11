import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'

function App() {
  return (
    <>
      <Header/>
      <div className="card-grid">
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Footer/>
    </>
  );
}

export default App