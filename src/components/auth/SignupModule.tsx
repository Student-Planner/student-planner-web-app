import React, { useState } from 'react'
import UseProviderButton from './LoginProviderButton';
import { ImFacebook, ImGoogle } from 'react-icons/im'
import { FcGoogle } from 'react-icons/fc'
import AuthFormTextbox from './AuthFormTextfield';
import { classNames } from '../../utils/utils';

type Props = {}

function SignupModule({ }: Props) {
    const [clickedSubmit, setClickedSubmit] = useState(false);
    function signupUser(e): void {
        // TODO sign up the user with the provided information and disable submit if everything is valid
        setClickedSubmit(true);
    }

    return (
        <div className="max-w-md mx-auto mt-24">
            <div className="p-16 relative w-[450px] rounded-2xl before:absolute before:content-none before:bg-white before:opacity-20 before:-rotate-6 before:inset-0 before:rounded-2xl before:z-[-1] bg-black ">
                <div className="mb-8 text-center">
                    <FcGoogle />
                </div>
                <div className="text-center mb-8">
                    <h1 className='text-3xl font-semibold mb-2'>Create an Account</h1>
                    <div className='text-xs opacity-80'>Please enter your information to create a new account</div>
                </div>
                <form className="flex flex-col gap-2">
                    <AuthFormTextbox fieldName={'Full Name'} placeholder={'Enter Full Name'} textfieldType={'text'} />
                    <AuthFormTextbox fieldName={'Email'} placeholder={'Enter Email'} textfieldType={'email'} />
                    <AuthFormTextbox fieldName={'Password'} placeholder={'Enter Password'} textfieldType={'password'} />
                    <AuthFormTextbox fieldName={'Confirm Password'} placeholder={'Enter Password'} textfieldType={'password'} />
                    <button className={classNames(clickedSubmit ? 'bg-neutral-800 text-gray-400' : 'bg-neutral-900 text-white', 'p-4 text-center uppercase rounded-full tracking-widest transition-colors duration-300 mt-6')} type="submit" onClick={signupUser} disabled={clickedSubmit ? true : false}>
                        Create Account
                    </button>
                </form>
                <div className="text-center mt-4">
                    Already have an account? <a className='no-underline hover:underline text-red-600' href="/login">Sign in here.</a>
                </div>
            </div>
            <div className="flex flex-col gap-6 text-center mt-12">
                <div className='uppercase opacity-80 tracking-wider text-xs'>Other Sign-Up Options</div>
                <div className="flex items-center justify-center gap-4 uppercase opacity-80">
                    <UseProviderButton link='#' icon={<FcGoogle className='text-xl' />} />
                </div>
            </div>
        </div>
    )
}

export default SignupModule