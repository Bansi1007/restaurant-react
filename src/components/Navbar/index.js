import React from 'react'
import About from '../About'
import Home from '../Home'
import { NavLink } from 'react-router-dom'
import './index.css'


function Navbar() {

  return (
    <div className='navbar'>
        <div className='leftSide'>
          <h3 data-text="Epicurean Haven">Epicurean Haven</h3>
        </div>
        <div className='rightSide'>
           <nav>
           <NavLink exact={true} activeClassName="active" to="/menu">
            <h4>Menu</h4>
          </NavLink>

          <NavLink exact={true} activeClassName="active" to="/about">
            <h4>About</h4>
          </NavLink>

          <NavLink exact={true} activeClassName="active" to="/contact_us">
            <h4>Contact Us</h4>
          </NavLink>
           </nav>


        </div>
      
    </div>
  )
}

export default Navbar
