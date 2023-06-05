import React, { useState } from 'react';
import { BsChevronDown, BsSuitHeart } from 'react-icons/bs';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { FaRegUserCircle } from 'react-icons/fa';
import logo from '../images/Deals.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropOpen, setIsDropOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleDrop = () => {
        setIsDropOpen(!isDropOpen);
    };

    return (
        <nav className="py-3">
            <div className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <img className="" src={logo} alt="" />
                </div>
                <div className="flex items-center justify-between h-16 ">
                    <div className="flex items-center ">
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 "
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isMenuOpen ? (
                                    <svg
                                        className="block h-6 w-6 "
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center justify-between ml-4 flex-grow">
                        <div className="flex gap-2">
                            <button className="flex gap-2 bg-slate-200 text-black rounded px-5 py-2 relative" onClick={handleDrop}>
                                Choose Category <BsChevronDown />
                            </button>
                            {isDropOpen && (
                                <div className="bg-slate-200 rounded top-14 px-5 py-2 w-44 absolute">
                                    <p>Hello</p>
                                    <p>Hai</p>
                                </div>
                            )}
                            <form action="">
                                <div className="flex">
                                    <input
                                        type="search"
                                        className="block p-2.5 z-20 text-sm text-black bg-slate-200 rounded-l-md border-0 outline-none w-80"
                                        placeholder="Search here..."
                                        required
                                    />
                                    <button className="bg-slate-200 rounded-r-md px-2 text-orange-500 text-2xl">
                                        <FiSearch />
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="flex gap-6 items-center mx-4  justify-between">
                            <p className="text-xl">
                                <BsSuitHeart />
                            </p>
                            <p className="text-xl">
                                <FiShoppingCart />
                            </p>
                            <p className="text-xl">
                                <FaRegUserCircle />
                            </p>
                        </div>
                        <div>
                            <button className="px-3 py-2 bg-orange-600 rounded text-white font-semibold">Login</button>
                        </div>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                
                <div className="md:hidden " id="mobile-menu">
                    <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="#"
                            className="flex items-center gap-2 text-gray-500 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-base font-medium"
                        >
                            <BsSuitHeart /> Likes
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-2 text-gray-500 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-base font-medium"
                        >
                            <FiShoppingCart /> Cart
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-2 text-gray-500 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-base font-medium"
                        >
                            <FaRegUserCircle /> Account
                        </a>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
