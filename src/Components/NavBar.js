import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="links">
      <Link to="/">
        <img
          src="https://www.nicepng.com/png/detail/875-8758012_dog-movie-sunglass-popcorn-movietheater-movietime-red-chien.png"
          alt="movie dog"
          style={{ width: "50px", height: "50px " }}
        />
      </Link>{" "}
      <Link to="/movies">Movies</Link> <Link to="/people">People</Link>{" "}
      <Link to="/locations">Locations</Link>
    </div>
  );
};

export default NavBar;
