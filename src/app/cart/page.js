import './cart.css'; 

import { Header } from '../components/header/header';
import { CartInfoItem } from '../components/item-card/item-card';
import { OrderSummary } from '../components/order-summary/order-summary';
import { Footer } from '../components/footer/footer';
import { SectionDivider } from '../components/section-divider/section-divider';
import { Images } from '../../../public/sample-images';

const Cart = () => {
    return (
        <div>
            <div className='cart-container'>
                <Header />
                <SectionDivider />
                <div className='cart'>
                    <div className='cart-item-container'>
                        <CartInfoItem />
                        <CartInfoItem />
                        <CartInfoItem />
                        <CartInfoItem />
                    </div>
                    <div className='order-summary'>
                        <OrderSummary subtotal={234.5} taxes={34.67} discounts={34} />
                        <button className='big-button checkout-button'><i className="fa-solid fa-money-check"></i>Procceed to Checkout</button>
                    </div>
                </div>
                <SectionDivider />
                <Footer />
            </div>
        </div>
    )
};

export default Cart; 
