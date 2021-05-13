import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <nav>
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/86/Studio_Ghibli_portal_logo.png"
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
