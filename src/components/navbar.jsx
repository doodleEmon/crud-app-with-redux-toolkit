import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-gray-400 p-4 text-white'>
            <div>
                <a href='/' className='font-bold'>RTK CRUD</a>
            </div>
            <ul className='flex gap-4 font-semibold'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
