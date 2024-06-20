import './header.css';

import Logo from '../../../../public/logos/logo-dark-text.svg';
import Image from 'next/image';
import Link from 'next/link';

import { Input } from '../input/input.js';

export const Header = () => {
    return (
        <div className="header-continer">
            <div className="main header">
                <span className='header-search'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <Input placeholder='Search' />
                </span>
                <Link href="/">
                    <Image src={Logo} className='logo' alt='logo'/>
                </Link>
                <div className='header-account-links'>
                    <span>
                        <Link href='\'>Sign Up</Link>
                    </span>
                    <span>
                        <Link href='\'>Sign In</Link>
                    </span>
                    
                </div>
            </div>
            <hr className='long-line'></hr>
            <div className="header">
                <Link className="header-category-links" href='/'>Jewlery & Accessories</Link>
                <Link className="header-category-links" href='/'>Clothing & Shoes</Link>
                <Link className="header-category-links" href='/'>Home & Living</Link>
                <Link className="header-category-links" href='/'>Wedding & Party</Link>
                <Link className="header-category-links" href='/'>Toys & Entertainment</Link>
                <Link className="header-category-links" href='/'>Art & Collectables</Link>
            </div>
        </div>
    )
}


