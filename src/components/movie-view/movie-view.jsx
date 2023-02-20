import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";

export const MovieView = ({ movies, userData, userToken }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);
  const similarMovies = movies.filter(m => {
    return m.Genre.Name === movie.Genre.Name && m.id !== movie.id;
  });

  return (
    <div>
      <div>
        <img src={movie.ImageURL} className="w-100" alt="Movie Poster" />
      </div>
      <h1>
        {movie.Title}
      </h1>
      <p>
        <label>Director</label>
        <span>{movie.Director.Name}</span>
      </p>
      <p>
        <label>Genre</label>
        <span>{movie.Genre.Name}</span>
      </p>
      <p>
        <label>Description</label>
        <span>{movie.Description}</span>
      </p>
      <Link to={`/`}>
        <Button className="back-button">Back</Button>
      </Link>

      <hr />
      <h2>Similar Movies</h2>
      {similarMovies.length > 0 &&
        <Row>
          {similarMovies.map((movie) => (
            <Col className="mb-5" key={movie.id} md={6} lg={4}>
              <MovieCard
                key={movie.id}
                movie={movie}
                userData={userData}
                userToken={userToken}
              />
            </Col>
          ))}
        </Row>
      }
      {similarMovies.length === 0 &&
        <div>No similar movies found.</div>
      }
    </div >
  );
};

//Props constraints for the MovieView

/*MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Description: PropTypes.string,
    Genre: PropTypes.shape({
      Name: PropTypes.string,
    }).isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string
    }).isRequired,
  }).isRequired,
};*/