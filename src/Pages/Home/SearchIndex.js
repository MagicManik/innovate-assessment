import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React, { Fragment, useState } from 'react';
import { FiMinus, FiPlus } from "react-icons/fi";
import Option from '../../components/Option';
import Select from '../../components/Select';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const SearchIndex = () => {
    let [adultPeople, setAdultPeople] = useState(2);

    const adultPeopleIncrement = () => {
        if (adultPeople !== 14) {
            setAdultPeople((adultPeople) = adultPeople + 1);
        } else {
            return;
        }
    };
    const adultPeopleDecrement = () => {
        if (adultPeople !== 1) {
            setAdultPeople((adultPeople) = adultPeople - 1);
        } else {
            return;
        }
    };

    return (
        <div className='flex justify-end'>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="text-sm inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-[#3662D8]">
                        <div className='py-4 lg:px-14 px-4 rounded-xl border-[#F8F8F8] border-2'>
                            <p className=' text-[20px] font-medium text-[#2C2827]'>1 Room, {adultPeople} Guests</p>
                            <p className='text-[15px] text-[#B0AAA9]'>Rooms & Guests</p>
                        </div>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-[376px] origin-top-right rou bg-white shadow-[0px_0.5rem_1rem_0px_rgba(011,38,0,0.24)] rounded-lg">
                        <div className="text-[#141D38] p-3 pt-6 ">
                            <h3 className='text-lg font-medium'>Travelers</h3>
                            <div className="bg-[#CA2E2B] rounded-lg text-sm text-white p-3 mt-2">Please provide the age of the child.</div>
                            <section>
                                {/* room: 1 */}
                                <div>
                                    <div>
                                        <h6 className='text-sm font-medium py-2'>Room 1</h6>
                                    </div>
                                    {/* adult area */}
                                    <div className='flex justify-between items-center'>
                                        <label for="adult-input-0" className='text-sm text-[#343B53] flex-grow'>
                                            <span>Adults</span>
                                        </label>
                                        <div className='flex'>
                                            <button onClick={adultPeopleDecrement} style={{ inlineSize: '3rem', blockSize: '3rem', appearance: 'button' }} className='flex justify-center items-center bg-transparent' type="button">
                                                <span style={{ inlineSize: '2rem', blockSize: '2rem' }} className='flex items-center justify-center border border-[#727483] rounded-full'>
                                                    <FiMinus style={{ inlineSize: '1rem', blockSize: '1rem' }} className='text-[#343B53]' />
                                                </span>
                                            </button>
                                            <input style={{ inlineSize: '1.5rem' }} className='text-center text-sm text-[#343B53] bg-transparent pointer-events-none focus:outline-none' type="text" id="adult-input-0" min="1" max="14" tabindex="-1" aria-label="Adults" value={adultPeople} readonly="" />
                                            <button onClick={adultPeopleIncrement} style={{ inlineSize: '3rem', blockSize: '3rem', appearance: 'button' }} className='flex justify-center items-center bg-transparent' type="button">
                                                <span style={{ inlineSize: '2rem', blockSize: '2rem' }} className='flex items-center justify-center border border-[#727483] rounded-full'>
                                                    <FiPlus style={{ inlineSize: '1rem', blockSize: '1rem' }} className='text-[#343B53]' />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    {/* Children area */}
                                    <div className='flex justify-between items-center'>
                                        <label for="adult-input-0" className='text-sm text-[#343B53] flex-grow'>
                                            <span className='block text-sm'>Children</span>
                                            <span className='block text-sm'>Ages 0 to 17</span>
                                        </label>
                                        <div className='flex'>
                                            <button style={{ inlineSize: '3rem', blockSize: '3rem', appearance: 'button' }} className='flex justify-center items-center bg-transparent' type="button">
                                                <span style={{ inlineSize: '2rem', blockSize: '2rem' }} className='flex items-center justify-center border border-[#727483] rounded-full'>
                                                    <FiMinus style={{ inlineSize: '1rem', blockSize: '1rem' }} className='text-[#343B53]' />
                                                </span>
                                            </button>
                                            <input style={{ inlineSize: '1.5rem' }} className='text-center text-sm text-[#343B53] bg-transparent pointer-events-none focus:outline-none' type="text" id="adult-input-0" min="1" max="14" tabindex="-1" aria-label="Adults" value="0" readonly="" />
                                            <button style={{ inlineSize: '3rem', blockSize: '3rem', appearance: 'button' }} className='flex justify-center items-center bg-transparent' type="button">
                                                <span style={{ inlineSize: '2rem', blockSize: '2rem' }} className='flex items-center justify-center border border-[#727483] rounded-full'>
                                                    <FiPlus style={{ inlineSize: '1rem', blockSize: '1rem' }} className='text-[#343B53]' />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* child select are */}
                                <div className='grid grid-cols-2 w-full gap-3 mt-3'>
                                    <Select>
                                        <Option />
                                    </Select>
                                    <Select>
                                        <Option />
                                    </Select>
                                </div>
                                {/* Add another room button area */}
                                <div className='flex justify-end pt-5 pb-7'>
                                    <button className='text-base leading-5 font-medium rounded-lg text-[#3662D8] py-1 px-2 bg-transparent hover:bg-[#E7EDFD]' data-testid="add-room-button" type="button">Add another room</button>
                                </div>
                            </section>
                            <div>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            type="submit"
                                            className={classNames(
                                                active ? 'btn normal-case bg-[#2950B8] text-white font-medium outline-none border-none hover:bg-[#2950B8] w-full' : 'btn normal-case bg-[#2950B8] text-white font-medium outline-none border-none hover:bg-[#2950B8] w-full'
                                            )}>
                                            Done
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default SearchIndex;