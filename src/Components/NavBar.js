import React from 'react';
import  { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <nav>
                <Link to="/">
                    <img 
                    src="https://i.pinimg.com/originals/b4/00/a2/b400a2b4ca3da09dbee9ea425e3bd857.jpg"
                    alt="Studio Ghibli logo "
                    style={{ height: "50px", width: "50px" }}
                    />
                </Link>{" "}
                <Link to="/movies">Movies</Link>{" "}
                <Link to="/locations">Locations</Link>{" "}
                <Link to="/people">People</Link> 
            </nav>
        </div>
    );
};

export default NavBar;