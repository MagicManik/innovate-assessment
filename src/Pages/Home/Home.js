import React from 'react';
import HotelList from './HotelList';
import Info from './Info';

const Home = () => {
    return (
        <main className='bg-white lg:px-7 px-0'>
            <Info />
            <HotelList />
        </main>
    )
}

export default Home;