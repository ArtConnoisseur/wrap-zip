import './cart.css'; 

import { Header } from '../components/header/header';
import { CartInfoItem } from '../components/item-card/item-card';


const Cart = () => {
    return (
        <div className='cart-container'>
            <Header />
            <div className='cart-item-container'>
                <CartInfoItem />
                <CartInfoItem />
                <CartInfoItem />
                <CartInfoItem />
            </div>
        </div>
    )
};

export default Cart; 
