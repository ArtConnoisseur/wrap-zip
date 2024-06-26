import heroImage from '../../../../public/sample-images/img/19.png';
import imageOne from '../../../../public/sample-images/img/image-category-1.png';
import imageTwo from '../../../../public/sample-images/img/card.png';
import imageThree from '../../../../public/sample-images/img/card2.png';
import imageFour from '../../../../public/sample-images/img/card3.png';
import imageFive from '../../../../public/sample-images/img/card4.png';

import { SiteImage } from '@/app/components/images/site-image/site-image';

import Image from 'next/image';

import './explore-grid.css'; 

export function ExploreGrid() {
    return (
        <div className='explore-grid-container'>
            <div className='explore-grid-center'>
                <span className='vertical-explore-text'>EXPLORE NEW STYLES!</span>
                <div className='explore-grid'>
                    <SiteImage src={imageOne} className='first-image img'/>
                    <SiteImage src={imageTwo} className='second-image img'/>
                    <SiteImage src={imageThree} className='third-image img'/>
                    <SiteImage src={imageFour} className='fourth-image img'/>
                    <SiteImage src={imageFive} className='fifth-image img' hot='true'/>
                </div>
            </div>
        </div>
    )
}