import { classNames } from '@/utils/utils'
import React from 'react'

type Props = {
    icon: React.ReactNode;
    onClick: (e) => void;
}

function EventItemButton({ icon, onClick }: Props) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames('edit flex flex-none items-center place-self-center justify-center my-auto text-2xl h-14 w-14 rounded-md text-neutral-400 hover:text-neutral-300 hover:bg-neutral-600')}>
            {icon}
        </button>
    )
}

export default EventItemButton