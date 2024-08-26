import { CartItem } from '@/components/CartItem';
import { Images } from '../../../public/sample-images/index';
import { Seperator } from '@/components/ui/Seperator';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { FormInput } from '@/components/ui/Input';
import Link from 'next/link';

export default function CartPage() {
    return (
        <div className='w-[70%] flex flex-col self-center h-fit gap-5'>
            <div className='flex w-full border-b-[0.5px] border-gray items-baseline'>
                <h1 className='text-5xl font-[400]'>Cart</h1>
                <span className='ml-auto text-gray flex gap-[1ch] items-center text-2xl'>
                    <span className='text-accent'>{Images.length}</span>
                    items in Cart
                </span>
            </div>
            <div className='w-full flex gap-[4%] items-start'>
                <section className='flex flex-col gap-4 w-[65%]'>
                    {Images.map((image, index) =>
                    <CartItem
                        imgeSrc={image}
                        title='Product Title Here'
                        key={index}
                        price={40000}
                        discount={40}
                        quantity={4}
                        size={'md'}
                    />)}
                </section>
                <aside className='flex flex-col border-gray border-[0.5px] rounded-sm w-[35%] p-4 gap-5'>
                    <h1 className='text-4xl text-accent'>Total cost: ₹{128900}</h1>
                    <Seperator/>
                    Do you have a coupon code?
                    <FormInput placeholder='Enter your Coupon Code'/>
                    <Seperator/>
                    <Link href='checkout'>
                        <Button className='flex text-white items-center gap-[1ch]'>
                            <Icon name='Barcode'/>
                            Proceed to Checkout
                        </Button>
                    </Link>
                </aside>
            </div>
        </div>
    )
}