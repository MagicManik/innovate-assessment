import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import DatePick from './DatePick';

const CalenderBtn = () => {
        return (
                <Menu as="div" style={{ padding: '0', border: '2px solid #f8f8f8' }} className="relative inline-block text-left rounded-xl cursor-pointer">
                        <Menu.Button style={{ padding: '0px' }} className='w-full text-left'>
                                <div className='py-4 lg:px-14 px-4'>
                                        <p className=' text-[20px] font-medium text-[#2C2827]'>Feb 08 - Feb 14</p>
                                        <p className='text-[15px] text-[#B0AAA9]'>Check in - Check out</p>
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
                                <Menu.Items className="absolute left-0 z-[1500] mt-2 origin-top-right rou bg-white shadow-[0px_0.5rem_1rem_0px_rgba(011,38,0,0.24)] rounded-lg">
                                        {/* calender */}
                                        <DatePick />
                                </Menu.Items>
                        </Transition>
                </Menu>
        )
}

export default CalenderBtn;