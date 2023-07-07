import React from 'react';
import Carousell from './Carousell';
import EarthMap from './EarthMap';
import FilterOptions from './FilterOptions';
import { hotelData } from './HotelData';
import HotelDetails from './HotelDetails';
import Offer from './Offer';

const HotelList = () => {

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
                   <Offer/>
                    { hotelData.map((hotel)=> (
                    <div key={hotel._id}>
                        <div className='lg:flex block w-full rounded-[18px] border-[#F8F8F8] border-2 mb-[11px] overflow-hidden'>
                            <Carousell img1={hotel.img1} img2={hotel.img2} img3={hotel.img3}/>
                            <HotelDetails {...hotel}/>
                        </div>
                </div>))}
                </div>
            </div>
        </div>
    )
};

export default HotelList;