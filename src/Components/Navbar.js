import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
export default function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <Link  to='/'>
                    <img 
                    className='movie-dog' 
                    src='https://barkpost.com/wp-content/uploads/2014/04/51hmU-R8sSL._SY300_.jpg'
                    alt= "movie dog"
                    />
                </Link> {' '}
                <Link  to='/movies'>Movies</Link> {' '}
                <Link   to='/people'>People</Link> {' '}
                <Link  to='/locations'>Locations</Link>

            </nav>
        </div>
    )
}
