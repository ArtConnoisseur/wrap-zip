'use client';

import { Seperator } from "@/components/ui/Seperator";
import { FormInput } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Icon } from '@/components/ui/Icon';
import Link from 'next/link';

import { useState } from "react";

const types = {
    email: 1,
    phone: 2,
}

export default function Accounts() {
    const [ type, setType ] = useState(types.email);

    return (
        <div className='flex flex-col gap-10 w-[60%]'>
            <h1 className='text-4xl font-[400] self-center text-accent'>Get started!</h1>
            <div className="flex gap-4 width-full justify-center">
                <div 
                    className={`relative ${type === types.email && 'text-accent font-[400] before:w-[20px] before:h-[5px] before:bg-accent before:absolute before:right-0 before:left-0 before:mx-auto before:top-[100%] before:rounded-sm'} 
                    transition-all duration-300 ease-in-out flex ${type !== types.email && 'text-gray'}`}
                    onClick={() => setType(types.email)}
                >
                    Email
                </div>
                <div
                    className={`relative ${type === types.phone && 'text-accent font-[400] before:w-[20px] before:h-[5px] before:bg-accent before:absolute before:right-0 before:left-0 before:mx-auto before:top-[100%] before:rounded-sm'} 
                    transition-all duration-300 ease-in-out flex ${type !== types.phone && 'text-gray'}`}
                    onClick={() => setType(types.phone)}
                >
                    Phone Number
                </div>
            </div>

            {
                type === types.email && 
                <div className="gap-4 flex flex-col">
                    <FormInput placeholder='Enter your Email' type='email'/>
                    <Link href='accounts/otp'>
                        <Button className='text-white flex gap-2 items-center w-full justify-center'>
                            <Icon name='ShieldCheck'/>
                            Verify Email
                        </Button>
                    </Link>
                </div>
            }

            {
                type === types.phone && 
                <div className="gap-4 flex flex-col">
                    <FormInput placeholder='Enter your Phone Number' type='number'/>
                    <Link href='accounts/otp'>
                        <Button className='text-white flex gap-2 items-center w-full justify-center'>
                            <Icon name='ShieldCheck'/>
                            Verify Phone Number
                        </Button>
                    </Link>
                </div>
            }
            

            <Seperator>
                Or Log in With
            </Seperator>

            <div className='flex items-center w-full self-center gap-4 text-white'>
                <Button className='w-full'>
                    Google
                </Button>
                <Button className='w-full'>
                    Facebook
                </Button>
            </div>
        </div>
    )
}