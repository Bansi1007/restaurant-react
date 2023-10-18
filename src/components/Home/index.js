import React from 'react'
import wallpaper from '../../assets/image/wallpaper.jpg'

import { Link } from 'react-router-dom'; 

function index() {
  return (
    <div>
         <section className='hero'>
      <img className='wallpaper' src={wallpaper} alt='wallpaper'/>
      <div className='hero-overlay'>
          <div className='hero-content'>
            <h1>Welcome to Epicurean Haven</h1>
            <p>Discover a culinary journey of flavors</p>
            <Link to='/menu'>
              <button>Explore Menu</button>
            </Link>
          </div>
        </div>
        </section>
    </div>
  )
}

export default index
