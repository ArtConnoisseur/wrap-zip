import { DisplayImage } from "@/components/ui/images/Image";
import { Images } from '/public/sample-images';



export function ImageGrid({ className, images }) {
    return (
        <div className='w-[75%] self-center flex items-center gap-4 h-[700px]'>
            <span className={`text-3xl vertical-text capitalize`}>Check out our featured items!</span>
            <div className={`grid grid-cols-4 grid-rows-2 h-full w-full *:flex *:justify-center *:items-center
            *:rounded-md gap-7 ${className}`}>
                <div className='h-full w-full row-start-1 row-end-3 col-start-1 col-end-3'>
                    <DisplayImage src={Images[0]} alt={'grid-one'}/>
                </div>
                <div className='h-full w-full row-start-1 row-end-2 col-start-3 col-end-4'>
                    <DisplayImage src={Images[1]} alt={'grid-one'} hot={true} sale={true} discount={'60%'}/>
                </div>
                <div className='h-full w-full row-start-2 row-end-3 col-start-3 col-end-4'>
                    <DisplayImage src={Images[2]} alt={'grid-one'}/>
                </div>
                <div className='h-full w-full row-start-1 row-end-2 col-start-4 col-end-5'>
                    <DisplayImage src={Images[3]} alt={'grid-one'}/>
                </div>
                <div className='h-full w-full row-start-2 row-end-3 col-start-4 col-end-5'>
                    <DisplayImage src={Images[4]} alt={'grid-one'}/>
                </div>
            </div>
        </div>

    )
}