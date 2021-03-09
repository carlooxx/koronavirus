import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="!#" className="text-white">
            COVID-19
          </Navbar.Brand>
          <Navbar.Brand href="!#" className="text-white">
            Croatia
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
