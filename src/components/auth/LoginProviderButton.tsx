import React from 'react'

type Props = {
    link: string;
    icon: React.ReactNode;
}

function UseProviderButton({ link, icon }: Props) {
    return (
        <div>
            <a className='flex items-center justify-center text-black w-12 h-12 bg-white opacity-80 hover:opacity-100 rounded-full transition-colors hover:bg-white hover:scale-110'
                href={link}>
                {icon}
            </a>
        </div>
    )
}

export default UseProviderButton