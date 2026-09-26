import { useState, useEffect } from "react";

function MovieFetch() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getData() {
      const url = "https://jsonplaceholder.typicode.com/posts/1";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        setMovie(result);
        console.log(result);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData()
  }, []);
  return (
    movie === null ? <p>Loading...</p> : <p>{movie.title}</p>
  );
}

export default MovieFetch