import React from 'react'
import '../App_style.css'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div className="nav">
            <div className="nav-item" >
                <Link className="nav-link" to="/">
                    Home
                </Link>
            </div>
            <div className="nav-item" >
                <Link className="nav-link" to="/Add_Task">
                    Add List
                </Link>
            </div>
            <div className="nav-item" >
                <Link className="nav-link" to="/Remove_all_task">  
                    Remove List
                </Link>
            </div>
            <div className="nav-item" >
                <Link className="nav-link" to="/Delete_Specific_Task">
                    Remove Specific Task
                </Link>
            </div>
            <div className="nav-item" >
                <Link className="nav-link" to="/Display_Specific_task">
                    Display Specific Task
                </Link>
            </div>
        </div>
    )
}

export default Header
