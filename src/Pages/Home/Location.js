import React from 'react';
import { Menu } from '@headlessui/react';
import { SlLocationPin } from "react-icons/sl";

const Location = ({ city, location, setUserLocation }) => {
    const handleUserLocation = () => {
        setUserLocation(city);
    };

    return (
        <Menu.Item>
            <button onClick={handleUserLocation} className='flex items-center text-left px-3.5 py-2 hover:bg-[#E7EDFD] w-full'>
                <SlLocationPin className='text-[16px] text-black' />
                <div className='ml-1.5'>
                    <p className='text-black font-medium text-sm'>{city}</p>
                    <p className='text-sm'>{location}</p>
                </div>
            </button>
        </Menu.Item>
    )
}

export default Location