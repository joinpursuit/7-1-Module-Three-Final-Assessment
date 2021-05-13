import React from "react";
import { Link } from 'react-router-dom';
// https://www.pngarea.com/pngm/659/4611004_studio-ghibli-png-is-this-your-first-heart.png
const NavBar = () => {
    return(
        <div>
        <nav>
        <Link to="/">
            <img src="https://www.pngarea.com/pngm/659/4611004_studio-ghibli-png-is-this-your-first-heart.png" alt="ghibli logo" width="50px" height="50px"/>
        </Link>
        {"  "}
        <Link to="/movies">Movies</Link>
        {"  "}
        <Link to="/people">People</Link>
        {"  "}
        <Link to="/locations">Locations</Link>
        </nav>
        </div>
    );
};
export default NavBar;