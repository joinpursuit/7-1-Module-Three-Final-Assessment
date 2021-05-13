import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink to='/'>
                <img src='https://i2.wp.com/banner2.cleanpng.com/20190730/shy/kisspng-photographic-film-movie-camera-cinema-website-and-mobile-application-development-service-5d3fc924ce3b33.8538265315644613488447.jpg'
                    alt='Cinema Logo'
                />
            </NavLink>
            <NavLink to='/movies'>Movies</NavLink> {' '}
            <NavLink to='/people'>People</NavLink> {' '}
            <NavLink to='locations'>Locations</NavLink>
        </nav>
    )
}

export default NavBar;