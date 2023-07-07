import React from 'react';
import { CiSearch } from "react-icons/ci";

const SearchBtn = () => {
    return (
        <button className="btn bg-[#0010B5] outline-none border-none hover:bg-[#F8AF41] hover:text-black normal-case font-normal text-white lg:h-[80px] h-full w-full search-btn">
            <CiSearch className='text-4xl' />
        </button>
    )
}

export default SearchBtn