import Image from 'next/image';
import './site-image.css';

function Sale({ sale }) {
    if (sale) {
        return (
            <p className="sale">SALE</p>
        )
    }
}

function Hot({ hot }) {
    if (hot) {
        return (
            <p className="hot">HOT</p>
        )
    }
}


export function SiteImage({ src, ratio, sale, hot, link, className }) {
    return (
        <div className={`site-image-container ${className}`}>
            <Sale sale={ sale } />
            <Hot hot={ hot } />
            <Image src={ src } alt="" className={ ratio || "one-one" }/>
        </div>
    )
}