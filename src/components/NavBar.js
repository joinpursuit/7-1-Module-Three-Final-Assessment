import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav>
                <Link to="/">
                    <img src="https://www.kindpng.com/picc/m/187-1876040_popcorn-and-movie-reel-transparent-background-hd-png.png"
                    alt="movie-img"
                    style={{ height: "50px", width: "50px" }}
                    />
                </Link>{" "}
                <Link to="/movies">Movies</Link>{" "}
                <Link to="/people">People</Link>{" "}
                <Link to="/locations">Locations</Link>
            </nav>
        </div>
    )
}

export default NavBar;
