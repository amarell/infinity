import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <div className='navbar-container'>
                <div className='topnav'>
                    <div className='logo'>LOGO</div>
                    <input type="text" placeholder="Search.."></input>
                    <a class="active" href="#home">Notifications</a>
                    <a href="#about">Settings</a>
                    <a href="#contact">Profile</a>
                    
                </div>  
            </div>

        </div>
    )
}

export default Navbar
