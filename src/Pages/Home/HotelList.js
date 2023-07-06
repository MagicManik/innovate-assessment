import React from 'react';
import saveIcon from '../../assets/icons/save-icon.svg';
import { Link } from 'react-router-dom';
import Carousell from './Carousell';
import { ImStarFull } from "react-icons/im";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlinePool } from "react-icons/md";
import { PiBathtubDuotone } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import FilterOptions from './FilterOptions';
import EarthMap from './EarthMap';

const HotelList = () => {
    const facilities = [
        {
            _id: 1,
            icon: MdOutlinePool,
            title: 'Pool'
        },
        {
            _id: 2,
            icon: PiBathtubDuotone,
            title: 'Hot Tub'
        },
        {
            _id: 3,
            icon: IoBedOutline,
            title: 'King Bed'
        },
    ];

    const features = [
        {
            _id: 4,
            icon: GiCheckMark,
            title: 'Fully Refundable',
        },
        {
            _id: 5,
            icon: GiCheckMark,
            title: 'Reserve now, pay later',
        },
    ]

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='lg:flex block lg:px-0 px-4 lg:space-x-10 space-x-0'>
                <div className='lg:w-[330px] w-full'>
                    <EarthMap />
                    <FilterOptions />
                </div>
                <div className='w-full'>
                    <div className='flex justify-between'>
                        <p className='font-medium text-[20px] tracking-[0.4px]'>786 properties found</p>
                        <select className="select border-2 border-[#F8F8F8] w-full max-w-[200px] font-medium">
                            <option selected>Recommended</option>
                            <option>Demo one</option>
                            <option>Demo two</option>
                        </select>
                    </div>
                    <div className='lg:flex block justify-between items-center lg:px-[65px] px-6 py-[14px] bg-[#EFF3F7] rounded-[20px] my-12'>
                        <div>
                            <img className='w-12' src={saveIcon} alt="" />
                        </div>
                        <p className='text-[#0010B5] lg:py-0 py-4'>Save an average of 15% on thousands of hotels when you’re signed in</p>
                        <div>
                            <button className="btn bg-[#0010B5] outline-none border-none hover:bg-[#F8AF41] hover:text-black normal-case font-normal text-white h-[30px] w-[80px]"><Link to="/login">Sign in</Link></button>
                        </div>
                    </div>
                    {/* 786 properties found */}
                    <div className='lg:flex block w-full rounded-[18px] border-[#F8F8F8] border-2 mb-[11px]'>
                        <div className=' w-[312px] h-[246px]'>
                            <Carousell />
                        </div>
                        <div className='mx-[19px] flex-grow py-2'>
                            <small className='text-[#FF0C08] italic text-[13px]'>Only 1 room left at this price on our site</small>
                            <div className='flex items-center w-full'>
                                <div>
                                    <p className='text-[#4F514F] text-[21px] font-medium tracking-[.8px]'>Jumeirah Mina A Salam</p>
                                </div>
                                <div className='border border-[#0010B5] flex items-center justify-center w-10 h-5 rounded ml-[13px]'>
                                    <p className='text-[13px] py-3'>5</p>
                                    <ImStarFull className=' text-[12px] text-[#0010B5] ml-[4px]' />
                                </div>
                            </div>
                            <div className='flex items-center text-[#ADACAD]'>
                                <SlLocationPin className='text-[16px]' />
                                <p className='pb-1 text-[16px] pl-[7px]'>Madinat Jumeirah, Al Sufouh Rd, Dubai
                                </p>
                            </div>
                            <div className='flex pb-1'>
                                {
                                    facilities.map((facility) => (
                                        <div key={facility._id} className='flex items-center text-[#4F514F]'>
                                            <facility.icon />
                                            <p className='ml-[5px] mr-4 text-[#4F514F]'>{facility.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className=''>
                                    {
                                        features.map((feature) => (
                                            <div key={feature._id} className='flex items-center'>
                                                <feature.icon className='text-[#0010B5]' />
                                                <p className='ml-[5px] mr-4 text-[#4F514F]'>{feature.title}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='text-[#ADACAD] pt-6'>
                                    <p>Start from</p>
                                </div>
                            </div>
                            <div>
                                <h3 style={{ textAlign: 'end' }} className='text-[#191C19] font-bold text-[32px]'>$400</h3>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <div className='bg-[#0010B5] flex items-center justify-center w-[28px] h-[22px] rounded'>
                                        <p className='text-[13px] text-white'>9.4</p>
                                    </div>
                                    <p className='ml-1 text-[#4F514F]'>Exceptional <span className='text-[#ADACAD]'>(983 reviews)</span></p>
                                </div>
                                <p className='text-[#ADACAD]'>includes taxes & fees</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex block w-full rounded-[18px] border-[#F8F8F8] border-2 mb-[11px]'>
                        <div className=' w-[312px] h-[246px]'>
                            <Carousell />
                        </div>
                        <div className='mx-[19px] flex-grow py-2'>
                            <small className='text-[#FF0C08] italic text-[13px]'>Only 1 room left at this price on our site</small>
                            <div className='flex items-center w-full'>
                                <div>
                                    <p className='text-[#4F514F] text-[21px] font-medium tracking-[.8px]'>Jumeirah Mina A Salam</p>
                                </div>
                                <div className='border border-[#0010B5] flex items-center justify-center w-10 h-5 rounded ml-[13px]'>
                                    <p className='text-[13px] py-3'>5</p>
                                    <ImStarFull className=' text-[12px] text-[#0010B5] ml-[4px]' />
                                </div>
                            </div>
                            <div className='flex items-center text-[#ADACAD]'>
                                <SlLocationPin className='text-[16px]' />
                                <p className='pb-1 text-[16px] pl-[7px]'>Madinat Jumeirah, Al Sufouh Rd, Dubai
                                </p>
                            </div>
                            <div className='flex pb-1'>
                                {
                                    facilities.map((facility) => (
                                        <div key={facility._id} className='flex items-center text-[#4F514F]'>
                                            <facility.icon />
                                            <p className='ml-[5px] mr-4 text-[#4F514F]'>{facility.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className=''>
                                    {
                                        features.map((feature) => (
                                            <div key={feature._id} className='flex items-center'>
                                                <feature.icon className='text-[#0010B5]' />
                                                <p className='ml-[5px] mr-4 text-[#4F514F]'>{feature.title}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='text-[#ADACAD] pt-6'>
                                    <p>Start from</p>
                                </div>
                            </div>
                            <div>
                                <h3 style={{ textAlign: 'end' }} className='text-[#191C19] font-bold text-[32px]'>$400</h3>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <div className='bg-[#0010B5] flex items-center justify-center w-[28px] h-[22px] rounded'>
                                        <p className='text-[13px] text-white'>9.4</p>
                                    </div>
                                    <p className='ml-1 text-[#4F514F]'>Exceptional <span className='text-[#ADACAD]'>(983 reviews)</span></p>
                                </div>
                                <p className='text-[#ADACAD]'>includes taxes & fees</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex block w-full rounded-[18px] border-[#F8F8F8] border-2 mb-[11px]'>
                        <div className=' w-[312px] h-[246px]'>
                            <Carousell />
                        </div>
                        <div className='mx-[19px] flex-grow py-2'>
                            <small className='text-[#FF0C08] italic text-[13px]'>Only 1 room left at this price on our site</small>
                            <div className='flex items-center w-full'>
                                <div>
                                    <p className='text-[#4F514F] text-[21px] font-medium tracking-[.8px]'>Jumeirah Mina A Salam</p>
                                </div>
                                <div className='border border-[#0010B5] flex items-center justify-center w-10 h-5 rounded ml-[13px]'>
                                    <p className='text-[13px] py-3'>5</p>
                                    <ImStarFull className=' text-[12px] text-[#0010B5] ml-[4px]' />
                                </div>
                            </div>
                            <div className='flex items-center text-[#ADACAD]'>
                                <SlLocationPin className='text-[16px]' />
                                <p className='pb-1 text-[16px] pl-[7px]'>Madinat Jumeirah, Al Sufouh Rd, Dubai
                                </p>
                            </div>
                            <div className='flex pb-1'>
                                {
                                    facilities.map((facility) => (
                                        <div key={facility._id} className='flex items-center text-[#4F514F]'>
                                            <facility.icon />
                                            <p className='ml-[5px] mr-4 text-[#4F514F]'>{facility.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className=''>
                                    {
                                        features.map((feature) => (
                                            <div key={feature._id} className='flex items-center'>
                                                <feature.icon className='text-[#0010B5]' />
                                                <p className='ml-[5px] mr-4 text-[#4F514F]'>{feature.title}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='text-[#ADACAD] pt-6'>
                                    <p>Start from</p>
                                </div>
                            </div>
                            <div>
                                <h3 style={{ textAlign: 'end' }} className='text-[#191C19] font-bold text-[32px]'>$400</h3>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <div className='bg-[#0010B5] flex items-center justify-center w-[28px] h-[22px] rounded'>
                                        <p className='text-[13px] text-white'>9.4</p>
                                    </div>
                                    <p className='ml-1 text-[#4F514F]'>Exceptional <span className='text-[#ADACAD]'>(983 reviews)</span></p>
                                </div>
                                <p className='text-[#ADACAD]'>includes taxes & fees</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex block w-full rounded-[18px] border-[#F8F8F8] border-2 mb-[11px]'>
                        <div className=' w-[312px] h-[246px]'>
                            <Carousell />
                        </div>
                        <div className='mx-[19px] flex-grow py-2'>
                            <small className='text-[#FF0C08] italic text-[13px]'>Only 1 room left at this price on our site</small>
                            <div className='flex items-center w-full'>
                                <div>
                                    <p className='text-[#4F514F] text-[21px] font-medium tracking-[.8px]'>Jumeirah Mina A Salam</p>
                                </div>
                                <div className='border border-[#0010B5] flex items-center justify-center w-10 h-5 rounded ml-[13px]'>
                                    <p className='text-[13px] py-3'>5</p>
                                    <ImStarFull className=' text-[12px] text-[#0010B5] ml-[4px]' />
                                </div>
                            </div>
                            <div className='flex items-center text-[#ADACAD]'>
                                <SlLocationPin className='text-[16px]' />
                                <p className='pb-1 text-[16px] pl-[7px]'>Madinat Jumeirah, Al Sufouh Rd, Dubai
                                </p>
                            </div>
                            <div className='flex pb-1'>
                                {
                                    facilities.map((facility) => (
                                        <div key={facility._id} className='flex items-center text-[#4F514F]'>
                                            <facility.icon />
                                            <p className='ml-[5px] mr-4 text-[#4F514F]'>{facility.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className=''>
                                    {
                                        features.map((feature) => (
                                            <div key={feature._id} className='flex items-center'>
                                                <feature.icon className='text-[#0010B5]' />
                                                <p className='ml-[5px] mr-4 text-[#4F514F]'>{feature.title}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='text-[#ADACAD] pt-6'>
                                    <p>Start from</p>
                                </div>
                            </div>
                            <div>
                                <h3 style={{ textAlign: 'end' }} className='text-[#191C19] font-bold text-[32px]'>$400</h3>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <div className='bg-[#0010B5] flex items-center justify-center w-[28px] h-[22px] rounded'>
                                        <p className='text-[13px] text-white'>9.4</p>
                                    </div>
                                    <p className='ml-1 text-[#4F514F]'>Exceptional <span className='text-[#ADACAD]'>(983 reviews)</span></p>
                                </div>
                                <p className='text-[#ADACAD]'>includes taxes & fees</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex block w-full rounded-[18px] border-[#F8F8F8] border-2 mb-[11px]'>
                        <div className=' w-[312px] h-[246px]'>
                            <Carousell />
                        </div>
                        <div className='mx-[19px] flex-grow py-2'>
                            <small className='text-[#FF0C08] italic text-[13px]'>Only 1 room left at this price on our site</small>
                            <div className='flex items-center w-full'>
                                <div>
                                    <p className='text-[#4F514F] text-[21px] font-medium tracking-[.8px]'>Jumeirah Mina A Salam</p>
                                </div>
                                <div className='border border-[#0010B5] flex items-center justify-center w-10 h-5 rounded ml-[13px]'>
                                    <p className='text-[13px] py-3'>5</p>
                                    <ImStarFull className=' text-[12px] text-[#0010B5] ml-[4px]' />
                                </div>
                            </div>
                            <div className='flex items-center text-[#ADACAD]'>
                                <SlLocationPin className='text-[16px]' />
                                <p className='pb-1 text-[16px] pl-[7px]'>Madinat Jumeirah, Al Sufouh Rd, Dubai
                                </p>
                            </div>
                            <div className='flex pb-1'>
                                {
                                    facilities.map((facility) => (
                                        <div key={facility._id} className='flex items-center text-[#4F514F]'>
                                            <facility.icon />
                                            <p className='ml-[5px] mr-4 text-[#4F514F]'>{facility.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className=''>
                                    {
                                        features.map((feature) => (
                                            <div key={feature._id} className='flex items-center'>
                                                <feature.icon className='text-[#0010B5]' />
                                                <p className='ml-[5px] mr-4 text-[#4F514F]'>{feature.title}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='text-[#ADACAD] pt-6'>
                                    <p>Start from</p>
                                </div>
                            </div>
                            <div>
                                <h3 style={{ textAlign: 'end' }} className='text-[#191C19] font-bold text-[32px]'>$400</h3>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <div className='bg-[#0010B5] flex items-center justify-center w-[28px] h-[22px] rounded'>
                                        <p className='text-[13px] text-white'>9.4</p>
                                    </div>
                                    <p className='ml-1 text-[#4F514F]'>Exceptional <span className='text-[#ADACAD]'>(983 reviews)</span></p>
                                </div>
                                <p className='text-[#ADACAD]'>includes taxes & fees</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex block w-full rounded-[18px] border-[#F8F8F8] border-2 mb-[11px]'>
                        <div className=' w-[312px] h-[246px]'>
                            <Carousell />
                        </div>
                        <div className='mx-[19px] flex-grow py-2'>
                            <small className='text-[#FF0C08] italic text-[13px]'>Only 1 room left at this price on our site</small>
                            <div className='flex items-center w-full'>
                                <div>
                                    <p className='text-[#4F514F] text-[21px] font-medium tracking-[.8px]'>Jumeirah Mina A Salam</p>
                                </div>
                                <div className='border border-[#0010B5] flex items-center justify-center w-10 h-5 rounded ml-[13px]'>
                                    <p className='text-[13px] py-3'>5</p>
                                    <ImStarFull className=' text-[12px] text-[#0010B5] ml-[4px]' />
                                </div>
                            </div>
                            <div className='flex items-center text-[#ADACAD]'>
                                <SlLocationPin className='text-[16px]' />
                                <p className='pb-1 text-[16px] pl-[7px]'>Madinat Jumeirah, Al Sufouh Rd, Dubai
                                </p>
                            </div>
                            <div className='flex pb-1'>
                                {
                                    facilities.map((facility) => (
                                        <div key={facility._id} className='flex items-center text-[#4F514F]'>
                                            <facility.icon />
                                            <p className='ml-[5px] mr-4 text-[#4F514F]'>{facility.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className=''>
                                    {
                                        features.map((feature) => (
                                            <div key={feature._id} className='flex items-center'>
                                                <feature.icon className='text-[#0010B5]' />
                                                <p className='ml-[5px] mr-4 text-[#4F514F]'>{feature.title}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='text-[#ADACAD] pt-6'>
                                    <p>Start from</p>
                                </div>
                            </div>
                            <div>
                                <h3 style={{ textAlign: 'end' }} className='text-[#191C19] font-bold text-[32px]'>$400</h3>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <div className='bg-[#0010B5] flex items-center justify-center w-[28px] h-[22px] rounded'>
                                        <p className='text-[13px] text-white'>9.4</p>
                                    </div>
                                    <p className='ml-1 text-[#4F514F]'>Exceptional <span className='text-[#ADACAD]'>(983 reviews)</span></p>
                                </div>
                                <p className='text-[#ADACAD]'>includes taxes & fees</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex block w-full rounded-[18px] border-[#F8F8F8] border-2 mb-[11px]'>
                        <div className=' w-[312px] h-[246px]'>
                            <Carousell />
                        </div>
                        <div className='mx-[19px] flex-grow py-2'>
                            <small className='text-[#FF0C08] italic text-[13px]'>Only 1 room left at this price on our site</small>
                            <div className='flex items-center w-full'>
                                <div>
                                    <p className='text-[#4F514F] text-[21px] font-medium tracking-[.8px]'>Jumeirah Mina A Salam</p>
                                </div>
                                <div className='border border-[#0010B5] flex items-center justify-center w-10 h-5 rounded ml-[13px]'>
                                    <p className='text-[13px] py-3'>5</p>
                                    <ImStarFull className=' text-[12px] text-[#0010B5] ml-[4px]' />
                                </div>
                            </div>
                            <div className='flex items-center text-[#ADACAD]'>
                                <SlLocationPin className='text-[16px]' />
                                <p className='pb-1 text-[16px] pl-[7px]'>Madinat Jumeirah, Al Sufouh Rd, Dubai
                                </p>
                            </div>
                            <div className='flex pb-1'>
                                {
                                    facilities.map((facility) => (
                                        <div key={facility._id} className='flex items-center text-[#4F514F]'>
                                            <facility.icon />
                                            <p className='ml-[5px] mr-4 text-[#4F514F]'>{facility.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className=''>
                                    {
                                        features.map((feature) => (
                                            <div key={feature._id} className='flex items-center'>
                                                <feature.icon className='text-[#0010B5]' />
                                                <p className='ml-[5px] mr-4 text-[#4F514F]'>{feature.title}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='text-[#ADACAD] pt-6'>
                                    <p>Start from</p>
                                </div>
                            </div>
                            <div>
                                <h3 style={{ textAlign: 'end' }} className='text-[#191C19] font-bold text-[32px]'>$400</h3>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <div className='bg-[#0010B5] flex items-center justify-center w-[28px] h-[22px] rounded'>
                                        <p className='text-[13px] text-white'>9.4</p>
                                    </div>
                                    <p className='ml-1 text-[#4F514F]'>Exceptional <span className='text-[#ADACAD]'>(983 reviews)</span></p>
                                </div>
                                <p className='text-[#ADACAD]'>includes taxes & fees</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex block w-full rounded-[18px] border-[#F8F8F8] border-2 mb-[11px]'>
                        <div className=' w-[312px] h-[246px]'>
                            <Carousell />
                        </div>
                        <div className='mx-[19px] flex-grow py-2'>
                            <small className='text-[#FF0C08] italic text-[13px]'>Only 1 room left at this price on our site</small>
                            <div className='flex items-center w-full'>
                                <div>
                                    <p className='text-[#4F514F] text-[21px] font-medium tracking-[.8px]'>Jumeirah Mina A Salam</p>
                                </div>
                                <div className='border border-[#0010B5] flex items-center justify-center w-10 h-5 rounded ml-[13px]'>
                                    <p className='text-[13px] py-3'>5</p>
                                    <ImStarFull className=' text-[12px] text-[#0010B5] ml-[4px]' />
                                </div>
                            </div>
                            <div className='flex items-center text-[#ADACAD]'>
                                <SlLocationPin className='text-[16px]' />
                                <p className='pb-1 text-[16px] pl-[7px]'>Madinat Jumeirah, Al Sufouh Rd, Dubai
                                </p>
                            </div>
                            <div className='flex pb-1'>
                                {
                                    facilities.map((facility) => (
                                        <div key={facility._id} className='flex items-center text-[#4F514F]'>
                                            <facility.icon />
                                            <p className='ml-[5px] mr-4 text-[#4F514F]'>{facility.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className=''>
                                    {
                                        features.map((feature) => (
                                            <div key={feature._id} className='flex items-center'>
                                                <feature.icon className='text-[#0010B5]' />
                                                <p className='ml-[5px] mr-4 text-[#4F514F]'>{feature.title}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='text-[#ADACAD] pt-6'>
                                    <p>Start from</p>
                                </div>
                            </div>
                            <div>
                                <h3 style={{ textAlign: 'end' }} className='text-[#191C19] font-bold text-[32px]'>$400</h3>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <div className='bg-[#0010B5] flex items-center justify-center w-[28px] h-[22px] rounded'>
                                        <p className='text-[13px] text-white'>9.4</p>
                                    </div>
                                    <p className='ml-1 text-[#4F514F]'>Exceptional <span className='text-[#ADACAD]'>(983 reviews)</span></p>
                                </div>
                                <p className='text-[#ADACAD]'>includes taxes & fees</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HotelList;