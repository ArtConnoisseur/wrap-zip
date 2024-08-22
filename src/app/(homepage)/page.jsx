import {ImageGrid} from "@/components/ui/images/ImageGrid";
import {ImageSlider} from "@/components/ui/images/ImageSlider";

export default function Home() {
    return (
        <>
            <ImageSlider />
            <ImageGrid className='self-center'/>
        </>
    )
}