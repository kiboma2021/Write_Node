import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import Logo from '../assets/logo.jpeg'

export const Header = () => {
  return (
    <div className='flex justify-between items-center m-10'>
        <Link className='flex gap-3 items-center text-3xl '>
            <img className='h-12' src={Logo} alt="NoteBook" />
            NoteBook
        </Link>
        <div className='text-2xl'>
            <NavLink to='/' className='mx-2'>Home</NavLink>
            <NavLink to='/post' className='mx-2'>Create</NavLink>
            <NavLink to='/' className='mx-2'>Login</NavLink>
        </div>
      
    </div>
  )
}
