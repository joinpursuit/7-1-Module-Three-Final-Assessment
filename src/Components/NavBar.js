import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    
    return (
        <div>
            <nav style={{display:'flex', justifyContent:'space-around', backgroundColor:"ivory"}}> 
                <Link to="/">
                <img  style={{height:"50px", width:"50px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJGs4NOvOLfMl5WbRLVNq88PpSi4C2B65LA&usqp=CAU" alt="ghibli" />
                </Link>
                <Link to="/movies">Movies</Link>
                <Link to="/people">People</Link>
                <Link to="locations">Locations</Link>
            </nav>
        </div>
    )
}
