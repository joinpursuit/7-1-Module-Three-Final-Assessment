import React from 'react'
import { Link } from "react-router-dom"


export default function Navbar() {
    return (
        <nav>
        <Link to="/"><img src="https://i.pinimg.com/736x/b0/25/0b/b0250b4a3b94b1f55e2a5665a141d707.jpg" alt="movieticket" width="50" height="50" /></Link> 
        <Link to="/people">People</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    )
}
