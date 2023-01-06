import { classNames } from '@/utils/utils';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

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

export default NavbarButton;