import { Pathname, PathElement } from "@/components/ProductPath";
import { FilterOption, FilterRange, FilterSection, FilterSeperator } from "@/components/Filters";

export default function SearchLayout({ children }) {
    return (
        <div className='w-[85%] self-center'>
            <div className="flex justify-between px-4 border-b-[0.5px] border-gray py-5 relative">
                <Pathname>
                    <PathElement to='/'>
                        Clothing
                    </PathElement>
                    <PathElement to='/'>
                        Women
                    </PathElement>
                    <PathElement to='/'>
                        Ethenic
                    </PathElement>
                    <PathElement to='/'>
                        Kurtis
                    </PathElement>
                </Pathname>
                <div>
                    34 items in <strong className='text-accent'>Kurtis</strong>
                </div>
            </div>
            <div className="flex">
                <aside className='w-[20%] flex flex-col gap-4 border-r-[0.5px] box-border px-10 border-gray'>
                    <h1 className='text-xl mt-5'>Filters</h1>
                    <FilterSeperator/>

                    <FilterSection header={'Categories'}>
                        <FilterOption>
                            Kurtis
                        </FilterOption>
                        <FilterOption>
                            Tops
                        </FilterOption>
                        <FilterOption>
                            Ethenic
                        </FilterOption>
                        <FilterOption>
                            New
                        </FilterOption>
                    </FilterSection>

                    <FilterSeperator/>

                    <FilterSection header={'Price Range'}>
                        <FilterRange/>
                    </FilterSection>

                    <FilterSeperator/>

                    <FilterSection header={'Categories'}>
                        <FilterOption>
                            Kurtis
                        </FilterOption>
                        <FilterOption>
                            Tops
                        </FilterOption>
                        <FilterOption>
                            Ethenic
                        </FilterOption>
                        <FilterOption>
                            New
                        </FilterOption>
                    </FilterSection>

                    <FilterSeperator/>

                    <FilterSection header={'Categories'}>
                        <FilterOption>
                            Kurtis
                        </FilterOption>
                        <FilterOption>
                            Tops
                        </FilterOption>
                        <FilterOption>
                            Ethenic
                        </FilterOption>
                        <FilterOption>
                            New
                        </FilterOption>
                    </FilterSection>
                    
                    <FilterSeperator/>
                </aside>
                <div className="flex justify-center w-[81%]">
                    {children}
                </div>
            </div>
        </div>
    )
}