'use client'; 

import { useState } from 'react';

import { Header } from '../components/header/header';
import { Ratings } from '../components/ratings/ratings';
import { MainImage } from '../components/images/main-image/main-image';
import { Review } from '../components/review/review';

import { Images } from '../../../public/sample-images/index.js'

import './product-page.css';


export default function ProductPage() {
    const [ currImage, setImage ] = useState(0);

    const handleClickLeft = (event) => { 
        const now = currImage; 

        setImage(now - 1 > 0 ? now -1 : 0)
    };

    const handleClickRight = (event) => { 
        console.log(event)
        const now = currImage; 

        setImage(now + 1 < Images.length ? now + 1 : Images.length - 1)
    };

    return (
        <div id='product-page-container'>
            <Header />
            <div id='product'>
                <div id='product-info'>
                    <h3 className='roboto product-title'>Silk Trendy White Blouse</h3>
                    <hr />
                    <div id="taxes-price">
                        Inclusive of all taxes
                        <h4 className='roboto'>₹ 1,200.00</h4>
                    </div>
                    Crafted from a blend of soft cotton and lightweight chiffon, this top offers both comfort and sophistication.
                    <div id='about-text'>
                        <h4 className='roboto'>About This Item</h4>
                        <ul className='roboto'>
                            <li>Fabric:- Rayon || Package Contain:- 1 Stylish Dress For Women || Neck:- Collare Neck || Top Sleeve:- Roll Tab Sleeve</li>
                            <li>Length:- Short Dress For Women || Print:- Plain Western Dress For Ladies || Patten:- Stylish Western Dress For Girls.</li>
                            <li>Occasion:- It's a regular, causal, fusion wear, style it with your favorite heels, shoes, accessories, and so on. Effortlessly fun makes even relaxing look stylish. Party wear, evening wear. This is the perfect mini dress for women.</li>
                            <li>Size:- Select as per your body requirement, To ensure that our garments fit you well, it is essential that you pick the correct size</li>
                        </ul>
                        This fancy attractive western dress you wear for homes, vacations, shopping, college, together, holidays, special days, hangouts, clubs also regular wear.
                    </div>
                    <button className='small-button'>Add to cart</button>
                </div>
                <div id='product-image'>
                    <i className="fa-solid fa-chevron-left product-icon" onClick={(event) => handleClickLeft(event)}></i>
                    <MainImage src={Images[currImage]} />
                    <i className="fa-solid fa-chevron-right product-icon" onClick={(event) => handleClickRight(event)}></i>
                </div>
            </div>
            <div id='product-review'>
                <div id='product-ratings-parent'>
                    <div id='product-ratings'>
                        <Ratings rating='3.4'/>
                    </div>
                
                    <input type="text" id='review-text' placeholder='Write A Review As User'/>
                    <button className='small-button review-button'>Submit Review</button>
                    <br></br>
                    <br></br>
                    <br></br>
                    </div>
                    <div id="customer-reviews">
                        <h4 className='roboto'>Customers Say:</h4>
                        <Review 
                            name='John Doe'
                            review="This white top is simply gorgeous! The fabric is a high-quality, soft and silky material that drapes beautifully. The cut is flattering and accentuates the waist nicely. I love the subtle v-neck and short sleeves - it's the perfect blend of casual and elegant."
                        />
                        <Review 
                            name='John Doe'
                            review="This white top is simply gorgeous! The fabric is a high-quality, soft and silky material that drapes beautifully. The cut is flattering and accentuates the waist nicely. I love the subtle v-neck and short sleeves - it's the perfect blend of casual and elegant."
                        />
                        <Review 
                            name='John Doe'
                            review="This white top is simply gorgeous! The fabric is a high-quality, soft and silky material that drapes beautifully. The cut is flattering and accentuates the waist nicely. I love the subtle v-neck and short sleeves - it's the perfect blend of casual and elegant."
                        />
                </div>
            </div>
        </div>
    )
}

