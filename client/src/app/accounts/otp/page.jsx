'use client';

import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

export default function Otp() {
    const [otp, setOtp] = useState('');


    return (
        <div className='flex flex-col gap-[70px]'>
            <h1 className='text-accent text-2xl self-center'>
                Enter OTP
            </h1>
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span className='mx-2 text-gray'><Icon name='Dot'/></span>}
                shouldAutoFocus
                inputStyle={{width: '50px'}}
                renderInput={(props) => <input {...props} className='border-gray border-[2px] h-[50px] w-[100px] focus:outline-accent focus:rounded-sm rounded-sm'/>}
            />
            <Button className='text-white flex items-center gap-4 self-center'>
                <Icon name='MonitorCheck'/>
                Check
            </Button>
        </div>
        
    );
}

