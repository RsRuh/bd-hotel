import React from 'react';
import '../styles/Apartment.css'
import { FaStar } from 'react-icons/fa';

const Apartment = ({ hotel }) => {
    const { night, total, people, title, picture, rating, address, about } = hotel;
    return (
        <div className="max-w-xs PerCard cursor-pointer rounded-md shadow-md bg-gray-900 text-gray-100">
            <img src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                    <p className="text-gray-100">{about}</p>
                </div>
                <div className='flex gap-3 text-sm'>
                    <div className='flex align-baseline'>
                    <FaStar className='text-yellow-400'></FaStar>
                        <p>{rating.toFixed(1)}</p>
                    </div>
                    <div>
                        <p>${night}/night</p>
                    </div>
                    <div>
                        <p>${total}total</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apartment;