'use client';

import Image from "next/image";

export function SliderNavImg({src, alt, imageNum, angle, active, setActive }) {
    const styles = {
        '--position': `${imageNum}`,
        position: 'absolute',
        inset: '0 0 0 0',
        transform: 'rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(150px)',
    }

    const handleImageClick = () => {
        setActive(imageNum-1)
    }

    return (
        <div
            className={`nav-img ${active && 'text-center gap-2 scale-105 border-accent border-[1px] rounded-md p-1 box-border'}`}
            style={styles} onClick={() => handleImageClick()}>
            <Image
                src={src}
                alt={'grid-one'}
                className='h-full w-full object-cover rounded-sm box-border'
            />
            {active && <span className='text-[1rem] text-accent'>{imageNum}</span>}
        </div>
    )
}