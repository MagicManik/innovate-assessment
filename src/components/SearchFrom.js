import React from 'react';
import { CiSearch } from "react-icons/ci";

const SearchFrom = ({ name }) => {
    return (
        <form>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <CiSearch className='text-3xl text-[#ADACAD] pr-1' />
                </div>
                <input type="search" id="default-search" className="block w-full p-3 pl-10 text-sm border border-[#F8F8F8] rounded-lg bg-white" placeholder={name} required />
            </div>
        </form>
    )
}

export default SearchFrom