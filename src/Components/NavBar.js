import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
   return (
      <nav>
         <Link to={'/'}>
         <img src="https://pbs.twimg.com/media/ES67d4CX0AAqZeZ.jpg" alt="" style={{height: '50px', width: '50px'}} />
         </Link>
         <Link to={'/movies'}>Movies</Link>
         <Link to={'/people'}>People</Link>
         <Link to={'/locations'}>Locations</Link>
      </nav>
   )
}

export default NavBar