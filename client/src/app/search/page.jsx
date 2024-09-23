import { SearchImageDisplay  } from "@/components/ui/images/SearchImage";
import { Images } from '/public/sample-images/index'

export default function SearchPage({ images }) {
    return (
        <div className="flex flex-wrap gap-10 justify-center p-10">
            {Images.map((image, index) => {
                return (
                    <SearchImageDisplay 
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
                    <SearchImageDisplay 
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