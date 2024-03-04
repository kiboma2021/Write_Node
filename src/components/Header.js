import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import Logo from '../assets/logo.jpeg'

export const Header = () => {
  return (
    <div>
        <Link>
            <img src={Logo} alt="NoteBook" />
            NoteBook
        </Link>
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>Create</NavLink>
            <NavLink to='/'>Login</NavLink>
        </div>
      
    </div>
  )
}
