import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to={`/`} className="navbar__link">
            Todas
          </Link>
          <Link to={`/popular/asc`} className="navbar__link">
            Más Populares
          </Link>
          <Link to={`/popular/desc`} className="navbar__link">
            Menos Populares
          </Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};

export default Menu;
