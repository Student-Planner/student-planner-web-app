import { classNames } from '@/utils/utils'
import React from 'react'

type Props = {
    className: string;
    props?: any;
    icon: React.ReactNode;
    onClick: (e) => void;
}

function EventItemButton({ icon, onClick, className, ...props }: Props) {
    return (
        <button
            type="button" {...props}
            onClick={onClick}
            className={classNames('flex flex-none items-center place-self-center justify-center my-auto h-14 w-14 rounded-md transition-colors duration-100 text-neutral-400 hover:text-neutral-300 hover:bg-neutral-600', className)}>
            {icon}
        </button>
    )
}

export default EventItemButton