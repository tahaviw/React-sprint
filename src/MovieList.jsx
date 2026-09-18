import { useState } from "react";
function MovieList() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "Spirited Away", year: 2001 },
    { id: 3, title: "The Dark Knight", year: 2008 },
  ]);

  return (
    <div className="movie-list">
      <h2 className="movie-list-title">My Favorite Movies</h2>
      <button
        onClick={() =>
          setMovies([{ id: 99, title: "New Movie", year: 2025 }, ...movies])
        }
      >
        Add to Top
      </button>
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <span className="movie-title">{movie.title}</span>
          <span className="movie-year">({movie.year})</span>
          <label>
            <input type="checkbox" /> Watched
          </label>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
