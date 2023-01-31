import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://myflix-jfm.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log("Movies from API:", data);
        const moviesFromAPI = data.map((doc) => {
          return {
            id: doc._id,
            Title: doc.Title,
            Description: doc.Description,
            Genre: doc.Genre,
            Director: doc.Director,
            ImageURL: doc.ImageURL,
            Featured: doc.Featured
          }
        });
        setMovies(moviesFromAPI);
      });
  }, []);

  if (selectedMovie) {
    let similarMovies = movies.filter(checkGenre);

    function checkGenre(movie) {
      if (movie.Genre.Name === selectedMovie.Genre.Name & movie.id !== selectedMovie.id) {
        return true;
      };
    };
    return (
      <>
        <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        <hr />
        <h2>Similar Movies</h2>
        {similarMovies.length > 0 &&
          <div>
            {similarMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
            ))}
          </div>
        }
        {similarMovies.length === 0 &&
          <div>No similar movies found.</div>
        }
      </>
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};