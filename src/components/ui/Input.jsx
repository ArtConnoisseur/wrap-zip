export function Input(props) {
    return (
        <div className={`flex items-center bg-backgroundSc min-w-[400px] w-[30%] px-5 py-3 rounded-sm ${props.className}`}>
            <input {...props} className={`bg-transparent focus:outline-none w-full`}/>
        </div>

    )
}