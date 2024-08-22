import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import FooterLogo from '/public/logos/logo-all-white-text-large.svg';

export function Footer() {
    return (
        <footer className='flex justify-evenly py-[7%] px-5 items-center bg-secondary text-onSecondary'>
            <div className='flex flex-col w-[25%] gap-10 justify-start'>
                <Image src={FooterLogo} alt={'footer-logo'} width={200}/>
                <span>
                    Please find our social media below and relevant links adjacent to this section!
                </span>
                <div className='flex gap-5'>
                    <Icon name='Facebook' className='hover:text-accent transition-all duration-300 ease-in-out'/>
                    <Icon name='Instagram' className='hover:text-accent transition-all duration-300 ease-in-out'/>
                    <Icon name='Twitter' className='hover:text-accent transition-all duration-300 ease-in-out'/>
                </div>
            </div>
            <div className='flex flex-col items-start gap-7'>
                <span className={`capitalize text-xl`}>catalog</span>
                <ul className='flex flex-col items-start gap-4'>
                    <li className='hover:text-accent transition-all duration-300 ease-in-out underline-animation'><Link href='/'>Necklaces</Link></li>
                    <li className='hover:text-accent transition-all duration-300 ease-in-out underline-animation'><Link href='/'>Jewlery Box</Link></li>
                    <li className='hover:text-accent transition-all duration-300 ease-in-out underline-animation'><Link href='/'>T-Shirt</Link></li>
                    <li className='hover:text-accent transition-all duration-300 ease-in-out underline-animation'><Link href='/'>Jacket</Link></li>
                    <li className='hover:text-accent transition-all duration-300 ease-in-out underline-animation'><Link href='/'>Hoodies</Link></li>
                </ul>
            </div>
            <div className='flex flex-col items-start gap-7'>
                <span className={`capitalize text-xl`}>about us</span>
                <ul className='flex flex-col items-start gap-4'>
                    <li className='hover:text-accent transition-all duration-300 ease-in-out underline-animation'><Link href='/'>Necklaces</Link></li>
                    <li className='hover:text-accent transition-all duration-300 ease-in-out underline-animation'><Link href='/'>Jewlery Box</Link></li>
                    <li className='hover:text-accent transition-all duration-300 ease-in-out underline-animation'><Link href='/'>T-Shirt</Link></li>
                    <li className='hover:text-accent transition-all duration-300 ease-in-out underline-animation'><Link href='/'>Jacket</Link></li>
                    <li className='hover:text-accent transition-all duration-300 ease-in-out underline-animation'><Link href='/'>Hoodies</Link></li>
                </ul>
            </div>
            <div className='flex flex-col items-start gap-7'>
                <span className={`capitalize text-xl`}>customer services</span>
                <ul className='flex flex-col items-start gap-4'>
                    <li className='hover:text-accent transition-all duration-300 ease-in-out underline-animation'><Link href='/'>Necklaces</Link></li>
                    <li className='hover:text-accent transition-all duration-300 ease-in-out underline-animation'><Link href='/'>Jewlery Box</Link></li>
                    <li className='hover:text-accent transition-all duration-300 ease-in-out underline-animation'><Link href='/'>T-Shirt</Link></li>
                    <li className='hover:text-accent transition-all duration-300 ease-in-out underline-animation'><Link href='/'>Jacket</Link></li>
                    <li className='hover:text-accent transition-all duration-300 ease-in-out underline-animation'><Link href='/'>Hoodies</Link></li>
                </ul>
            </div>
        </footer>
    )
}
