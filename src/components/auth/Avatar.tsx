import React from 'react'
import * as RadixAvatar from '@radix-ui/react-avatar';
import * as RadixTooltip from '@radix-ui/react-tooltip';

type Props = {
    imageUrl?: string;
}

function Avatar({ imageUrl }: Props) {
    return (
        <RadixAvatar.Root className="inline-flex items-center justify-center align-middle overflow-hidden select-none w-12 h-12 rounded-[100%]">
            {imageUrl && <RadixAvatar.Image
                className="AvatarImage w-full h-full object-cover rounded-[inherit]"
                src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                alt="Pedro Duarte"
            />}
            <RadixAvatar.Fallback className="w-full h-full flex items-center justify-center bg-white text-sm leading-none font-medium">
                PD
            </RadixAvatar.Fallback>
        </RadixAvatar.Root>
    )
}

export default Avatar