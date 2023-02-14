import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

export const MovieView = ({ movie, onBackClick }) => {
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
        <div>{movie.Director.Name}</div>
      </p>
      <p>
        <label>Genre</label>
        <div>{movie.Genre.Name}</div>
      </p>
      <p>
        <label>Description</label>
        <div>{movie.Description}</div>
      </p>
      <Button onClick={onBackClick}>Back</Button>
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