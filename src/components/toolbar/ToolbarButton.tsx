import { classNames } from '@/utils/utils'
import React from 'react'

type Props = {
    className: string;
    icon: React.ReactNode;
    onClick: (e) => void;
}

function EventItemButton({ icon, onClick, className }: Props) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames('flex flex-none items-center justify-center mx-auto h-14 w-14 duration-150 rounded-md text-neutral-400 hover:text-neutral-200 hover:bg-neutral-600', className)}>
            {icon}
        </button>
    )
}

export default EventItemButton