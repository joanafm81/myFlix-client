import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { Toolbar } from "../toolbar/toolbar";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


export const MainView = () => {

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);

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
    <BrowserRouter>
      <Toolbar
        user={user}
        onLogoutClick={() => { setUser(null); setToken(null); localStorage.clear(); }} />

      <Container>
        <Row className="justify-content-md-center p-5">
          <Routes>
            <Route
              path="/login"
              element={
                <>
                  {user ? (
                    <Navigate to="/" />
                  ) : (
                    <Col md={5}>
                      <LoginView
                        onLoggedIn={(user, token) => {
                          setUser(user);
                          setToken(token);
                        }}
                      />
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path="/signup"
              element={
                <>
                  {user ? (
                    <Navigate to="/" />
                  ) : (
                    <Col md={5}>
                      <SignupView />
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path="/movies/:movieId"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <Col md={8}>
                      <MovieView
                        movies={movies}
                      />

                      {/* <hr />
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
                      } */}
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <>
                      {movies.map((movie) => (
                        <Col className="mb-5" key={movie.id} md={4} lg={3}>
                          <MovieCard
                            movie={movie}
                          // onMovieClick={(newSelectedMovie) => {
                          //   setSelectedMovie(newSelectedMovie);

                          //   // the state for selectedMovie is not update here??
                          //   //setSimilarMovies(movies.filter(checkGenre));
                          //   setSimilarMovies(movies.filter(m => {
                          //     return m.Genre.Name === newSelectedMovie.Genre.Name && m.id !== newSelectedMovie.id;
                          //   }));
                          // }} 
                          />
                        </Col>
                      ))}
                    </>
                  )}
                </>
              }
            />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
};