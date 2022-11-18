import React, { Component, useState } from 'react'
import {
    faHouseUser,
    faCircleInfo,
    faBriefcase,
    faAddressBook,
    faSignIn,
    IconDefinition,
    faLandmark,
    faBarsStaggered,
    faTimes,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {}

function Navbar({ }: Props) {
    const [sideMenuOpen, setSideMenuOpen] = useState(false)
    const toggleSideMenu = () => setSideMenuOpen(!sideMenuOpen);



    return (
        <nav className='navbar-items'>
            <h1 className='logo'>
                React <FontAwesomeIcon icon={faLandmark} />
            </h1>

            <div className='menu-icons' onClick={toggleSideMenu}>
                <FontAwesomeIcon icon={sideMenuOpen ? faTimes : faBarsStaggered} />
            </div>

            <ul className='nav-menu'>
                <NavbarButton link='#' icon={faHouseUser}>Home</NavbarButton>
                <NavbarButton link='#' icon={faCircleInfo}>About</NavbarButton>
                <NavbarButton link='#' icon={faBriefcase}>Service</NavbarButton>
                <NavbarButton link='#' icon={faAddressBook}>Contact</NavbarButton>
                <NavbarButton link='#' icon={faSignIn}>Sign Up</NavbarButton>
            </ul>
        </nav>
    )
}

type ButtonProps = {
    link: string;
    icon: IconDefinition;
    children: string;
}

function NavbarButton({ link, icon, children }: ButtonProps) {
    return (
        <li>
            <a href={link} className='nav-link'>
                <FontAwesomeIcon className='nav-link-icon' icon={icon} />
                {children}
            </a>
        </li>
    )
}


export default Navbar