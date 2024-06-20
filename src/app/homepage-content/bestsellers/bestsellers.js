'use client';

import '../basics/basic-content.css';

import { useState, useEffect } from 'react';
import InfoCard from '../../components/info-card/info-card';

import imageOne from '../../../../public/sample-images/img/top-product.png';
import imageTwo from '../../../../public/sample-images/img/top-product2.png';
import imageThree from '../../../../public/sample-images/img/top-product3.png';
import imageFour from '../../../../public/sample-images/img/top-product4.png';


function Categories() {
  const categoryLabels = ['All Products', 'T-Shirts', 'Hoodies', 'Jackets'];
  const [selected, setSelected] = useState(0);

  const handleSelectedCat = (clicked) => {
    setSelected(clicked);
  };

  return (
    <div className='categories'>
      {categoryLabels.map((label, index) => (
        <span
          key={index}
          className={`basic-category${selected === index ? ' selected' : ''}`}
          onClick={() => handleSelectedCat(index)}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

export function Bestsellers() {
  return (
    <div className="homepage-basic-content">
      <h2>Bestsellers</h2>
      <div className='basic-content-options'>
          <Categories />
          <button className='small-button'>Filter <i className="fa-solid fa-filter"></i></button>
      </div>
        
      <div className="basic-content-images">
        <InfoCard className='basic-content-infocards' src={ imageOne } hot={ true } />
        <InfoCard className='basic-content-infocards' src={ imageTwo }/>
        <InfoCard className='basic-content-infocards' src={ imageThree }/>
        <InfoCard className='basic-content-infocards' src={ imageFour }/>
      </div>
    </div>
  )
}