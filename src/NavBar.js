import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

    return (
        
            <nav className='NavBar'>
                <Link to='/'>
                    <img style={{width:'50px', height: '50px'}} src='https://cdn.vox-cdn.com/thumbor/-FjfBFqKm6dIiWgulRNqrilhjL0=/0x0:6000x4800/920x613/filters:focal(3818x1875:4778x2835):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66840504/Studio_Ghibli_Logo.0.jpg' alt="Ghibli" />
                </Link>
                <Link to='/movies'>Movies</Link>
                <Link to='/people'>People</Link>
                <Link to='/locations'>Locations</Link>
            </nav>
        
    )
}

export default NavBar