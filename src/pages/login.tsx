import Head from 'next/head'
import React from 'react'
import LoginModule from '@/components/auth/LoginModule'

type Props = {}

function login({ }) {
    return (
        <>
            <Head>
                <title>Login - Student Planner</title>
                <body className='bg-neutral-900' />
            </Head>
            <LoginModule />
        </>
    )
}

export default login