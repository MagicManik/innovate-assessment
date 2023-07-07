import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import SearchFrom from '../../components/SearchFrom';
import Locations from './Locations';
import Location from './Location';
import { SlLocationPin } from "react-icons/sl";

const LocationBtn = () => {
    const [userLocation, setUserLocation] = useState(null);

    return (
        <Menu as="div" style={{ padding: '0', border: '2px solid #f8f8f8' }} className="relative inline-block text-left rounded-xl cursor-pointer">
            <Menu.Button style={{ padding: '0px' }} className='w-full text-left'>
                <div className='py-4 lg:px-14 px-4'>
                    <p className=' text-[20px] font-medium text-[#2C2827]'>Location</p>
                    {userLocation ?
                        <div className='flex items-center'>
                            <SlLocationPin className='text-[16px] text-black' />
                            <p className='text-[15px] text-[#B0AAA9] ml-2'>{userLocation}</p>
                        </div>
                        :
                        <p className='text-[15px] text-[#B0AAA9]'>
                            Where are you going?</p>
                    }
                </div>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute left-0 -top-3 w-full z-[1500] mt-2 origin-top-right rou bg-white shadow-[0px_0.5rem_1rem_0px_rgba(011,38,0,0.24)] rounded-lg">
                    {/* location dropdown */}
                    <div className="py-1">
                        <div className='px-4'>
                            <div className='py-5'>
                                <SearchFrom name='Where are you going?' />
                            </div>
                            <div className='pb-5'>
                                <h6 className='text-black font-medium text-sm'>Popular destinations</h6>
                            </div>

                        </div>
                        <Locations setUserLocation={setUserLocation} />
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default LocationBtn;