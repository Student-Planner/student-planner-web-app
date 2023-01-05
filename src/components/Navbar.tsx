import React, { useState } from 'react'
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
import { classNames } from '../utils/utils';
import Avatar from './auth/Avatar';

type Props = {}

function Navbar({ }: Props) {
    const [sideMenuOpen, setSideMenuOpen] = useState(false)
    const toggleSideMenu = () => setSideMenuOpen(!sideMenuOpen);


    return (
        <div className="h-[15vh] select-none">
            <nav className='flex justify-between items-center lg:text-xl md:text-lg px-8 py-0 bg-neutral-800 shadow-lg w-auto h-20 rounded-xl fixed inset-x-8 top-5'>
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

type ButtonProps = {
    link: string;
    icon: IconDefinition;
    children: string;
    prominent: boolean;
}

function NavbarButton({ link, icon, prominent, children }: ButtonProps) {
    return (
        <li>
            <a href={link} className={classNames(`no-underline decoration-solid decoration-auto text-white py-3 px-3 min-w-fit rounded-md 
            ease-in-out transition-all`,
                prominent ?
                    'hover:bg-red-500 outline outline-1 outline-red-500' :
                    'hover:bg-neutral-700')}>
                <FontAwesomeIcon className='pr-2' icon={icon} />
                {children}
            </a>
        </li>
    )
}



export default Navbar