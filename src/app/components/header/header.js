import './header.css';

import Logo from '../../../../public/logos/logo.svg';
import Image from 'next/image'; 
import Link from 'next/link';

import { Input } from '../input/input';

export const Header = () => {
    return (
        <header className='header'>
            <Link href='/'>
                <Image 
                    src={Logo}
                    className='header-logo'
                />
            </Link>
            <ul className='header-links'>
                <li><Link href='/'>Men</Link></li>
                <li><Link href='/'>Women</Link></li>
                <li><Link href='/'>Kids</Link></li>
                <li><Link href='/'>Accessories</Link></li>
            </ul>
            <div className='header-search'>
                <i className="fa-solid fa-magnifying-glass"></i>
                <Input 
                    placeholder='Search'
                />
            </div>
            <div className='site-nav'>
                <i className="fa-solid fa-user"></i>
                Profile
            </div>
            <div className='site-nav'>
                <i className="fa-solid fa-heart"></i>
                Wishlist
            </div>
            <div className='site-nav'>
                <i className="fa-solid fa-bag-shopping"></i>
                Cart
            </div>
        </header>
    )
}


