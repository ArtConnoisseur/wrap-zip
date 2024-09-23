'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Navbarlink({ to, children, className }) {
    const active = usePathname() === to;

    return (
        <span className={`hover:text-accent transition-all duration-300 ease-in-out ${className ? className : ''}
        ${active && 'text-accent'} ${!active && 'underline-animation'}`}>
            <Link href={to}>
                {children}
            </Link>
        </span>

    )
}