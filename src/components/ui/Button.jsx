export function Button(props) {
    let styleType = '';

    switch (props.type) {
        case 'solid':
            styleType = 'bg-accent w-fit px-3 py-2 rounded-sm text-onAccent hover:bg-pink-600 transition-all duration-[0.4s] ease-in-out';
            break
        case 'outline':
            styleType='border-text border-[1px] w-fit px-3 py-2 rounded-sm text-text hover:text-accent hover:border-accent transition-all duration-[0.4s] ease-in-out';
            break
        case 'destructive':
            styleType='bg-red-400 w-fit px-3 py-2 rounded-sm text-white hover:bg-red-600 transition-all duration-[0.4s] ease-in-out';
            break
        case 'ghost':
            styleType = 'w-fit px-3 py-2 rounded-sm text-text hover:bg-accent/40 transition-all duration-[0.4s] ease-in-out';
            break
        case 'gray-ghost':
            styleType = 'w-fit px-3 py-2 rounded-sm text-text hover:bg-trans-gray transition-all duration-[0.4s] ease-in-out';
            break
        default:
            styleType = 'bg-accent w-fit px-3 py-2 rounded-sm text-onAccent hover:bg-pink-600 transition-all duration-[0.4s] ease-in-out';
            break
    }
    return (
        <button className={`${styleType} ${props.className}`}>
            {props.children}
        </button>
    )
}