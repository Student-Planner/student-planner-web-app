import React from 'react'
import Head from 'next/head';
import SignupModule from '@/components/auth/SignupModule';
import LoginModule from '@/components/auth/LoginModule';

type Props = {}

function signup({ }) {
    return (
        <>
            <Head>
                <title>Login - Student Planner</title>
                <body className='bg-neutral-900' />
            </Head>
            <SignupModule />
        </>
    )
}

export default signup