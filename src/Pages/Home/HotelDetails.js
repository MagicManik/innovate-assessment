import React from 'react';
import { GiCheckMark } from "react-icons/gi";
import { ImStarFull } from "react-icons/im";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlinePool } from "react-icons/md";
import { PiBathtubDuotone } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";

const HotelDetails = ({
    slogan,
    title,
    star,
    location,
    facility1,
    facility2,
    facility3,
    feature1,
    feature2,}) => {
        
  return (
    <div className='lg:mx-[19px] mx-4 flex-grow py-2'>
        <small className='text-[#FF0C08] italic text-[13px]'>{slogan}</small>
        <div className='flex items-center w-full'>
            <div>
                <p className='text-[#4F514F] text-[21px] font-medium tracking-[.8px]'>{title}</p>
            </div>
            <div className='border border-[#0010B5] flex items-center justify-center w-10 h-5 rounded ml-[13px]'>
                <p className='text-[13px] py-3'>{star}</p>
                <ImStarFull className=' text-[12px] text-[#0010B5] ml-[4px]' />
            </div>
        </div>
        <div className='flex items-center text-[#ADACAD]'>
            <SlLocationPin className='text-[16px]' />
            <p className='pb-1 text-[16px] pl-[7px]'>{location}</p>
        </div>
        <div className='flex pb-1'>                            
            <div className='flex items-center text-[#4F514F]'>
                <MdOutlinePool />
                <p className='ml-[5px] lg:mr-4 mr-2 text-[#4F514F]'>{facility1}</p>
            </div>
        <div className='flex items-center text-[#4F514F]'>
            <PiBathtubDuotone />
            <p className='ml-[5px] lg:mr-4 mr-2 text-[#4F514F]'>{facility2}</p>
        </div>
        <div className='flex items-center text-[#4F514F]'>
            <IoBedOutline />
            <p className='ml-[5px] lg:mr-4 mr-2 text-[#4F514F]'>{facility3}</p>
        </div>
    </div>
    <div className='flex items-center justify-between'>
        <div className=''>
            <div className='flex items-center'>
                <GiCheckMark className='text-[#0010B5]' />
                <p className='ml-[5px] lg:mr-4 mr-2 text-[#4F514F]'>{feature1}</p>
            </div>
            <div className='flex items-center'>
                <GiCheckMark className='text-[#0010B5]' />
                <p className='ml-[5px] lg:mr-4 mr-2 text-[#4F514F]'>{feature2}</p>
            </div>                             
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
)}

export default HotelDetails;