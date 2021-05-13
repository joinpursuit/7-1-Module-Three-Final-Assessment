import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Movies from "./Movies.js";
import People from "./People.js";
import Locations from "./Locations.js";
import "./App.css";
import Icon from "./img/film.jpeg";

export class App extends Component {
  home = () => {
    return (
      <div className="home">
        <h1>Welcome to GhibliApp</h1>;
      </div>
    );
  };

  render() {
    return (
      <div className="app">
        <nav className="nav">
          <Link to="/">
            <img src={Icon} alt="" />
          </Link>{" "}
          <Link to="/movies">Movies</Link> <Link to="/people">People</Link>{" "}
          <Link to="/locations">Locations</Link>
        </nav>
        <div className="switch">
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/people" component={People} />
            <Route path="/locations" component={Locations} />
            <Route path="/" render={this.home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
