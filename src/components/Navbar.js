import React from 'react';
import './Navbar.css'
import logo from '../assets/logo.png'
import {Link} from 'react-scroll'

function Navbar() {
    return (
      <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo'></img> 
        <div className='desktopMenu'>
            <Link></Link>
            <Link className='deskTopListItem'>Home</Link>
            <Link className='deskTopListItem'>Clients</Link>
            <Link className='deskTopListItem'>About</Link>
            <Link className='deskTopListItem'>Portfolio</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src="" alt="" className='desktopMenuImg'/>

        </button>
      </nav>
    );
}

export default Navbar;