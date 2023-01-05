import Head from 'next/head'
import React, { useEffect } from 'react'
import LoginModule from '@/components/auth/LoginModule'
import { useSession, signIn, signOut } from "next-auth/react"
import Router from 'next/router'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


type Props = {

}

function login({ }) {
    const { data: session, status } = useSession()
    useEffect(() => {
        if ((status === 'authenticated') && session) {
            // Router.push('/home')
        }
    }, [session, status])


    return (
        <>
            <Head next-head-count={1}>
                <title>Login - Student Planner</title>
                <body className='bg-neutral-900' />
            </Head>
            <LoginModule />
        </>
    )
}

export default login