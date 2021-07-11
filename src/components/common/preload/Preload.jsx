import React from "react";
import { useEffect } from "react";
import Logo from "../../../theme/images/logo.svg";
import "./preload.styles.scss";

const Preload = () => {
  useEffect(() => {
    const loader = document.getElementById("preload");
    setTimeout(() => {
      loader.classList.add("is-hidden");
    }, 1500);
  }, []);
  return (
    <div className="preload" id="preload">
      <img src={Logo} alt="Logo sitio del Preload" className="preload__logo" />
    </div>
  );
};

export default Preload;
