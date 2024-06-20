import './footer.css';

import Link from 'next/link';


export const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-wrapzip-info'>
                <h5 className='roboto footer-header'>Wrapzip</h5>
                <p>
                    Please find our social media below and relevant links adjacent to this section!
                </p>
                <div className='footer-socmed-icons'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
            <div className='footer-link-container'>
                <span className='roboto footer-header'>CATALOG</span>
                <ul className='footer-links'>
                    <Link href='/'><li>Necklaces</li></Link>
                    <Link href='/'><li>Jewlery Box</li></Link>
                    <Link href='/'><li>T-Shirt</li></Link>
                    <Link href='/'><li>Jacket</li></Link>
                    <Link href='/'><li>Hoodies</li></Link>
                </ul>
            </div>
            <div className='footer-link-container'>
                <span className='roboto footer-header'>ABOUT US</span>
                <ul className='footer-links'>
                    <Link href='/'><li>Necklaces</li></Link>
                    <Link href='/'><li>Jewlery Box</li></Link>
                    <Link href='/'><li>T-Shirt</li></Link>
                    <Link href='/'><li>Jacket</li></Link>
                    <Link href='/'><li>Hoodies</li></Link>
                </ul>
            </div>
            <div className='footer-link-container'>
                <span className='roboto footer-header'>CUSTOMER SERVICES</span>
                <ul className='footer-links'>
                    <Link href='/'><li>Necklaces</li></Link>
                    <Link href='/'><li>Jewlery Box</li></Link>
                    <Link href='/'><li>T-Shirt</li></Link>
                    <Link href='/'><li>Jacket</li></Link>
                    <Link href='/'><li>Hoodies</li></Link>
                </ul>
            </div>
        </footer>
    )
};
