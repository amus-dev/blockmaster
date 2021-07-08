import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import PopularMovies from "../pages/PopularMovies";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/popular/:order" component={PopularMovies} />
      </Switch>
    </Router>
  );
};

export default Routes;
