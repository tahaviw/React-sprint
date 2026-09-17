function MovieList() {
  const movies = [
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "Spirited Away", year: 2001 },
    { id: 3, title: "The Dark Knight", year: 2008 },
  ];

  return (
    <div className="movie-list">
      <h2 className="movie-list-title">My Favorite Movies</h2>
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <span className="movie-title">{movie.title}</span>
          <span className="movie-year">({movie.year})</span>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
