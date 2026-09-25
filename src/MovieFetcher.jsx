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
        console.log(movie);
      } catch (error) {
        console.error(error.message);
      }
    }
  }, []);
  return;
}
