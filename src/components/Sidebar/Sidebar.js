import React,{useState} from 'react'
import './Sidebar.css'

function Sidebar() {
    const collapse = () => {
        setCollapsed(!collapsed)
    }

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className='side-nav-container'>
            { collapsed ? 
            (<button onClick={()=>collapse()}> Show sidebar</button>) : 
            (<button onClick={()=>collapse()}> Collapse</button>)}
            

            {
                collapsed ? (<div></div>) : 
                <div className='side-nav'>
                    <a className="active" href="#home">Home</a>
                    <a href="#media">Media Library</a>
                    <a href="#analytics">Web Analytics</a>
                    <a href="#settings">Settings</a>
                </div>
            }
            
            
        </div>
    )
}

export default Sidebar
