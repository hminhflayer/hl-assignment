import React from 'react';
import Avatar from '../img/Avatar.png';
import Logo from '../img/Logo.png';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div>
        <img src={Logo} className='navbar-logo'>
        </img>
      </div>
      <div className='navbar-author'>
        <div>Handicrafted by <br/><span className='navbar-name'>Hoàng Minh</span></div>
        <img src={Avatar} className='navbar-img'>
        </img>
      </div>
    </div>
  )
}

export default Navbar