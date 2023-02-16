import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);
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
    </div>
  );
};

//Props constraints for the MovieView

MovieView.propTypes = {
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
};