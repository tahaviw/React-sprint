import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CardList from "./CardList.jsx";
import SearchBar from "./SearchBar.jsx";
import ContactForm from "./ContactForm.jsx";
import MovieList from "./MovieList.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  let messageP =
    "This form is currently hidden. To reveal the form and continue with your application, please ensure you have completed all required fields in the previous section and agreed to the terms and conditions.";
  return (
    <>
      <Header />
      <SearchBar />
      <button className="btn-show-form" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Show Form"}
      </button>
      {isLoading && (
        <div className="loading-indicator">
          <span className="spinner"></span>
          <span className="loading-text">Loading</span>
        </div>
      )}
      <button
        className="loading-toggle"
        onClick={() => setIsLoading(!isLoading)}
      >
        Click here
      </button>
      <MovieList />
      <CardList />
      {showForm ? <ContactForm /> : <p className="message-p">{messageP}</p>}
      <Footer />
    </>
  );
}

export default App;
