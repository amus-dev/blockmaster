import React from "react";
import LogoBlockMaster from "../../../theme/images/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={`/`}>
      <img src={LogoBlockMaster} alt="Logo del sitio BlockMaster" />
    </Link>
  );
};

export default Logo;
