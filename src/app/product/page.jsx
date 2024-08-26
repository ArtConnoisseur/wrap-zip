import { Lightbox } from "@/components/ui/images/Lightbox";
import { Images } from "../../../public/sample-images";
import { Icon } from "@/components/ui/Icon";
import { Button } from '@/components/ui/Button';
import { Selection } from "@/components/Selection";
import { Ratings } from '@/components/Ratings';
import { Input } from '@/components/ui/Input';
import { Seperator } from "@/components/ui/Seperator";

function ProductInfo({ header, info }) {
    return (
        <div>

        </div>
    )
}

export default function ProductPage() {
    const sizes = ["xs", "sm", "md", "lg"];
    return (
        <div className='flex w-[80%] self-center gap-[5%]'>
            <Lightbox images={Images}/>
            <div className='flex flex-col gap-4 w-[100%]'>
                <h1 className='text-4xl m-none font-[600]'>Product Title goes here!</h1>
                <div className='flex justify-between items-center'>
                    <span className='text-gray'>
                        Category | Category | Category | Path
                    </span>
                    <span className='flex gap-[1ch] border-accent border-[0.5px] px-3 py-2 rounded-sm'>
                        <span
                            className='flex gap-[1ch] items-center font-bold text-accent border-r-[0.5px] pr-[1ch] border-gray'><Icon
                            name='Star'/>
                            3.2
                        </span>
                    Total 136 ratings
                    </span>
                </div>

                <Seperator/>

                <div className='flex flex-col'>
                    <span className='text-green-600 text-sm italic'>*inclusive of all taxes</span>
                    <span className='text-2xl flex gap-2 items-baseline'>
                        <strong className='text-3xl'>₹23,400.90</strong>
                        <strike className='font-extralight text-gray' style={{textDecorationThickness: '1.5px'}}>MRP ₹56,780.00</strike>
                        <span className='text-green-600'>78% off!</span>
                    </span>
                </div>
                <h5 className='font-[400]'>Select a Size:</h5>
                <Selection selections={sizes}/>
                <div className='flex gap-4'>
                    <Button className='flex gap-2 text-white items-center'>
                        <Icon name='ShoppingBag'/>
                        Add to cart!
                    </Button>
                    <Button className='flex gap-2 items-center' type='outline'>
                        <Icon name='Heart'/>
                        Add to wishlist
                    </Button>
                </div>

                <Seperator/>

                Delivery option:
                <div className='flex gap-6'>
                    <Input type='text' placeholder='Enter pincode'/>
                    <Button className='text-white'>
                        Check Now!
                    </Button>
                </div>


                <Seperator/>

                <h1 className='uppercase italic font-[400]'>Product Details</h1>
                <ul>
                    <li>This product is for women</li>
                    <li>This product is made of cotton</li>
                    <li>This product is beautiful</li>
                </ul>

                <Seperator/>

                <Ratings ratings={{5: 24, 4: 10, 3: 80, 2: 12, 1: 10}}/>

                <Seperator/>


            </div>
        </div>
    )
}