import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Menu = () => {
  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" className="navbar__link">
            Todas
          </Nav.Link>
          <Nav.Link href="#link" className="navbar__link">
            Más Populares
          </Nav.Link>
          <Nav.Link href="#link" className="navbar__link">
            Menos Populares
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};

export default Menu;
