import { MovieCard } from "../movie-card/movie-card";
import { Row, Col } from "react-bootstrap";

export const FavoriteMovies = ({ favoriteMovies, onAddFavorite, onRemoveFavorite }) => {

  return (
    <div>
      <h2 className="mt-5">Favorite Movies</h2>
      {!favoriteMovies || favoriteMovies.length === 0 ?
        <div>No movies added yet</div> :
        <Row>
          {favoriteMovies.map((favoriteMovie) => {
            return (
              <Col md={5}>
                <MovieCard movie={favoriteMovie} isFavorite={true} onAddFavorite={onAddFavorite} onRemoveFavorite={onRemoveFavorite} />
              </Col>
            )
          })}
        </Row>
      }
    </div>
  )
}