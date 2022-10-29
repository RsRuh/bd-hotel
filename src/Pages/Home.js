import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import '../styles/Home.css'
import Category from './Category';

const Home = () => {
    const data = useLoaderData();

    const [name ,setName]=useState([]);

    const handleDetails = (e) => {
        const found = data.find(item=> item.id === e);
        setName(found);
    }

    return (
        <div className='home'>
            <div className=' grid grid-cols-3 gap-2 pt-[166px]'>
            <div className='align-middle ml-20 mr-10 mt-10 aboutBox'>
                <h1 className='text-[97.6842px] text-white '>{name?.name ? name.name : 'CoxBazar'}</h1>
                <p className='text-white text-xl'>{name?.about ? name.about : 'Coxs Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...'}</p>

            </div>

            <div className="relative flex items-center justify-center w-full text-gray-50 col-span-2">
            <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
                {
                    data.map(item=><Category key={item.id} item={item} handleDetails={handleDetails}></Category>)
                }
            </div>
            
        </div>


            
        </div>
        </div>
    );
};

export default Home;