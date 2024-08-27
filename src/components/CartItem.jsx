'use client';

import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import Image from "next/image";
import { Dropdown, Option } from '@/components/ui/Dropdown';
import { useState } from 'react';

export function CartItem({ imgeSrc, title, price, discount=0, limited=true, quantity, size }) {
    const [ cartState, setCartState ] = useState({
        quantity,
        size
    });

    return (
        <div className="flex w-full h-[250px] border-gray hover:border-accent transition-all duration-300 ease-in-out group border-[0.5px] rounded-sm p-4 gap-10 relative">
            <Image
                src={imgeSrc}
                alt={title}
                className="h-full w-[150px] object-cover object-top rounded-sm"
            />
            <div className="flex flex-col">
                <span className="text-2xl font-[600]">{title}</span>
                <span className="text-green-600 text-[0.8rem] translate-y-2 mt-auto">*inclusive of all taxes</span>
                {!discount && <div>
                    <span className='text-accent font-[400] text-xl'>₹{price}</span>
                </div>}
                {discount && <div className="flex flex-col gap-1">
                    <span className='text-accent font-[400] text-3xl'>₹{Math.ceil((100-discount)*price/100)}</span>
                    <div className="flex gap-[1ch] items-baseline">
                        <strike className='font-extralight text-gray' style={{textDecorationThickness: '1.5px'}}>₹{price}</strike>
                        <span className='text-green-600 text-xl font-[400]'>{discount}% off</span>
                    </div>
                </div>}
            </div>
            <div className="ml-auto h-full flex flex-col text-sm gap-2">
                {limited && <span className='absolute right-4 top-4 w-fit h-fit px-4 py-1 -translate-y-20 opacity-0 group-hover:opacity-[1] group-hover:translate-y-0
                transition-all duration:300 ease-linear rounded-full bg-primary text-white invisible group-hover:visible'>
                    Limited stock!
                </span>}
                <Dropdown
                    className='mt-auto'
                    button={<Button type='outline' className='flex items-center gap-3 w-full'>
                        <Icon name='ArrowDown01'/>
                        Qty: {cartState.quantity}
                    </Button>}
                >
                    {[1,2,3,4,5,6,7,8,9].map((num) => <Option
                        key={num}
                        selected={num === cartState.quantity}
                        onClick={() => setCartState((state) => ({...state, quantity: num}))}
                    >
                            {num}
                        </Option>)}
                </Dropdown>
                <Dropdown
                    button={<Button type='outline' className='flex items-center gap-3 w-full capitalize'>
                        <Icon name='Ruler'/>
                        Size: {cartState.size}
                    </Button>}
                >
                    {['sm', 'md', 'lg', 'xl'].map((size) => <Option
                        key={size}
                        selected={size === cartState.size}
                        onClick={() => setCartState((state) => ({...state, size: size}))}
                    >
                            {size}
                        </Option>)}
                </Dropdown>
                <Button type='destructive' className='flex gap-2 items-center text-white'>
                    <Icon name='Trash'/>
                    Remove
                </Button>
            </div>
        </div>
    )
}