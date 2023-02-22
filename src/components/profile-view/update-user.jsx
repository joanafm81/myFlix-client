import { useState } from "react";
import react from "react";
import { Button, Form } from "react-bootstrap";

export const UpdateUser = ({ userData, handleUpdate }) => {

  const [username, setUsername] = useState(userData.Username);
  const [password, setPassword] = useState(userData.Password);
  const [email, setEmail] = useState(userData.Email);
  const [birthday, setBirthday] = useState(userData.Birthday.substring(0, 10));

  const handleSubmit = function (event) {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

    handleUpdate(data);
  }

  return (
    <>
      <h2 className="mt-5">Update profile</h2>

      <Form className="my-3"
        onSubmit={handleSubmit}>
        {/* COMMENTED BECAUSE THE API DOESN'T CHANGE THE USERNAME

        <Form.Group controlId="formUSername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength="5"
            pattern="[0-9a-zA-Z]{5,}"
            placeholder="Username"
          />
        </Form.Group> */}

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="8"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
        </Form.Group>

        <Form.Group controlId="formBirthday" className="mb-3">
          <Form.Label>Birthday:</Form.Label>
          <Form.Control
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
            placeholder="Birthday"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </>
  )
}