'use client';

import { Images } from '/public/sample-images/index';
import { SliderNavigator } from "@/components/ui/images/SliderNavigator";
import { useState, useEffect, useCallback } from "react";
import { Icon } from '@/components/ui/Icon';
import { SliderDisplay } from "@/components/ui/images/Image";

export function ImageSlider({ deals }) {
    const [current, setCurrent] = useState(0);
    let isHover = false;

    const handleNext = () => {
        if ( current < Images.length - 1) setCurrent(current + 1);
        else setCurrent(0);
    }

    const intervalNext = useCallback(() => {
        if ( current < Images.length - 1) setCurrent(current + 1);
        else setCurrent(0);
    }, [current])

    const handlePrevious = () => {
        if ( current > 0 ) setCurrent(current - 1);
        else setCurrent(Images.length - 1);
    }

    useEffect(() => {
        const imageTurner = setInterval(() => {intervalNext()}, 5000);
        return () => clearInterval(imageTurner);
    }, [intervalNext]);

    const handleHover = () => {
        isHover = true;
    }

    const handleLeave = () => {
        isHover = false;
    }

    return (
        <div className='self-center h-fit relative w-full'>
            <SliderDisplay images={Images} current={current} onPointerEnter={handleHover} onPointerLeave={handleLeave} />
            <div className='w-full flex flex-col gap-10 absolute bottom-[100px] bg-background py-[100px] items-center'>
                <div className='flex items-center w-full text-4xl justify-center gap-[800px]'>
                    <div className='box-border p-3 aspect-square text-accent hover:bg-gray/40  rounded-sm '
                         onClick={handlePrevious}>
                        <Icon name='ChevronLeft'/>
                    </div>
                    <div className='absolute bottom-[150px]'>
                       <SliderNavigator
                            images={Images}
                            current={current}
                            setCurrent={setCurrent}
                        /> 
                    </div>
                    <div className='box-border p-3 aspect-square text-accent hover:bg-gray/40  rounded-sm '
                         onClick={handleNext}>
                        <Icon name='ChevronRight'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
