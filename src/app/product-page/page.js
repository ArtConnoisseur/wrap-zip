import { Header } from '../components/header/header';
import { Ratings } from '../components/ratings/ratings';

import './product-page.css';

export default function ProductPage() {
    return (
        <div id='product-page-container'>
            <Header />
            <div id='product'>
                <h4 className='roboto'>Silk Trendy White Blouse</h4>
                <div id="taxes-price">
                Inclusive of all taxes
                <h4 className='roboto'>₹ 1,200.00</h4>
                </div>
                Crafted from a blend of soft cotton and lightweight chiffon, this top offers both comfort and sophistication.
                <hr className='short-line'/>
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
                <br></br>
                <br></br>
                <br></br>
                <button className='small-button'>Add to cart</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div id='product-review'>
                <div id='product-ratings-parent'><div id='product-ratings'>
                    <Ratings rating='4.3'/>
                </div>
               
                <input type="text" id='review-text' value='Write A Review As User'/>
                <br></br>
                <br></br>
                <br></br>
                </div>
                <div id="customer-review">
                  <b>Customers Say:</b>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div id='reviews'>
                  <b>John Doe</b><br></br>
                  This white top is simply gorgeous! The fabric is a high-quality, soft and silky material that drapes beautifully. The cut is flattering and accentuates the waist nicely. I love the subtle v-neck and short sleeves - it's the perfect blend of casual and elegant. 
                  </div>
                  <br></br>
                  
                  <div id='reviews'>
                  <b>John Doe</b><br></br>
                  The fit is true to size and the quality construction ensures it will last for seasons to come. I've received so many compliments every time I wear this top. It's become a wardrobe staple that I reach for again and again. Highly recommend for anyone looking for a stylish, high-quality white top!"
                  </div>
                </div>
            </div>

            
        </div>
    )
}

