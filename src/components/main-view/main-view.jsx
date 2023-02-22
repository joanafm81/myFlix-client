import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { ProfileView } from "../profile-view/profile-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Form from "react-bootstrap/Form";


export const MainView = () => {

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [movieFilter, setFilter] = useState(null);

  const addFavorite = (id) => {

    fetch(`https://myflix-jfm.herokuapp.com/users/${user.Username}/movies/${id}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then((response) => {
      if (response.ok) {
        let updatedUser = user;
        updatedUser.FavoriteMovies.push(id);
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        alert("Update successful.");
      } else {
        alert("Update failed.");
      }
    });
  };

  const removeFavorite = (id) => {

    fetch(`https://myflix-jfm.herokuapp.com/users/${user.Username}/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then((response) => {
      if (response.ok) {
        let updatedUser = user;
        let indexToRemove = updatedUser.FavoriteMovies.indexOf(id);
        updatedUser.FavoriteMovies.splice(indexToRemove, 1);
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        alert("Delete successful.");
      } else {
        alert("Delete failed.");
      }
    });
  };

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
      <NavigationBar
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
              path="/profile"
              element={
                <>
                  {user ? (
                    <Col md={5}>
                      <ProfileView movies={movies} userData={user} userToken={token} onAddFavorite={addFavorite} onRemoveFavorite={removeFavorite} />
                    </Col>
                  ) : (
                    <Navigate to="/login" />
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
                        userData={user}
                        userToken={token}
                      />
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
                      <Form>
                        <Form.Group controlId="formSearch" className="mb-3">
                          <Form.Control
                            type="text"
                            onChange={(e) => setFilter(e.target.value)}
                            placeholder="Search"
                          />
                        </Form.Group>
                      </Form>
                      {movies.filter(m => !movieFilter || m.Title.toLowerCase().indexOf(movieFilter.toLowerCase()) >= 0).map((movie) => (
                        <Col className="mb-5" key={movie.id} md={4} lg={3}>
                          <MovieCard
                            movie={movie} isFavorite={user.FavoriteMovies.includes(movie.id)} onAddFavorite={addFavorite} onRemoveFavorite={removeFavorite}
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
    </BrowserRouter >
  );
};