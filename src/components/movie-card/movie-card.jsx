import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import "./movie-card.scss";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card className="h-100" onClick={() => { onMovieClick(movie) }}>
      <Card.Img variant="left" src={movie.ImageURL} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{movie.Genre.Name}</Card.Subtitle>
        <Card.Text className="text-truncate">{movie.Description}</Card.Text>
        {/* <Button variant="link">
          Details
        </Button> */}
      </Card.Body>
    </Card>
    /*<div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.Title}
    </div>*/
  );
};

//Props constraints for the MovieCard

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};