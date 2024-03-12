import Image from 'next/image';
import './site-image.css';

export function SiteImage({ src, ratio, sale, hot }) {
    return (
        <div id="site-image-container">
            <Image src={ src } alt="" className={ ratio || "one-one" }/>
        </div>
    )
}