import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Category.css'
const Category = ({item, handleDetails}) => {
    const { picture, name, id } = item;

    return (
        
                <Link onMouseEnter={()=>handleDetails(id)} to={`/booking-form/${id}`} className="relative perCard flex flex-shrink-0 w-full sm:w-auto cursor-pointer">
                    <img className="object-cover relative object-center h-96 w-56" src={picture} />
                    <p className='absolute bottom-10 left-5 text-xl font-semibold cardName'>{name}</p>
                </Link>
    )
};

export default Category;