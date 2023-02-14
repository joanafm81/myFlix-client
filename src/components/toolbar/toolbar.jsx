import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export const Toolbar = ({ user, onLogoutClick }) => {

  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">myFlix</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {!user ? (
            <></>
          ) : (
            <>
              <Nav.Link href="#profile">{user.Username}</Nav.Link>
              <Button variant="primary" className="ms-3" type="submit" onClick={onLogoutClick}><i className="fas fa-power-off"></i></Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

};