'use client';

import { useState } from "react";

export function FormInput(props) {
    const [ focus, setFocus ] = useState(false);

    return (
        <div className={`flex items-center bg-backgroundSc relative mt-2
        w-full px-5 py-3 rounded-sm ${props.className}`}>
            <span className={`absolute text-gray ${!focus && '-z-10'} ${focus && 'text-sm text-text -top-[50%] left-1 bg-background px-3 transition-all duration-300 ease-in-out rounded-full'}`}>{props.placeholder}</span>
            <input {...props} className={`bg-transparent focus:outline-none w-full`}
            onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}/>

        </div>

    )
}


export function Input(props) {
    return (
        <div className={`flex items-center bg-backgroundSc min-w-[400px] w-[30%] px-5 py-3 rounded-sm ${props.className}`}>
            <input {...props} className={`bg-transparent focus:outline-none w-full`}/>
        </div>

    )
}