'use client';

import { Images } from '/public/sample-images/index';
import { SliderNavigator } from "@/components/ui/images/SliderNavigator";
import { useState, useEffect, useCallback } from "react";
import { Icon } from '@/components/ui/Icon';
import { SliderDisplay } from "@/components/ui/images/Image";
import { Button } from '@/components/ui/Button'

export function ImageSlider({ deals }) {
    const [current, setCurrent] = useState(0);
    let isHover = false;

    const handleNext = () => {
        if ( current < Images.length - 1) setCurrent(current + 1);
        else setCurrent(0);
    }

    const intervalNext = useCallback(() => {
        console.log(isHover);
        if ( current < Images.length - 1) setCurrent(current + 1);
        else setCurrent(0);
    }, [current, isHover])

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
        <div className='w-[80%] self-center h-fit relative mb-[200px] flex flex-col gap-[100px]'>
            <SliderDisplay images={Images} current={current} onPointerEnter={handleHover} onPointerLeave={handleLeave} />
            <div className='w-full flex flex-col gap-10 items-start'>
                <div className='flex items-center w-full text-4xl justify-center gap-[300px]'>
                    <div className='box-border p-3 aspect-square text-accent hover:bg-gray/40  rounded-sm '
                         onClick={handlePrevious}>
                        <Icon name='ChevronLeft'/>
                    </div>
                    <SliderNavigator
                        images={Images}
                        current={current}
                        setCurrent={setCurrent}
                    />
                    <div className='box-border p-3 aspect-square text-accent hover:bg-gray/40  rounded-sm '
                         onClick={handleNext}>
                        <Icon name='ChevronRight'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
