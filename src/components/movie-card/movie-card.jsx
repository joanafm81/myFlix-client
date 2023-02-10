import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card className="h-100">
      <Card.Header>{movie.Featured}</Card.Header>
      <Card.Img variant="top" src={movie.ImageURL} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Button onClick={() => { onMovieClick(movie) }} variant="link">
          Open
        </Button>
      </Card.Body>
      <Card.Footer>{movie.Genre.Name}</Card.Footer>
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