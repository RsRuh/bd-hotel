import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(result=>{

        })
        .catch(error=>console.error(error))
    }

    return (
        <header className="p-4 bg-gray-800 text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
                <Link to="/" aria-label="Back to homepage" className="flex items-center p-2">
                    {
                        user?.photoURL?
                        <img style={{height: '50px', width: '50px'}} className="rounded-full" src={user.photoURL} alt="" />
                        :
                        <img style={{height: '50px', width: '50px'}} src="https://cdn-icons-png.flaticon.com/512/1239/1239318.png?w=826&t=st=1666482010~exp=1666482610~hmac=4dd748326935d612a6e0846227ac5676a90f5393fd39fc78c7797db9f11e3ca3"  alt="" />
                    }
                    {
                        user?.displayName?
                        <h1 className='ml-2 text-xl font-semibold'>{user.displayName}</h1>
                        :
                        ''
                    }
                </Link>

                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent">News</Link>
                    </li>
                    <li className="flex">
                        <Link to='/'
                          className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Destination</Link>
                    </li>
                    <li className="flex">
                        <Link to='/'  className="flex items-center px-4 -mb-1 border-b-2 border-transparent ">Blog</Link>
                    </li>
                    <li className="flex">
                        <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Contact</Link>
                    </li>

                    {user?.email ? (
                    <>
                        <li className="flex">
                            <button onClick={handleLogOut} className="flex items-center px-4 -mb-1 border-b-2 border-transparent">LogOut</button>
                        </li>
                        </>

                    ) : (
                    
                    <>
                    <li className="flex">
                        <Link to='/login' className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Login</Link>
                    </li>
                    <li className="flex">
                        <Link to='/register'  className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Register</Link>
                    </li>
                    </>
                    
                    )}

                </ul>
                <button className="flex justify-end p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;