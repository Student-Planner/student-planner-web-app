import React from 'react'

type Props = {
    fieldName: string;
    placeholder: string;
    textfieldType: string;
}

function AuthFormTextbox({ fieldName, placeholder, textfieldType }: Props) {
    return (
        <div className="form-item">
            <div className='my-1'>
                <label htmlFor={fieldName.toLowerCase() + "Form"} >{fieldName}</label>
            </div>
            <input className='focus:bg-neutral-500 w-full border-none outline-none py-4 px-6 rounded-full transition-colors duration-300' type={textfieldType} placeholder={placeholder} id={fieldName.toLowerCase() + "Form"} required />
        </div>
    )
}

export default AuthFormTextbox