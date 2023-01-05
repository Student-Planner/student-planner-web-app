import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import LoginModule from '@/components/auth/LoginModule'
import { useSession, signIn, signOut } from "next-auth/react"
import Router from 'next/router'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import AuthFormTextbox from '@/components/auth/AuthFormTextfield'
import UseProviderButton from '@/components/auth/LoginProviderButton'
import { classNames } from '@/utils/utils'
import { CheckIcon } from '@radix-ui/react-icons'
import { FcGoogle } from 'react-icons/fc'
import * as Checkbox from '@radix-ui/react-checkbox';



type Props = {

}

function login({ }) {
    const { data: session, status } = useSession()
    const [submitLoading, setSubmitLoading] = useState(false);


    function loginUser(e): void {
        // TODO login the user with credentials and disable submit if everything is valid
        // setClickedSubmit(true);
    }

    useEffect(() => {
        if ((status === 'authenticated') && session) {
            setSubmitLoading(true);
            Router.push('/home')
        }
    }, [session, status])


    return (
        <>
            <Head next-head-count={1}>
                <title>Login - Student Planner</title>
                <body className='bg-neutral-900' />
            </Head>
            <div className="max-w-md mx-auto mt-24 select-none">
                <div className="p-16 relative w-[450px] rounded-2xl before:absolute before:content-none before:bg-white before:opacity-20 before:-rotate-6 before:inset-0 before:rounded-2xl before:z-[-1] bg-black ">
                    <div className="mb-8 text-center">
                        <FcGoogle />
                    </div>
                    <div className="text-center mb-8">
                        <h1 className='text-3xl font-semibold mb-2'>Sign In</h1>
                        <div className='text-xs opacity-80'>Please login to use the platform</div>
                    </div>
                    <form className="flex flex-col gap-2">
                        <AuthFormTextbox fieldName={'Email'} placeholder={'Enter Email'} textfieldType={'email'} />
                        <AuthFormTextbox fieldName={'Password'} placeholder={'Enter Password'} textfieldType={'password'} />

                        <div className="flex items-center justify-between my-2">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Checkbox.Root className="w-5 h-5 rounded flex items-center justify-center focus:bg-neutral-300 focus:outline-none bg-neutral-500 shadow-sm " defaultChecked id="rememberMeCheckbox">
                                    <Checkbox.Indicator className="text-black text-xl">
                                        <CheckIcon />
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                                <label className="text-white pl-2 text-sm leading-none" htmlFor="rememberMeCheckbox">
                                    Remember me
                                </label>
                            </div>
                            <a className='no-underline hover:underline text-red-600' href="#">I forgot my password!</a>
                        </div>

                        <button className={classNames(submitLoading ? 'bg-neutral-700 text-gray-400' : 'bg-neutral-800 text-white', 'p-4 text-center uppercase rounded-full tracking-widest transition-all duration-500')} type="submit" onClick={loginUser} disabled={submitLoading ? true : false}>
                            {submitLoading ? <div className="loading-spinner w-8 h-8 mx-auto border-2 border-transparent rounded-[100%] border-t-3 border-t-slate-400 animate-spin duration-2000"></div> : "Sign In"}
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        Don't have an account? <a className='no-underline hover:underline text-red-600' href="#">Create a free account.</a>
                    </div>
                </div>
                <div className="flex flex-col gap-6 text-center mt-12">
                    <div className='uppercase opacity-80 tracking-wider text-xs'>Other Sign-In Options</div>
                    <div className="flex items-center justify-center gap-4 uppercase opacity-80">
                        {/* <LoginOptionButton link='#' icon={<ImFacebook className='text-xl' />} /> */}
                        <UseProviderButton icon={<FcGoogle className='text-xl' />} onClick={() => { signIn(); }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default login