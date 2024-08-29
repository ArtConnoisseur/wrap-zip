'use client';

import { Icon } from "./ui/Icon";
import { Button } from './ui/Button'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState  } from "react";

export function DevNotice() {
    return(
        <div className="flex flex-col items-center justify-center h-[80vh] bg-background px-4">
            <div className="text-center bg-backgroundSc p-6 rounded-md shadow-sm max-w-md">
                <h1 className="text-xl font-bold text-primary mb-2">Developer Notice</h1>
                <p className="text-sm text-secondary mb-4">
                    {`This page is yet to be done. Will let you know when there is an update!`}
                </p>
                <p className="text-sm text-gray mb-6">
                    If you have any questions, feel free to reach out!
                </p>
            </div>
        </div>
    )
}

function DevNavLink({ to='/', children }) {
    const active = to === usePathname(); 
    
    return (
        <Link href={to} className={`${active && 'text-accent bg-accent/10'} ${!active && 'hover:bg-accent/30'}
        w-[90%] px-5 py-3 transition-all duration-300 ease-in-out rounded-sm`}>
            {children}
        </Link>
    )
}

export function DevNav() {
    const path = usePathname(); 
    const [ visible, setVisible ] = useState(false);

    return (
        <dialog className={`fixed h-[95vh] z-40 flex dev-nav my-[2.5vh] mx-7 rounded-lg ${visible && 'border-[2px] border-accent'} overflow-auto`}>
            <Button type='outline' className={`${!visible && 'opacity-[0.2] scale-75'} absolute top-[150px] left-[105%] bg-white`} onClick={() => setVisible(!visible)}>
                <Icon name='Menu'/>
            </Button>
            <div className={`top-0 ${visible && 'flex'} ${!visible && 'hidden'} flex-col gap-6 w-[25vw] px-5 bg-white py-10 rounded-lg`}>
                <h1 className="font-[600] text-accent text-center text-4xl">This is the admin Wrapzip navigator.</h1>
                <p className="text-white bg-accent w-fit rounded-full px-4 self-center overflow-auto">Click the links to check each page</p>
                <div className="flex flex-col gap-2">
                    <DevNavLink to='/'>
                        Home
                    </DevNavLink>
                    <DevNavLink to='/search'>
                        Search Results Page
                    </DevNavLink>
                    <DevNavLink to='/product'>
                        Product Page
                    </DevNavLink>
                    <DevNavLink to='/cart'>
                        Cart
                    </DevNavLink>
                    <DevNavLink to='/wishlist'>
                        Wishlist
                    </DevNavLink>
                    <DevNavLink to='/accounts'>
                        Accounts Page
                    </DevNavLink>
                    <DevNavLink to='/checkout'>
                        Checkout
                    </DevNavLink>
                </div>
                <h1 className="font-[600] text-accent text-2xl">This will NOT be in the final product.</h1>
                <span className="text-gray text-sm">
                    You are currently at path: {path}<br/>
                    Sincerely, Rudraksh
                </span>
            </div>
        </dialog>
    )
}