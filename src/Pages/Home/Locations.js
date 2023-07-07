import React from 'react';
import { locationData } from './LocationData';
import Location from './Location';

const Locations = ({ setUserLocation }) => {

    return (
        <>
            {locationData.map((data) => (
                <Location key={data._id}  {...data} setUserLocation={setUserLocation} />)
            )}
        </>
    )
}

export default Locations