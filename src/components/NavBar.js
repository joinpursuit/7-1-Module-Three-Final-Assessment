import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(){
        return (
            <nav className="nav-bar">
                <Link to ="/">
                    <img 
                        src="https://img.favpng.com/11/12/11/dog-stock-photography-cinema-film-royalty-free-png-favpng-tu1anz6M6NjjG6b9xQ4KGaKrh.jpg" 
                        alt="MovieDog" 
                        style={{height:"50px", width:"50px"}}
                    />
                </Link>
                <Link to ="/movies">Movies</Link>
                <Link to ="/people">People</Link>
                <Link to = "/locations">Locations</Link>
            </nav>
        )
    }

export default NavBar
