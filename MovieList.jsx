function MovieList() {
  const movies = [
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "Spirited Away", year: 2001 },
    { id: 3, title: "The Dark Knight", year: 2008 },
  ];

  return (
    <div>
      <h2>My Favorite Movies</h2>
      {movies.map((movie) => (
        <div key={movie.id}>
          <p>
            {movie.title} ({movie.year})
          </p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
