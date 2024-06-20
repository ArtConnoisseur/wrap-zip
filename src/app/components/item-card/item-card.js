'use client';

import './item-card.css'; 

import SampleImage from '../../../../public/sample-images/img/19.png'
import ImageOne from '../../../../public/sample-images/index.js';

import { useState } from 'react';
import Image from 'next/image'; 

// This value will come from the data in the backend/stored 
// in the database 

const maxQty = 4;

const quantities = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '10+'
];

export function CartInfoItem({ itemName='Item Name', category='category', price='298.00', quantity=2 }) {
    const [ image, setImage ] = useState(0); 


    return (
        <div className='item-card-container'>
            <div className='cart-image'>
                <Image
                alt='Image of Item in Cart'
                src={SampleImage}
                />
            </div>
            <div className='cart-item-info'>
                <div className='card-item-labels'>
                    <h4 className='cart-item-header'>{itemName}</h4>
                    <span className='cart-category-label'>{category}</span>
                </div>
                <div className='cart-item-quantity'>
                    <label for='qty-dpd'>Quantity: </label>
                    <select className='quantity-dropdown' name='qty-dpd'>
                        {quantities.map((ele, ind) => <option key={ind}>{ele}</option>)}
                    </select>
                </div>
            </div>
            <div className='cart-item-prices'>
                <span>
                    <h4 className='roboto cart-item-price'>Price: ₹{price}</h4>
                </span>
                
                <button className='small-button remove-cart-button'>
                    Remove From Cart
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
    )
}