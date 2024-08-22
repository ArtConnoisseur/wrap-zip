import { icons } from 'lucide-react';

export function Icon(props) {
    const LucideIcon = icons[props.name];

    return <LucideIcon  {...props} className={`h-[1.2em] w-[1.2em] stroke-[1.5px] ${props.fill && 'fill-accent'} ${props.className}`} />;
}