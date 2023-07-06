import React from 'react';
import { infoData } from './InfoData';
import { CiSearch } from "react-icons/ci";

const Info = () => {
    return (
        <section className='max-w-7xl mx-auto my-10 rounded-[18px] border-2 border-[#F8F8F8]'>
            <div className='flex justify-between mx-6 py-7'>
                <div className="info-container gap-3 w-full ">
                    {
                        infoData.map((data) => (
                            <div className='py-4 lg:px-14 px-4 rounded-xl border-[#F8F8F8] border-2'>
                                <p className=' text-[20px] font-medium text-[#2C2827]'>{data.name}</p>
                                <p className='text-[15px] text-[#B0AAA9]'>{data.des}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='ml-3'>
                    <button className="btn bg-[#0010B5] outline-none border-none hover:bg-[#F8AF41] hover:text-black normal-case font-normal text-white h-[80px] w-[80px]"><CiSearch className='text-4xl' /></button>
                </div>
            </div>
        </section>
    );
};

export default Info;