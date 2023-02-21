import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./movie-card.scss";

export const MovieCard = ({ movie, isFavorite, onAddFavorite, onRemoveFavorite }) => {

  return (
    <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
      <Card className="h-100">
        <Card.Img variant="left" src={movie.ImageURL} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{movie.Genre.Name}</Card.Subtitle>
          <Card.Text className="text-truncate text-muted">{movie.Description}</Card.Text>

          {isFavorite ?
            <Button variant="link" className="setFavorite" onClick={(e) => { e.preventDefault(); onRemoveFavorite(movie.id) }}>
              <i className="fas fa-star"></i>
            </Button>
            :
            <Button variant="link" className="setFavorite" onClick={(e) => { e.preventDefault(); onAddFavorite(movie.id) }}>
              <i className="far fa-star"></i>
            </Button>
          }

        </Card.Body>
      </Card>
    </Link>
  );
};

//Props constraints for the MovieCard

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string
  }).isRequired,
  // onMovieClick: PropTypes.func.isRequired
};