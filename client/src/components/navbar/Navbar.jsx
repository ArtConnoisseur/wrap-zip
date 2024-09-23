import Image from "next/image";
import Logo from "/public/logos/logo.svg";
import { Navbarlink } from './Navbarlink';
import { Icon } from "@/components/ui/Icon";
import { Searchbar } from "@/components/ui/Search";
import Link from "next/link";

export function Navbar() {
    return (
        <nav className="flex gap-10 items-center sticky top-0 w-full h-fit py-5 drop-shadow-sm
        px-[5%] bg-background shadow-md shadow-gray/30 z-20">
            <Link href='/' className='relative -top-1 scale-110'>
                <Image
                    src={Logo}
                    alt='Logo'
                    className='w-fit h-fit mr-5'
                />
            </Link>
            <Navbarlink to='/about'>
                Women
            </Navbarlink>
            <Navbarlink to='/about'>
                Men
            </Navbarlink>
            <Navbarlink to='/about'>
                Kids
            </Navbarlink>
            <Navbarlink to='/about'>
                Accessories
            </Navbarlink>

            {/*----------------Link Seperator---------------*/}

            <Searchbar className='ml-auto'/>
            <Navbarlink to='/accounts'>
                <div className='flex gap-2 flex-col items-center'>
                    <Icon name='UserPen'/>
                    <span className='text-sm'>Account</span>
                </div>
            </Navbarlink>
            <Navbarlink to='/wishlist'>
                <div className='flex gap-2 flex-col items-center'>
                    <Icon name='Heart'/>
                    <span className='text-sm'>Wishlist</span>
                </div>
            </Navbarlink>
            <Navbarlink to='/cart'>
                <div className='flex gap-2 flex-col items-center'>
                    <Icon name='ShoppingBag'/>
                    <span className='text-sm'>Cart</span>
                </div>
            </Navbarlink>
        </nav>
    )
}