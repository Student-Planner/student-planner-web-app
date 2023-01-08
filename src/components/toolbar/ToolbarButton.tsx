import { classNames } from '@/utils/utils'
import React from 'react'

type Props = {
    icon: React.ReactNode;
    onClick: (e) => void;
    classes: string;
}

function EventItemButton({ icon, onClick, classes }: Props) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames('flex flex-none items-center justify-center mx-auto h-14 w-14 duration-150 rounded-md text-neutral-400 hover:text-neutral-200 hover:bg-neutral-600', classes)}>
            {icon}
        </button>
    )
}

export default EventItemButton