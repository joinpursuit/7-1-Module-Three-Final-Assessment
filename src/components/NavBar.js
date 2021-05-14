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

                <Link to="/movies">
                    <div
                    className="box_item"
                    data-hover="えいが">
                    Movies
                    </div>
                    </Link>{" "}

                <Link to="/people">
                    <div className="box_item"
                    data-hover="人々">
                    People
                    </div>
                    </Link>{" "}


                <Link to="/locations">
                    <div className="box_item"
                    data-hover="ロケーション">
                    Locations
                    </div>
                    </Link>
            </nav>
        </div>
    )
}

export default NavBar;
