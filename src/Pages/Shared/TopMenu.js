import React from 'react';
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineEnvelope } from "react-icons/hi2";

const TopMenu = () => {
    return (
        <div className='bg-[#191C19] lg:h-9 h-auto lg:px-0 px-6'>
            <div className='flex items-center lg:justify-between justify-center flex-wrap max-w-7xl mx-auto'>
                <div className='flex'>
                    <div className='flex items-end text-white'>
                        <MdOutlineLocalPhone />
                        <small className='pl-1'>+971585075089</small>
                    </div>
                    <div className='flex items-end text-white ml-10'>
                        <HiOutlineEnvelope />
                        <small className='pl-1'>+971585075089</small>
                    </div>
                </div>
                <div className='flex text-white'>
                    <div className='flex items-center'>
                        <p className='text-sm'>Currency :</p>
                        <select className="text-white select-sm appearance-none text-sm bg-[#191C19] px-1">
                            <option className='text-sm' selected>AED</option>
                            <option className='text-sm'>Demo 1</option>
                            <option className='text-sm'>Demo 2</option>
                            <option className='text-sm' >Demo 3</option>
                        </select>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-sm'>Language :</p>
                        <select className="text-white select-sm appearance-none text-sm bg-[#191C19] px-1">
                            <option className='text-sm' selected>EN</option>
                            <option className='text-sm'>Demo 1</option>
                            <option className='text-sm'>Demo 2</option>
                            <option className='text-sm' >Demo 3</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopMenu