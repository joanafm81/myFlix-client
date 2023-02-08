import { useState } from "react";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    // This prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();

    const data = {
      acess: username,
      secret: password
    };

    fetch("https://myflix-jfm.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user.");
        }
      })
      .catch((e) => {
        alert("Something went wrong.");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="5"
          pattern="[0-9a-zA-Z]{5,}"
        />
      </label>
      <label>
        Password:
        <input type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength="8"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}