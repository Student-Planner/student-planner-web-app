import React, { useEffect, useState } from 'react'
import * as RadixAvatar from '@radix-ui/react-avatar';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { useSession } from 'next-auth/react';


type Props = {}

function Avatar({ }: Props) {
    const [imageUrl, setImageUrl] = useState<string>(null)
    const { data: session, status } = useSession()
    // PLACEHOLDER IMAGE "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"

    useEffect(() => {
        if ((status === 'authenticated') && session) {
            if (session.user?.image !== null)
                setImageUrl(session.user?.image)
        }
    }, [session, status])

    return (
        // <RadixTooltip.Root>
            // <RadixTooltip.Trigger>
                <RadixAvatar.Root className="inline-flex items-center justify-center align-middle overflow-hidden select-none w-12 h-12 rounded-[100%]">
                    {imageUrl && <RadixAvatar.Image
                        className="AvatarImage w-full h-full object-cover rounded-[inherit]"
                        src={imageUrl}
                        alt={session.user.name}
                    />}
                    {/* <RadixAvatar.Fallback className="w-full h-full flex items-center justify-center bg-white text-red-600 text-sm leading-none font-medium">
                         // PD TODO add initials
                       </RadixAvatar.Fallback> */}
                </RadixAvatar.Root>
            // </RadixTooltip.Trigger>
            // <RadixTooltip.Content side="top">
            //     Tooltip content
            //     <RadixTooltip.Arrow />
            // </RadixTooltip.Content>
        // </RadixTooltip.Root>
    )
}

export default Avatar