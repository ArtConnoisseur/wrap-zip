import './cart.css'; 

import { Header } from '../components/header/header';
import { CartInfoItem } from '../components/item-card/item-card';
import { OrderSummary } from '../components/order-summary/order-summary';
import { Footer } from '../components/footer/footer';

const Cart = () => {
    return (
        <div className='cart-container'>
            <Header />
            <div className='cart'>
                <div className='cart-item-container'>
                    <CartInfoItem />
                    <CartInfoItem />
                    <CartInfoItem />
                    <CartInfoItem />
                </div>
                <div className='order-summary'>
                    <OrderSummary subtotal={234.5} taxes={34.67} discounts={34} />
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Cart; 
