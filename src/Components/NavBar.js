import React from "react";
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <img
            src="https://static.wikia.nocookie.net/disney/images/5/53/Totoro.jpg/revision/latest/top-crop/width/360/height/450?cb=20120111023322"
            alt="totoro logo"
            style={{ height: "50px", width: "50px" }}
          />
        </Link>{" "}
        <Link to="/people">People</Link>{" "}
        <Link to="/locations">Locations</Link>{" "}
        <Link to="/movies">Movies</Link>
      </nav>
    </div>
  );
};

export default NavBar;