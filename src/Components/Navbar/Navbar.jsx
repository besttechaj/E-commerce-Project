import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <div className='navbar_outer'>
        <div className='navbar_inner'>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/courses'>Course</NavLink>
            </li>
            <li>
              <NavLink to='/blocks'>Blocks</NavLink>
            </li>
            <li>
              <NavLink to='/articles'>Articles</NavLink>
            </li>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink to='/signup'>SignUp</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
