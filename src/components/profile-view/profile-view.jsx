import react from "react";
import { UserInfo } from "./user-info";
import { FavoriteMovies } from "./favorite-movies";
import { UpdateUser } from "./update-user";
import { DeleteUser } from "./delete-user";

export const ProfileView = ({ movies, userData, userToken, onAddFavorite, onRemoveFavorite }) => {

  // const [username, setUsername] = useState(userData.Username);
  // const [password, setPassword] = useState(userData.Password);
  // const [email, setEmail] = useState(userData.Email);
  // const [birthday, setBirthday] = useState(userData.Birthday.substring(0, 10));

  const handleUpdate = (data) => {

    fetch(`https://myflix-jfm.herokuapp.com/users/${userData.Username}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${userToken}`
      }
    }).then((response) => {
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        alert("Update successful.");
      } else {
        alert("Update failed.");
      }
    });
  };

  const handleDelete = (event) => {
    event.preventDefault();

    fetch(`https://myflix-jfm.herokuapp.com/users/${userData._id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${userToken}`
      }
    }).then((response) => {
      if (response.ok) {
        localStorage.clear();

        alert("Delete successful.");
      } else {
        alert("Delete failed.");
      }
    });
  };

  let favoriteMovies = movies.filter(m => userData.FavoriteMovies.includes(m.id));

  return (
    <>
      <h1>Profile</h1>

      {/* //User info */}
      <UserInfo username={userData.Username} email={userData.Email} />
      <DeleteUser handleDelete={handleDelete} />


      {/* Favorite movies list */}
      <FavoriteMovies favoriteMovies={favoriteMovies} onAddFavorite={onAddFavorite} onRemoveFavorite={onRemoveFavorite} />

      {/* User form */}

      <UpdateUser userData={userData} handleUpdate={handleUpdate} />
    </>
  )
}
