import react from "react";
import Link from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";

export const FavoriteMovies = ({ favoriteMovies, onAddFavorite, onRemoveFavorite }) => {

  return (
    <div>
      <h2 className="mt-5">Favorite Movies</h2>
      {!favoriteMovies || favoriteMovies.length === 0 ?
        <div>No movies added yet</div> :
        favoriteMovies.map((favoriteMovie) => {
          return (
            <MovieCard movie={favoriteMovie} isFavorite={true} onAddFavorite={onAddFavorite} onRemoveFavorite={onRemoveFavorite} />
          )
        })
      }
    </div>
  )
}