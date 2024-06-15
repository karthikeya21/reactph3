import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Technologies() {
  return (
    <div>
      <h2>technologies</h2>
    <ul className='nav justify-content-center'>
      <li className='nav-item'>
        <Link className='nav-link' to='angular'>angular</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='reactjs'>react</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='vue'>vue</Link>
      </li>
      

    </ul>

    <Outlet/>
    </div>
  )
}

export default Technologies