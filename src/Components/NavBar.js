import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink to='/'>
                <img src='https://c1.klipartz.com/pngpicture/770/979/sticker-png-movie-logo-computer-icons-cinema-film-theatre-movie-theater-play-event-tickets-thumbnail.png'
                    alt='Cinema Logo'
                    style={{ height: '50px' }} />
            </NavLink>
            <NavLink to='/movies'>Movies</NavLink> {' '}
            <NavLink to='/people'>People</NavLink> {' '}
            <NavLink to='locations'>Locations</NavLink>
        </nav>
    )
}

export default NavBar;