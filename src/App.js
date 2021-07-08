import React from "react";
import Routes from "./config/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./theme/sass/style.scss";

const App = () => {
  console.log(process.env);
  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
