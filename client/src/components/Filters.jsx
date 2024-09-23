'use client';

import { useState, useRef, useEffect } from 'react';
import { Icon } from '@/components/ui/Icon';

export function FilterSeperator() {
    return (
        <div className='w-full my-2 h-[0.5px] bg-gray'/>
    )
}

export function FilterRange() {
    const [ track, setTracking ] = useState(false);
    const [ min, setMin ] = useState(0);

    let leave = null; 

    const tracker = useRef(null);

    const handleTrackStart = (event) => {
        event.preventDefault();
        event.stopPropagation();
        leave = false;
        setTracking(true);
    }

    const handleTrackStop = (event) => {
        event.preventDefault();
        setTracking(false);
    }

    const handleLeaveTrack = (event) => {
        event.preventDefault; 
        leave = true;
    }

    useEffect(() => {
        document.addEventListener('pointerup', () => {
            if (leave === null) return;

            if (leave) {
                setTracking(false);
            }
        })
    })

    const handleTracker = (event) => {
        if (track) {
            const rect = tracker.current.getBoundingClientRect();
            const newVal = (event.pageX - rect.x - 9)*100/rect.width;
            if ( newVal > 0 ) {
                setMin(newVal);
            } else if (newVal <= 0) {
                setMin(0);
            } 
        }
    }

    return (
        <div 
            className='w-[90%] h-[3px] my-4 rounded-full bg-gray self-center relative' 
            ref={tracker}
            onPointerMove={handleTracker}
            onPointerUp={handleTrackStop}
            onPointerLeave={handleLeaveTrack}
        >
            <div 
                className='absolute w-[18px] h-[18px] rounded-full bg-background border-[3px] border-accent top-0 bottom-0 my-auto'
                style={{left: `${min}%`}}
                onPointerDown={handleTrackStart}
                onPointerUp={handleTrackStop}
            />
        </div>
    )
}

export function FilterOption({ children }) {
    const [ checked, setChecked ] = useState(false);

    return (
        <div className='flex items-center w-full gap-2'>
            <div className={`w-[20px] h-[20px] rounded-sm border-[0.5px] transition-all duration-300 ease-in-out
                ${!checked && 'hover:bg-accent/20'} ${checked && 'bg-accent border-accent flex items-center justify-center'}`}
                 onClick={() => setChecked(!checked)}>
                {checked && <Icon name='Check' className='text-background'/>}
            </div>
            {children}
        </div>
    )
}

export function FilterSection({ header, children }) {
    return (
        <div className='group'>
            <h2 className='text-text transition-all duration-300 ease-in-out 
            group-hover:bg-accent group-hover:text-background w-fit px-2 rounded-sm text-sm mb-4'>{header}</h2>
            <div className='flex flex-col items-start gap-2'>
                {children}
            </div>
        </div>
    )
}
