import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const NavBar = () => {
        return (
            <div>
                <nav className="nav">
                    <Link to="/">
                        <img src="https://wallpaperaccess.com/full/42622.jpg"
                                alt="studio ghibli pic"
                                style={{height: '50px', width: '50px'}}                        
                        />
                    </Link>
                    <Link to="/movies">Movies</Link>{' '}
                    <Link to="/people">People</Link>{' '}
                    <Link to="/locations">Locations</Link>

                </nav>
                
            </div>
        )
    }


export default NavBar
