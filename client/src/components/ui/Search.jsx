import { Icon } from '@/components/ui/Icon';

export function Searchbar(props) {
    return (
        <div className={`flex items-center bg-backgroundSc min-w-[400px]
         w-[30%] px-5 py-3 rounded-sm ${props.className}`}>
            <Icon name='Search' className='mr-4' />
            <input
                type='text'
                placeholder="Search"
                className='bg-transparent focus:outline-none w-full'
            />
        </div>
    )
}