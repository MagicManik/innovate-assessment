import React from 'react';
import { CiSearch } from "react-icons/ci";

const SearchFrom = () => {
    return (
        <form className='pt-[14px] pb-[30px]'>
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <CiSearch className='text-3xl text-[#ADACAD] pr-1' />
                </div>
                <input type="search" id="default-search" className="block w-full p-3 pl-10 text-sm border border-[#F8F8F8] rounded-lg bg-white" placeholder="Property Name" required />
            </div>
        </form>
    )
}

export default SearchFrom