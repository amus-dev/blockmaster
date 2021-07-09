import React from "react";
import Routes from "./config/Routes";
import { MoviesProvider } from "./context/MoviesContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./theme/sass/style.scss";

const App = () => {
  return (
    <div className="App">
      <MoviesProvider>
        <Routes />
      </MoviesProvider>
    </div>
  );
};

export default App;
