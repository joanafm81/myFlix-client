import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { Toolbar } from "../toolbar/toolbar";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


export const MainView = () => {

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://myflix-jfm.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((moviesFromApi) => {
        setMovies(moviesFromApi.map((doc) => {
          return {
            id: doc._id,
            Title: doc.Title,
            Description: doc.Description,
            Genre: doc.Genre,
            Director: doc.Director,
            ImageURL: doc.ImageURL,
            Featured: doc.Featured
          }
        }));
      });
  }, [token]);

  return (
    <>
      <Toolbar
        user={user}
        onLogoutClick={() => { setUser(null); setToken(null); localStorage.clear(); }} />

      <Container>
        <Row className="justify-content-md-center p-5">
          {!user ? (
            <Col md={5}>
              <LoginView
                onLoggedIn={(user, token) => {
                  setUser(user);
                  setToken(token);
                }}
              />
              or
              <SignupView />
            </Col>
          ) : selectedMovie ? (
            <Col md={8}>
              <MovieView
                movie={selectedMovie} onBackClick={() => setSelectedMovie(null)}
              />

              <hr />
              <h2>Similar Movies</h2>
              {similarMovies.length > 0 &&
                <Row>
                  {similarMovies.map((movie) => (
                    <Col className="mb-5" key={movie.id} md={3}>
                      <MovieCard
                        key={movie.id}
                        movie={movie}
                        onMovieClick={(newSelectedMovie) => {
                          setSelectedMovie(newSelectedMovie);

                          // the state for selectedMovie is not update here??
                          //setSimilarMovies(movies.filter(checkGenre));
                          setSimilarMovies(movies.filter(m => {
                            return m.Genre.Name === newSelectedMovie.Genre.Name && m.id !== newSelectedMovie.id;
                          }));
                        }}
                      />
                    </Col>
                  ))}
                </Row>
              }
              {similarMovies.length === 0 &&
                <div>No similar movies found.</div>
              }

            </Col>
          ) : movies.length === 0 ? (
            <div>The list is empty!</div>
          ) : (
            // Main movie list
            <>
              {movies.map((movie) => (
                <Col className="mb-5" key={movie.id} md={4} lg={3}>
                  <MovieCard
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                      setSelectedMovie(newSelectedMovie);

                      // the state for selectedMovie is not update here??
                      //setSimilarMovies(movies.filter(checkGenre));
                      setSimilarMovies(movies.filter(m => {
                        return m.Genre.Name === newSelectedMovie.Genre.Name && m.id !== newSelectedMovie.id;
                      }));
                    }} />
                </Col>
              ))}
            </>)
          }
        </Row>
      </Container>
    </>
  );


  /*if (!user) {
    return (
      <>
        <LoginView
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }}
        />
        or
        <SignupView />
      </>
    );
  }

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
    <>
      <div>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }} />
        ))}
      </div>
      <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
    </>
  );
  */
};