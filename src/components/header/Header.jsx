import React from "react";
import { Navbar } from "react-bootstrap";
import Logo from "./logo/";
import "./header.styles.scss";
import Menu from "./menu";

const Header = () => {
  return (
    <Navbar className="menu" expand="lg">
      <Logo />
      <Menu />
    </Navbar>
  );
};

export default Header;
