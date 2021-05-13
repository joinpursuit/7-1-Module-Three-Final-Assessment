import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <nav>
                <Link to="/">
                    <img src="https://toppng.com/uploads/preview/film-cinema-illustration-popcorn-and-projector-movie-11562911119ni7qtdkdp4.png"
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
