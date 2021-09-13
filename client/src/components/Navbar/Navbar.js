import React from 'react'
import cl from '../Images/cloud.png';
import './Navbar.css'
const Navbar = ({curaccount}) => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper white">
                    <img src={cl} alt="" className = "cloud"/>
                    <a href="" className="brand-logo black-text">
                        DROPBLOCKS
                    </a>
                    <li className = "right black-text hide-on-med-and-down">
                        {curaccount}
                    </li>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
