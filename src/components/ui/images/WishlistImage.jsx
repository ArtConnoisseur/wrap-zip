import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

export function WishlistImageDisplay({ imgeSrc, title, price, discount=0, limited=true }) {
    return (
        <div className="flex flex-col relative overflow-hidden group">
            <Image
                src={imgeSrc}
                alt={title}
                className="h-[350px] w-[250px] object-cover rounded-md"
            />
            
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
            {limited && <span className="text-sm bg-primary w-fit px-10 text-white self-center rounded-full 
            font-[400] absolute top-2 -translate-y-20 group-hover:translate-y-0 transition-all duration-300 ease-in-out text-center">Limited stock!<br/>Get it now!</span>}
        </div>
    )
}
