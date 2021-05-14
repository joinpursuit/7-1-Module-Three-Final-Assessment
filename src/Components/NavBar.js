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
            <NavLink to='/movies' className='navlink'>Movies</NavLink>
            <NavLink to='locations' className='navlink'>Locations</NavLink>
            <NavLink to='/people' className='navlink'>People</NavLink>
            {/* <NavLink to='/peopletwo' className='navlink'>People Two</NavLink> */}
        </nav>
    )
}

export default NavBar;