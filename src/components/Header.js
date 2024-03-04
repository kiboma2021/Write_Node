import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <Link>
            <img src="" alt="" />
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
