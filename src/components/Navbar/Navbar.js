import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog , faBell, faUserCircle, faSearch} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

function Navbar({search, setSearch}) {
   

    const searchFunction = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    return (
        <div>
            <div className='navbar-container'>
                <div className='topnav'>
                    <div className='logo'>LOGO</div>
                    <div className='search-container'>
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="text" placeholder="Search.." value={search} onChange={(e)=> searchFunction(e)}></input>
                    </div>
                    
                    <div className='float-right'>
                        <a href="#home"><FontAwesomeIcon icon={faBell} /></a>
                        <a href="#about"><FontAwesomeIcon icon={faCog} /></a>
                        <a href="#contact"><FontAwesomeIcon icon={faUserCircle} /></a>
                    </div>
                   
                </div>  
            </div>

        </div>
    )
}

export default Navbar

