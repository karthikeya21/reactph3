import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <ul className='nav justify-content-center'>
      <li className='nav-item'>
        <Link className='nav-link' to='/'>Home</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/signin'>Sign in</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/signup'>Sign up</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/technologies'>Technologies</Link>
      </li>

    </ul>
  )
}

export default Navbar