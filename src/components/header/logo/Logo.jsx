import React from "react";
import { Navbar } from "react-bootstrap";
import LogoBlockMaster from "../../../theme/images/logo.svg";

const Logo = () => {
  return (
    <Navbar.Brand href="#home">
      <img src={LogoBlockMaster} alt="Logo del sitio BlockMaster" />
    </Navbar.Brand>
  );
};

export default Logo;
