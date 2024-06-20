import './newsletter-cta.css';

import { Images } from '../../../../public/sample-images/index';
import { SiteImage } from '@/app/components/images/site-image/site-image';
import { Input } from '@/app/components/input/input';

export function Newsletter() {
    return (
        <div className='newsletter-container'>
            <h2>Follow our prodcuts on Instagram!</h2>
            <div className='newsletter-images'>
                {Images.map((image, index) => <SiteImage src={image} key={index} className='newsletter-img'/>)}
            </div>
            <h2>Or subscribe to our Newsletter!</h2>
            <div className='newsletter-cta'> 
                <Input placeholder='email@domain.com' />
                <button className='small-button newsletter-cta-button'>Subscribe <i className="fa-solid fa-envelope"></i></button>
            </div>
        </div>
    )
}