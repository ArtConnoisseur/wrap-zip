import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function DisplayImage({ src, alt, hot, sale, discount, title='Product Title' }) {
    return (
        <div className={`relative before:z-[2] before:translate-y-[-100%] hover:before:translate-y-0 group hover:scale-105
            before:transition-all before:duration-300 before:ease-in-out before:absolute before:h-full rounded-md transition-all duration-300 ease-in-out
            before:w-full before:bg-neutral-900/40 before:top-0 overflow-hidden before:content-[""] h-full w-full`}>
            {discount && <span className='absolute top-[5%] right-[4%] text-white translate-y-[-200%] text-sm group-hover:translate-y-0 z-[2] bg-accent/60 px-4 py-2 rounded-sm
            transition-all duration-300 ease-in-out'>Discount: {discount}</span>}
            <div className='absolute z-[3] text-white flex flex-col items-start bottom-[5%] left-[3%]
            translate-y-[500px] group-hover:translate-y-0 transition-all duration-300 ease-in-out'>
                <span className={`text-3xl font-[400]`}>{title}</span>
                <Button className='text-white text-[0.8rem]'>
                    Shop now!
                </Button>
            </div>
            <div className='absolute top-[10%] flex flex-col gap-1 group-hover:translate-y-[-300px]
            transition-all duration-300 ease-in-out'>
                {hot && <span className='bg-primary text-onPrimary text-sm px-[15px] py-[2px]'>HOT</span>}
                {sale && <span className='bg-secondary text-onSecondary text-sm px-[15px] py-[2px]'>SALE</span>}
            </div>
            <Image
                src={src}
                alt={alt}
                className='h-full w-full object-cover object-top'
            />
        </div>
    )
}

export function SliderDisplay(props) {
    return (
        <div className={`w-full h-[500px] overflow-hidden rounded-lg box-border ${props.className}`} {...props}>
            <div className={`h-[500px] w-full transition-all duration-[1s] ease-in-out`} style={{transform: `translateY(-${props.current * 500}px)`}}>
                {props.images.map((image, ind) => (
                    <Image
                        key={ind}
                        src={image}
                        alt={'grid-one'}
                        className='w-full h-full object-cover hero-image object-top rounded-lg'
                    />
                ))}
            </div>
        </div>
    )
}