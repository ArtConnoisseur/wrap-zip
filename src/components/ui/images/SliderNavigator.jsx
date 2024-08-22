'use client';

import {SliderNavImg} from "@/components/ui/images/SliderNavImg";

export function SliderNavigator({images, current, setCurrent}) {
    console.log(current*(360 / images.length));
    const angle = current*(360 / images.length);

    const styles = {
        '--quantity': `${images.length}`,
        width: '60px',
        height: '80px',
        transformStyle: 'preserve-3d',
        transform:`perspective(500px) rotateX(-20deg) rotateY(-${angle}deg)`
    };

    return (
        <div className='slider transition-all duration-300 ease-in-out' style={styles}>
            {images.map((imageSrc, index) => (
                <SliderNavImg
                    src={imageSrc}
                    alt={'grid-one'}
                    key={index}
                    imageNum={index + 1}
                    active={(current) === index}
                    setActive={setCurrent}
                />
            ))}
        </div>
    )
}