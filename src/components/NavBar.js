import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <img
            src="https://img.favpng.com/6/13/24/drawing-studio-ghibli-ghibli-museum-animated-film-png-favpng-yuKF9L8LNYV5fUpwTAm7brAxz.jpg"
            alt="logo"
            style={{ height: "50px", width: "50px" }}
          />{" "}
        </Link>
        <Link to="/movies">Movies</Link> <Link to="/people">People</Link>{" "}
        <Link to="/locations">Locations</Link>
      </nav>
    </div>
  );
};

export default NavBar;
