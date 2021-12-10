import React,{useState} from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleLeft, faArrowAltCircleRight, faHome, faPhotoVideo, faCog, faChartPie} from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    const collapse = () => {
        setCollapsed(!collapsed)
    }

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className='side-nav-container'>
            { collapsed ? 
            (
                <div class='show-button' onClick={()=>collapse()}>
                    <span><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>
                </div>
            ) : 
            (
                <div class='collapse-button' onClick={()=>collapse()}>
                    <span><FontAwesomeIcon icon={faArrowAltCircleLeft} /></span>
                </div>
            )}
            

            {
                collapsed ? (<div></div>) : 
                <div className='side-nav'>
                    <a className="active" href="#home"><FontAwesomeIcon icon={faHome} />  Home</a>
                    <a href="#media"><FontAwesomeIcon icon={faPhotoVideo} />  Media Library</a>
                    <a href="#analytics"><FontAwesomeIcon icon={faChartPie} />  Web Analytics</a>
                    <a href="#settings"><FontAwesomeIcon icon={faCog} />  Settings</a>
                </div>
            }
            
            
        </div>
    )
}

export default Sidebar
