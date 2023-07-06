import React from 'react'
import Info from './Info';
import HotelList from './HotelList';

const Home = () => {
    return (
        <main className='bg-white lg:px-7 px-0'>
            <Info />
            <HotelList />
        </main>
    )
}

export default Home;