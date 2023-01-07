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
            className={classNames('edit flex flex-none items-center place-self-center justify-center my-auto h-14 w-14 rounded-md text-neutral-400 hover:text-neutral-300 hover:bg-neutral-600', classes)}>
            {icon}
        </button>
    )
}

export default EventItemButton