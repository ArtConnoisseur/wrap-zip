'use client';

import { useState } from 'react';
import InfoCard from '../components/info-card/info-card';

import './basic-content.css';

import imageOne from '../../../public/sample-images/img/top-product.png';
import imageTwo from '../../../public/sample-images/img/top-product2.png';
import imageThree from '../../../public/sample-images/img/top-product3.png';
import imageFour from '../../../public/sample-images/img/top-product4.png';
import imageFive from '../../../public/sample-images/img/top-product5.png';
import imageSix from '../../../public/sample-images/img/top-product6.png';
import imageSeven from '../../../public/sample-images/img/top-product7.png';
import imageEight from '../../../public/sample-images/img/top-product8.png';

export function BasicContent() {
    const [active, setActive] = useState();



    return (
    <div id="homepage-basic-content">
      <h3>Our Basic</h3>
      <div id="homepage-basic-categories">
        <button className="category-button actv">All Products</button>
        <button className="category-button">T-Shirts</button>
        <button className="category-button">Hoodies</button>
        <button className="category-button">Jackets</button>
        <button className="small-button">Filter</button>
      </div>
      <div id="content-images">
        <InfoCard src={ imageOne } hot={ true } />
        <InfoCard src={ imageTwo }/>
        <InfoCard src={ imageThree }/>
        <InfoCard src={ imageFour }/>
        <InfoCard src={ imageFive }/>
        <InfoCard src={ imageSix }/>
        <InfoCard src={ imageSeven }/>
        <InfoCard src={ imageEight }/>
      </div>
    </div>
    )
}