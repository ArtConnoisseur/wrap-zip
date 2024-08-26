import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

export function SearchImageDisplay({ imgeSrc, title, price, discount=0, limited=true }) {
    return (
        <div className="flex flex-col relative overflow-hidden group">
            <Image
                src={imgeSrc}
                alt={title}
                className="h-[350px] w-[250px] object-cover rounded-md"
            />
            <div className="text-white bg-accent flex items-center gap-[1ch] px-4 py-3 absolute top-[60%] 
            -translate-x-[200%] group-hover:translate-x-0 transition-all duration-300 linear banner">
                <Icon name='Heart' className='cursor-pointer'/>
                <Icon name='Share' className='cursor-pointer'/>
            </div>
            <span className="text-2xl font-[600]">{title}</span>
            <span className="text-green-600 text-[0.8rem] translate-y-2">*inclusive of all taxes</span>
            {!discount && <div>
                <span className='text-accent font-[400] text-xl'>₹{price}</span>
            </div>}
            {discount && <div className="flex items-baseline gap-[1ch]">
                <span className='text-accent font-[400] text-2xl'>₹{Math.ceil((100-discount)*price/100)}</span>
                <strike className='font-extralight text-gray' style={{textDecorationThickness: '1.5px'}}>₹{price}</strike>
                <span className='text-green-600 font-[400] ml-auto'>{discount}% off</span>
            </div>}
            {limited && <span className="text-sm bg-red-400 w-fit px-10 text-white self-center rounded-full 
            font-[400] absolute top-2 -translate-y-10 group-hover:translate-y-0 transition-all duration-300 ease-in-out">Limited stock!</span>}
        </div>
    )
}
