import React, { useEffect, useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import Logo from '../assets/logo.jpeg'

export const Header = () => {
  const [darkMode, setdarkMode ] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[darkMode]);
  return (
    <div className='flex justify-between items-center flex-wrap m-10 dark:bg-slate-900 dark:text-white'>
        <Link to='/' className='flex gap-3 items-center text-3xl '>
            <img className='h-12' src={Logo} alt="NoteBook" />
            NoteBook
        </Link>
        <div className='text-2xl'>
            <span onClick={()=>setdarkMode(!darkMode)}>{darkMode?(<i class="bi bi-sun-fill mx-2" />):(<i className="bi bi-moon-stars-fill mx-2" />)}
              
            </span>
            <NavLink to='/' className='mx-2'>Home</NavLink>
            <NavLink to='/post' className='mx-2'>Create</NavLink>
            <NavLink to='/' className='mx-2'>Login</NavLink>
        </div>
      
    </div>
  )
}
