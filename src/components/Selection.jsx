'use client';

import { useState } from 'react';

export function Selection({ selections }) {
    const [selected, setSelected] = useState(0);

    return (
        <div className='flex gap-4'>
            {selections.map((item , index) => {
                return (
                    <div className={`border-[1px] hover:border-accent aspect-square uppercase h-[50px] flex justify-center items-center
                    transition-all duration-100 ease-in-out rounded-sm ${index === selected && 'text-accent border-accent font-[600] border-[2px]'}`}
                         key={index}
                         onClick={() => setSelected(index)}
                    >
                        {item}
                    </div>
                )
            })}
        </div>
    )
}