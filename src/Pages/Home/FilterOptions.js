import React from 'react';
import { ImStarFull } from "react-icons/im";
import CheckInput from '../../components/CheckInput';
import Level from '../../components/Level';
import SearchFrom from '../../components/SearchFrom';

const FilterOptions = () => {
    return (
        <div>
            <div className='my-8 border-b-2 border-t-2 border-[#F8F8F8]'>
                <p className='pt-[22px] text-[14px] text-[#2C2827]'>Search by property name</p>
                <SearchFrom />
            </div>
            <div className='flex justify-between'>
                <p className='text-xl font-medium text-[#191C19]'>Filters</p>
                <button className=' px-4 py-1 border border-[#F8F8F8] rounded-xl text-[14px] text-[#191C19] text-center'>
                    Reset
                </button>
            </div>
            <div className=' my-[30px]'>
                <h5 className='text-[15px] font-medium text-[#2C2827] pb-[12px]'>Popular filters</h5>
                <div className='mb-[7px]'>
                    <CheckInput id='fullyrefundable'/>
                    <Level level='Fully refundable' htmlfor='fullyrefundable' />
                </div>
                <div className='mb-[7px]'>
                    <CheckInput id='hotelresort' />
                    <Level level='Hotel resort' htmlfor='hotelresort' />
                </div>
                <div className='mb-[7px]'>
                    <CheckInput id='apartment' />
                    <Level level='Apartment' htmlfor='apartment' />
                </div>
                <div className='mb-[7px]'>
                    <CheckInput id='pool' />
                    <Level level='Pool' htmlfor='pool' />
                </div>
            </div>
            <div className=' my-[30px]'>
                <h5 className='text-[15px] font-medium text-[#2C2827] pb-[12px]'>Price Range</h5>
                <div className='flex justify-between items-center w-full'>
                    <input type="search" id="default-search" className="block w-full p-3 text-sm border border-[#F8F8F8] rounded-lg bg-white" placeholder="Min Price" required />
                    <p className='text-[#2C2827] px-5'>to</p>
                    <input type="search" id="default-search" className="block w-full p-3 text-sm border border-[#F8F8F8] rounded-lg bg-white" placeholder="Max Price" required />
                </div>
            </div>
            <div className='my-[30px]'>
                <h5 className='text-[15px] font-medium text-[#2C2827] pb-[12px]'>Guest rating</h5>
                <div className='mb-[7px]'>
                    <CheckInput id='any' />
                    <Level level='Any' htmlfor='any' />
                </div>
                <div className='mb-[7px]'>
                    <CheckInput id='wonderful' />
                    <Level level='Wonderful 9+' htmlfor='wonderful' />
                </div>
                <div className='mb-[7px]'>
                    <CheckInput id='goodplus' />
                    <Level level='Very good 8+' htmlfor='goodplus' />
                </div>
                <div className='mb-[7px]'>
                    <CheckInput id='good' />
                    <Level level='Good +' htmlfor='good' />
                </div>
            </div>
            <div className='my-[30px]'>
                <h5 className='text-[15px] font-medium text-[#2C2827] pb-[12px]'>Star Rating</h5>
                <div className='flex'>
                    <button className='bg-[#0010B5] flex items-center justify-center w-[45px] h-[40px] rounded text-white'>
                        <p className='text-[15px] py-3'>5</p>
                        <ImStarFull className=' text-[14px] ml-[4px]' />
                    </button>
                    <button className='border border-[#F8F8F8] flex items-center justify-center w-[45px] h-[40px] rounded ml-[11px] text-[#212321]'>
                        <p className='text-[15px] py-3'>4</p>
                        <ImStarFull className=' text-[14px] ml-[4px]' />
                    </button>
                    <button className='border border-[#F8F8F8] flex items-center justify-center w-[45px] h-[40px] rounded ml-[11px] text-[#212321]'>
                        <p className='text-[15px] py-3'>3</p>
                        <ImStarFull className=' text-[14px] ml-[4px]' />
                    </button>
                    <button className='border border-[#F8F8F8] flex items-center justify-center w-[45px] h-[40px] rounded ml-[11px] text-[#212321]'>
                        <p className='text-[15px] py-3'>2</p>
                        <ImStarFull className=' text-[14px] ml-[4px]' />
                    </button>
                    <button className='border border-[#F8F8F8] flex items-center justify-center w-[45px] h-[40px] rounded ml-[11px] text-[#212321]'>
                        <p className='text-[15px] py-3'>1</p>
                        <ImStarFull className=' text-[14px] ml-[4px]' />
                    </button>
                </div>
            </div>
            <div className=' my-[30px]'>
                <h5 className='text-[15px] font-medium text-[#2C2827] pb-[12px]'>Payment type</h5>
                <div className='mb-[7px]'>
                    <CheckInput id='refund' />
                    <Level level='Fully refundable' htmlfor='refund' />
                </div>
                <div className='mb-[7px]'>
                    <CheckInput id='reserve' />
                    <Level level='Reserve now, pay later' htmlfor='reserve' />
                </div>
            </div>
            <div className='my-[30px]'>
                <h5 className='text-[15px] font-medium text-[#2C2827] pb-[12px]'>Property type</h5>
                <div className='mb-[7px]'>
                    <CheckInput id='refundable' />
                    <Level level='Fully refundable' htmlfor='refundable' />
                </div>
                <div className='mb-[7px]'>
                    <CheckInput id='resort' />
                    <Level level='Resort' htmlfor='resort' />
                </div>
                <div className='mb-[7px]'>
                    <CheckInput id='apart' />
                    <Level level='Apart - hotel' htmlfor='apart' />
                </div>
                <div className='mb-[7px]'>
                    <CheckInput id='hotel' />
                    <Level level='Hotel' htmlfor='hotel' />
                </div>
            </div>
            <div className='my-[30px]'>
                <h5 className='text-[15px] font-medium text-[#2C2827] pb-[12px]'>Neighborhood</h5>
                <div className='mb-[7px]'>
                    <CheckInput id='vicinity' />
                    <Level level='Dubai (and vicinity)' htmlfor='vicinity' />
                </div>
                <div className='mb-[7px]'>
                    <CheckInput id='dxb' />.
                    <Level level='Dubai (DXB-Dubai Intl.)' htmlfor='dxb' />
                </div>
                <div className='mb-[7px]'>
                    <CheckInput id='palm' />
                    <Level level='Palm Jumeirah' htmlfor='palm' />
                </div>
                <button className='text-[16px] text-[#0010B5]'>See more</button>
            </div>
            <div className='my-[30px]'>
                <h5 className='text-[15px] font-medium text-[#2C2827] pb-[12px]'>Meal plans available</h5>
                <div className='mb-[7px]'>
                    <CheckInput id='breakfast' />
                    <Level level='Breakfast included' htmlfor='breakfast' />
                </div>
                <div className='mb-[7px]'>
                    <CheckInput id='lunch'/>
                    <Level level='Lunch included' htmlfor='lunch' />
                </div>
                <div className='mb-[7px]'>
                    <CheckInput id='dinner' />
                    <Level level='Dinner included' htmlfor='dinner' />
                </div>
                <div className='mb-[7px]'>
                    <CheckInput id='inclusive' />
                    <Level level='All inclusive' htmlfor='inclusive' />
                </div>
            </div>
            <div className='my-[30px]'>
                <h5 className='text-[15px] font-medium text-[#2C2827] pb-[12px]'>Amenities</h5>
                <div className='mb-[7px]'>
                    <CheckInput id='poolii' />
                    <Level level='Pool' htmlfor='poolii' />
                </div>
                <div className='mb-[7px]'>
                    <CheckInput id='ocean' />
                    <Level level='Ocean view' htmlfor='ocean' />
                    <label className='text-[14px] text-[#191C19] pl-[10px]' htmlFor="dining"></label>
                </div>
                <div className='mb-[7px]'>
                    <CheckInput id='airport' />
                    <Level level='Airport shuttle included' htmlfor='airport' />
                </div>
                <button className='text-[16px] text-[#0010B5]'>See more</button>
            </div>
            <div className='my-[30px]'>
                <h5 className='text-[15px] font-medium text-[#2C2827] pb-[12px]'>Traveler experience</h5>
                <div className='mb-[10px]'>
                    <CheckInput id='pusiness' />
                    <Level level='Pusiness friendly' htmlfor='pusiness' />
                    <p className='text-[#4F514F] text-[13px]'>see properties with amenities to help you work comfortably, like WiFi and breakfast</p>
                </div>
                <div className='mb-[10px]'>
                    <CheckInput id='family' />
                    <Level level='Family friendly' htmlfor='family' />
                    <p className='text-[#4F514F] text-[13px]'>see properties that include family essentials, like in-room conveniences and activities for the kids.</p>
                </div>
                <div className='mb-[10px]'>
                    <CheckInput id='pet' />
                    <Level level='Pet friendly' htmlfor='pet' />
                    <p className='text-[#4F514F] text-[13px]'>see properties that include pet essentials, like in-room conveniences and activities for your pet.</p>
                </div>
            </div>
        </div>
    )
}

export default FilterOptions