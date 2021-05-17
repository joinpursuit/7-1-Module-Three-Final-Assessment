import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/nav.css'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/db/The_Movies_Coverart.jpg/220px-The_Movies_Coverart.jpg"
            alt="pokeball"
            style={{ height: "50px", width: "50px" }}
          />
        </Link>
        <Link to="/movies">Movies</Link>
        <Link to="/people">People</Link>
        <Link to="/locations">Locations</Link>
      </div>
    );
  }
}
