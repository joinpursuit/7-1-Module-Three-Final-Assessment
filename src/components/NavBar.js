import React from 'react'
import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {
    return (
        <div className="nav-bar">
          <Link to="/">
              <img
                className="home-logo"
                src="https://www.pngjoy.com/pngl/95/2001918_totoro-studio-ghibli-icon-png-transparent-png.png"
                alt="Ghibili"
              />
          </Link>
          <Link to="/movies">Movies</Link>
          <Link to="/people">People</Link>
          <Link to="/locations">Locations</Link>
        </div>
    )
}
