import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CardList from "./CardList.jsx";
import SearchBar from "./SearchBar.jsx";
import ContactForm from "./ContactForm.jsx";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "The Grand Budapest Hotel", year: 2014 },
    { id: 3, title: "Spirited Away", year: 2001 },
  ]);
  const [isLoading, setIsLoading] = useState(true);
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
      <button
        onClick={() => {
          const newMovie = { id: Date.now(), title: "New Movie", year: 2025 };
          setMovies([newMovie, ...movies]);
        }}
      >
        Add Movie to Top
      </button>

      <button
        onClick={() => {
          setMovies(movies.filter((_, index) => index !== 1));
        }}
      >
        Remove Middle Movie
      </button>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <p className="movie-title">{movie.title}</p>
            <p className="movie-year">({movie.year})</p>
          </div>
        ))}
      </div>
      <CardList />
      {showForm ? <ContactForm /> : <p className="message-p">{messageP}</p>}
      <Footer />
    </>
  );
}

export default App;
