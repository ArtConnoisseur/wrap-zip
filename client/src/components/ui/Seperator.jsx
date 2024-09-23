export function Seperator({children}) {
    return (
        <div className="w-full relative h-fit flex flex-col gap-2">
            <div className="h-[1px] w-full bg-gray"/>
            <span className="absolute w-fit h-fit text-sm inset-0 m-auto bg-background px-4 text-gray">{children}</span>
        </div>
    )
}

export function VerticalSeperator() {
    return (
        <div className="w-[0.5px] h-[100%] bg-gray"/>
    )
}