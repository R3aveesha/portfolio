import React from 'react';
import './Navbar.css'
//import logo


function Navbar() {
    return (
      <nav className='navbar'>
        <img src='' alt=''></img>
        <div className='desktopMenu'>
            <link className='deskTopLidtItem'>Home</link>
            <link className='deskTopLidtItem'>Clients</link>
            <link className='deskTopLidtItem'>About</link>
            <link className='deskTopLidtItem'>Portfolio</link>
        </div>
        <button className='desktopMen uBtn'>
            <img src="" alt="" className='desktopMenuImg'/>

        </button>
      </nav>
    );
}

export default Navbar;
