import React, { useEffect } from 'react'
import { Link,NavLink } from 'react-router-dom'
import Logo from '../assets/logo.jpeg'

export const Header = ({darkMode, setdarkMode}) => {
 
  const isAuth = true;

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[darkMode]);
  return (
    <div className='flex justify-between items-center flex-wrap p-10'>
        <Link to='/' className='flex gap-3 items-center text-3xl '>
            <img className='h-12' src={Logo} alt="NoteBook" />
            NoteBook
        </Link>
        <div className='text-2xl'>
            <span onClick={()=>setdarkMode(!darkMode)}>{darkMode?(<i className="bi bi-sun-fill mx-2" />):(<i className="bi bi-moon-stars-fill mx-2" />)}
              
            </span>
            <NavLink to='/' className='mx-2'>Home</NavLink>
            {isAuth?(
              <>
                <NavLink to='/post' className='mx-2'>Create</NavLink>
                <button className='mx-2 p-2 text-white rounded-xl bg-blue-500'><i className="bi bi-box-arrow-right" />Logout</button>
              </>
            ):(
              <button className='mx-2 p-2 text-white rounded-xl bg-blue-500'><i className="bi bi-google" />Login</button>
            )}
        </div>
      
    </div>
  )
}
