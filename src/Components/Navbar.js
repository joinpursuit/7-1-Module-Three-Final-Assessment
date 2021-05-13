import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div>
            <nav>
                <Link to="/">
                    <img src="https://i.pinimg.com/736x/54/51/75/54517514b7e9c8c21cb1526176c30732.jpg" alt="movie logo" style={{height: "50px", width: "50px"}}/>
                </Link>{" "}
                <Link to="/movies">Movies</Link>{" "}
                <Link to="/people">People</Link>{" "}
                <Link to="/locations">Locations</Link>{" "}
            </nav>
        </div>
    )
}

export default NavBar;