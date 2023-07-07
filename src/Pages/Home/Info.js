import React from 'react';
import CalenderBtn from './CalenderBtn';
import SearchIndex from './SearchIndex';
import LocationBtn from './LocationBtn';
import SearchBtn from './SearchBtn';

const Info = () => {
    return (
        <section className='max-w-7xl mx-auto my-10 rounded-[18px] border-2 border-[#F8F8F8]'>
            <div className='flex justify-between lg:mx-6 mx-3 py-7'>
                <div className="info-container gap-3 w-full ">
                    <LocationBtn />
                    <CalenderBtn />
                    <SearchIndex />
                    <SearchBtn />
                </div>
            </div>
        </section>
    );
};

export default Info;