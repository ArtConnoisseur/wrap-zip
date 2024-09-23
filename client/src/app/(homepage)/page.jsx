import { ImageGrid } from "@/components/ui/images/ImageGrid";
import { ImageSlider } from "@/components/ui/images/ImageSlider";
import { ImageList } from "@/components/ui/images/ImageList";
import { Images } from "../../../public/sample-images/index";

export default function Home() {
    return (
        <>
            <ImageSlider />
            <ImageGrid className='self-center'/>
            <ImageList images={[...Images, ...Images, ...Images]} header={'Popular'}/>
            <ImageList images={[...Images, ...Images, ...Images]} header={'Bestsellers'}/>
            <ImageList images={[...Images, ...Images, ...Images]} header={'Ethenic'}/>
            <ImageList images={[...Images, ...Images, ...Images]} header={'Tops'}/>
            <ImageList images={[...Images, ...Images, ...Images]} header={'All Time Favourites'}/>
            <ImageList images={[...Images, ...Images, ...Images]} header={'Unique Picks'}/>
        </>
    )
}