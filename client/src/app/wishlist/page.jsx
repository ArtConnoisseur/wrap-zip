import { WishlistImageDisplay  } from "@/components/ui/images/WishlistImage";
import { Images } from '/public/sample-images/index'

export default function Wishlist({ images }) {
    return (
        <div className="flex flex-wrap gap-10 justify-center p-10">
            <div className='flex w-full border-b-[0.5px] border-gray items-baseline'>
                <h1 className='text-5xl font-[400]'>Wishlist</h1>
                <span className='ml-auto text-gray flex gap-[1ch] items-center text-2xl'>
                    <span className='text-accent'>{Images.length}</span>
                    items in Wishlist
                </span>
            </div>
            {Images.map((image, index) => {
                return (
                    <WishlistImageDisplay 
                        imgeSrc={image}
                        key={index}
                        title={'Some title'}
                        discount={40}
                        price={3420}
                    />
                )
            })}
            {Images.map((image, index) => {
                return (
                    <WishlistImageDisplay 
                        imgeSrc={image}
                        key={index}
                        title={'Some title'}
                        discount={40}
                        price={3420}
                    />
                )
            })}
            
        </div>
    )
}