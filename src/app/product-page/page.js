import { Header } from '../components/header/header';
import { Ratings } from '../components/ratings/ratings';

import './product-page.css';

export default function ProductPage() {
    return (
        <div id='product-page-container'>
            <Header />
            <div id='product'>
                <h4 className='roboto'>White Blouse Thing,<br/><i>oops sorry I promise ik fashion</i></h4>
                Inclusive of all texas*
                <h4 className='roboto'>₹ 3,00,0000.00</h4>
                Omigod where are you buying your clothes from? Gucci! No prada!
                <hr className='short-line'/>
                <div id='about-text'>
                    <h4 className='roboto'>About This Item</h4>
                    <ul>
                        <li>Fabric:- Rayon || Package Contain:- 1 Stylish Dress For Women || Neck:- Collare Neck || Top Sleeve:- Roll Tab Sleeve</li>
                        <li>Length:- Short Dress For Women || Print:- Plain Western Dress For Ladies || Patten:- Stylish Western Dress For Girls.</li>
                        <li>Occasion:- It's a regular, causal, fusion wear, style it with your favorite heels, shoes, accessories, and so on. Effortlessly fun makes even relaxing look stylish. Party wear, evening wear. This is the perfect mini dress for women.</li>
                        <li>Size:- Select as per your body requirement, To ensure that our garments fit you well, it is essential that you pick the correct size</li>
                    </ul>
                    This fancy attractive western dress you wear for homes, vacations, shopping, college, together, holidays, special days, hangouts, clubs also regular wear. Western dresses are the perfect gifts for a birthday, Christmas, Valentine, anniversary, or unexpected surprise. Additional Information: ManufacturerLeriya Fashion, Leriya Fashion-India PackerLeriya Fashion-India ImporterLeriya Fashion-India Item Weight300 g Item Dimensions LxWxH15 x 10 x 2 Centimeters Net Quantity1.00 count Generic NameCasual Dress
                </div>
                <button className='small-button'>Add to cart</button>
            </div>
            <div id='product-review'>
                <div id='product-ratings'>
                    <Ratings rating='4.3'/>
                </div>
                <div id='customer-review'>

                </div>
            </div>

            
        </div>
    )
}

