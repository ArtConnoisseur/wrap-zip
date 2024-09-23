import { DisplayImage } from "./Image"



export function ImageList({ images, header }) {
    return (
        <div className="flex flex-col items-ctart w-[80%] self-center">
            <h1 className="text-3xl">{header}</h1>
            <div className="h-[270px] flex overflow-x-scroll px-10 gap-10 items-center">
                {images.map((image, ind) => {
                    return (
                        <div className="h-[180px] w-[270px] flex-shrink-0" key={ind}>
                            <DisplayImage 
                                src={image}
                                alt='alt'
                                hot 
                                sale 
                                discount={90}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
        
    )
}