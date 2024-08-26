import Link from 'next/link';

export function PathElement({ children, to }) {
    return (
        <Link href={to}>
            <span>{children}</span>
        </Link>
    )
}

export function Pathname({children}) {
    return (
        <div className='flex gap-3 text-sm text-gray'>
            {children instanceof Array && children.slice(0, children.length-1).map((item) => <>{item} / </>)}
            <strong className='text-accent'>{children[children.length - 1]}</strong>
            {!(children instanceof Array) && <strong className='text-accent'>/ {children}</strong>}
        </div>
    )
}