'use client';

import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import {useState} from 'react';
import {Images} from "../../../../public/sample-images";

export function LightboxNav({ images, current, setCurrent }) {
    const [ section, setSection ] = useState(0);
    const imageDisplayNumber = 4;
    const navigate = images.length > imageDisplayNumber;
    const maxSections = Math.ceil(images.length/imageDisplayNumber);

    const handleNext = () => {
        if ( section < maxSections) setSection(section + 1);
    }

    const handlePrevious = () => {
        if ( section > 0 ) setSection(section - 1);
    }

    return (
        <div className='flex gap-4 items-center text-2xl'>
            {navigate && <Icon name='ChevronLeft' className='hover:text-accent transition-all duration-300 ease-in-out'
                   onClick={handlePrevious}/>}
            {images.slice(imageDisplayNumber*section, imageDisplayNumber*section+imageDisplayNumber).map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt={'lightbox navigation image'}
                    className={`h-[100px] w-[75px] rotate-6 object-cover object-top rounded-sm transition-all duration-300 ease-in-out hover:rotate-0
                    ${index === current-section*imageDisplayNumber && 'scale-110 border-accent border-[1px]'}`}
                    onClick={() => setCurrent(section*imageDisplayNumber + index)}
                />
            ))}
            {navigate && <Icon name='ChevronRight' className='hover:text-accent transition-all duration-300 ease-in-out'
                   onClick={handleNext}/>}
        </div>
    )
}