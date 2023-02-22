import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLogoutClick }) => {

  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">myFlix</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {!user ? (
            <>
              <Nav.Link className="me-3" as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/profile">{user.Username}</Nav.Link>
              <Button variant="primary" className="ms-3" type="submit" onClick={onLogoutClick}><i className="fas fa-power-off"></i></Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};