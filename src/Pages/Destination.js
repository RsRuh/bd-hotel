import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Apartment from './Apartment';

const Destination = () => {
    const hotels = useLoaderData();
    
    return (
        <div>
            <div className='grid grid-cols-4 justify-items-center gap-10 mt-10'>
            {
                hotels.map(hotel=><Apartment key={hotel.id} hotel={hotel}></Apartment>)
            }
            </div>
        </div>
    );
};

export default Destination;