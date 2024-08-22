'use client';

import Image from 'next/image';
import {useState} from "react";
import { LightboxNav } from "@/components/ui/images/LightboxNav";

export function Lightbox({ images }) {
    const [current, setCurrent] = useState(0);

    return (
        <div className='flex flex-col gap-10 items-center'>
            <div className='h-[700px] w-[600px]'>
                <Image
                    src={images[current]}
                    alt={'lightbox hero image'}
                    className='w-full h-full object-cover object-top rounded-lg'
                />
            </div>
            <div>
                <LightboxNav images={images} current={current} setCurrent={setCurrent} />
            </div>
        </div>

    )
}