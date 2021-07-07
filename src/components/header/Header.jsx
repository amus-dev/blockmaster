import React from "react";
import { Navbar } from "react-bootstrap";
import Logo from "./logo/";
import "./header.styles.scss";
import Menu from "./menu";
import Search from "./search";

const Header = () => {
  return (
    <Navbar className="menu" expand="lg">
      <Logo />
      <div className="menu__nav">
        <Menu />
        <Search />
      </div>
    </Navbar>
  );
};

export default Header;
