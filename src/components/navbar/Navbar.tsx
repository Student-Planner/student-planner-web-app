import React, { useState } from 'react'
import {
    faHouseUser,
    faCircleInfo,
    faBriefcase,
    faAddressBook,
    faLandmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { classNames } from '../../utils/utils';
import Avatar from '../auth/Avatar';
import NavbarButton from './NavbarButton';

type Props = {}

function Navbar({ }: Props) {
    const [sideMenuOpen, setSideMenuOpen] = useState(false)
    const toggleSideMenu = () => setSideMenuOpen(!sideMenuOpen);


    return (
        <div className="h-[15vh] select-none">
            <nav className='flex justify-between items-center lg:text-xl md:text-lg px-8 py-0 bg-neutral-900 hover:bg-neutral-800 transition-colors duration-50 shadow-lg w-auto h-20 rounded-xl fixed inset-x-8 top-5'>
                <h1 className='text-white justify-self-start flex-shrink-0 cursor-pointer'>
                    <span>Student Planner</span> <FontAwesomeIcon className='ml-1 text-xl' icon={faLandmark} />
                </h1>
                {/* Mobile Menu */}
                {/* <div className='menu-icon' onClick={toggleSideMenu}>
                    <FontAwesomeIcon icon={sideMenuOpen ? faTimes : faBarsStaggered} />
                </div> */}
                <ul className={classNames('flex flex-row gap-2 flex-shrink-0 items-center text-center justify-end', sideMenuOpen ? 'active' : '')}>
                    <NavbarButton link='#' prominent={false} icon={faHouseUser}>Home</NavbarButton>
                    <NavbarButton link='#' prominent={false} icon={faCircleInfo}>About</NavbarButton>
                    <NavbarButton link='#' prominent={false} icon={faBriefcase}>Service</NavbarButton>
                    <NavbarButton link='#' prominent={false} icon={faAddressBook}>Contact</NavbarButton>
                    <Avatar />
                </ul>
            </nav>
        </div >
    )
}


export default Navbar