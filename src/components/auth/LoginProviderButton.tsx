import React from 'react'

type Props = {
    icon: React.ReactNode;
    onClick?: () => void;
}

function LoginProviderButton({ icon, onClick }: Props) {

    return (
        <div>
            <a className='flex items-center justify-center text-black w-12 h-12 bg-white opacity-80 hover:opacity-100 rounded-full transition-colors hover:bg-white hover:scale-110 cursor-pointer' onClick={onClick}>
                {icon}
            </a>
        </div>
    )
}

export default LoginProviderButton