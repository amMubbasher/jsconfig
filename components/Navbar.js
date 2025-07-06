// import Image from 'next/image'
// import React from 'react'
// import logo from '../app/assests/logo.jpeg'
// import { CiSearch } from "react-icons/ci";
// import { IoMdSearch } from "react-icons/io";
// // import logo2 from '../app/assests/downloadw2.png'
// function Navbar() {
//     return (
//         <div className='w-screen border-t-5 border-b border-b-zinc-300  border-t-yellow-300 flex justify-between p-2'>
//             <div>
//                 <Image src={logo} className='bg-white' />
//             </div>
//             <div className="w-full hidden md:flex max-w-xl rounded-lg border border-zinc-300 items-center h-8 px-2 focus-within:border-yellow-400 focus-within:border-2 transition">
//                 <IoMdSearch size={20} className="text-zinc-500 mr-2" />
//                 <input
//                     type="text"
//                     placeholder="Search..."
//                     className="flex-1 outline-none border-none bg-transparent placeholder-zinc-400"
//                 />
//             </div>
//             <div className='flex justify-evenly items-center w-full md:max-w-[150px] max-w-[300px]'>
//                 <IoMdSearch size={22} className='md:hidden' />

//                 <button className=' border border-gray-200 px-2 py-1 md:hidden rounded-lg'><span className='bg-green-300'></span> Live expert help</button>
//                 <button className=' border hidden md:block border-gray-200 px-2 py-1 rounded-lg'><span className='bg-green-300'></span>Help</button>
//                 <button className='bg-yellow-300 p-2 px-4 rounded-full'>
//                     <Image></Image>
//                     S
//                 </button>

//             </div>

//         </div>
//     )
// }

// export default Navbar























"use client";

import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import logo from '../app/assests/logo.jpeg';
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";

function Navbar() {
    const [searchActive, setSearchActive] = useState(false);
    const [bannerVisible, setBannerVisible] = useState(true);
    const searchRef = useRef(null);
    const inputRef = useRef(null);

    // Close search when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchActive(false);
            }
        }

        if (searchActive) {
            document.addEventListener("mousedown", handleClickOutside);
            if (inputRef.current) inputRef.current.focus();
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "";
        };
    }, [searchActive]);

    const toggleHelpSidebar = () => {
        // Event to be handled by layout.js
        const event = new CustomEvent("toggleHelpSidebar", {
            detail: { isOpen: true }
        });
        document.dispatchEvent(event);
    };

    return (
        <>
            {/* Security banner */}
            {bannerVisible && (
                <div className="w-full bg-[#241c15] text-white py-2 px-4 flex items-center justify-between text-sm">
                    <div className="flex items-center">
                        <FaInfoCircle className="mr-2 text-white" />
                        <span>Reminder: Intuit Mailchimp will never call, email, or text you for your password or 1-time passcode.</span>
                    </div>
                    <div className="flex items-center">
                        <button className="text-white hover:underline text-sm mr-4">Learn more about security</button>
                        <button className="text-white" onClick={() => setBannerVisible(false)}>✕</button>
                    </div>
                </div>
            )}

            {/* Main Navbar - Keeping your original structure */}
            <div className='w-screen border-t-5 border-b border-b-zinc-300 border-t-yellow-300 flex justify-between p-2'>
                {/* Logo - Unchanged */}
                <div>
                    <img src='https://t4.ftcdn.net/jpg/01/37/41/35/240_F_137413503_3WZxS8CPSUFnjXw7hPDtdv2PcBuoYITR.jpg' className='bg-white' alt="Mailchimp Logo" width={50} height={16} />
                </div>

                {/* Search Bar - Modified to trigger overlay */}
                <div
                    className="w-full hidden md:flex max-w-xl rounded-lg border border-zinc-300 items-center h-8 mt-1 px-2 focus-within:border-yellow-400 focus-within:border-2 ml-4 transition cursor-pointer"
                    onClick={() => setSearchActive(true)}
                >
                    <IoMdSearch size={20} className="text-zinc-500 mr-2" />
                    <div className="text-[#757575] text-sm flex-1">Search...</div>
                </div>

                {/* Right buttons - Kept original structure */}
                <div className='flex justify-evenly items-center w-full md:max-w-[250px] max-w-[300px]'>
                    <button
                        className='md:hidden'
                        onClick={() => setSearchActive(true)}
                    >
                        <IoMdSearch size={22} className='text-gray-500' />
                    </button>

                    <button className='border border-gray-200 px-2 py-1 md:hidden rounded-lg'>
                        <span className='inline-block w-2 h-2 bg-green-300 rounded-full mr-1'></span>
                        Live expert help
                    </button>

                    <button
                        className='border hidden md:block border-gray-200 px-2 py-1 rounded-lg'
                        onClick={toggleHelpSidebar}
                    >
                        <span className='bg-green-300 rounded-full mr-1'></span>
                        Live expert help
                    </button>

                    <button className='bg-yellow-300 h-10 w-10 flex items-center justify-center rounded-full text-sm font-medium'>
                        S
                    </button>
                </div>
            </div>

            {/* Search Overlay */}
            {searchActive && (
                <>
                    <div
                        className="fixed inset-0 z-20 bg-black opacity-50"
                        onClick={() => setSearchActive(false)}
                    />

                    <div
                        ref={searchRef}
                        className="fixed top-[5%] left-1/2 transform -translate-x-1/2 w-[900px] max-w-[95vw] z-30 bg-white rounded-lg shadow-lg border border-gray-200"
                    >
                        {/* Search bar */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-100">
                            <div className="flex-grow mr-3">
                                <div className="relative">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md h-10 px-3 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                                        placeholder="What can we help you find today?"
                                    />
                                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                                        <button className="bg-teal-600 text-white rounded-md h-10 w-10  p-1.5">
                                            <IoMdSearch size={25} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="text-gray-500"
                                onClick={() => setSearchActive(false)}
                            >
                                <IoClose size={24} />
                            </button>
                        </div>

                        {/* Filter section */}
                        <div className="px-4 py-3">
                            <p className="text-gray-600 text-sm font-normal mb-2">Filter by</p>
                            <div className="flex flex-wrap gap-2">
                                <button className="px-4 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
                                    Contacts
                                </button>
                                <button className="px-4 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
                                    Campaigns
                                </button>
                                <button className="px-4 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
                                    Pages
                                </button>
                                <button className="px-4 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
                                    Quick actions
                                </button>
                                <button className="px-4 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
                                    Integrations
                                </button>
                                <button className="px-4 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
                                    Help articles
                                </button>
                            </div>
                        </div>

                        {/* Results section */}
                        <div className="px-4 py-3">
                            <p className="text-gray-600 text-sm font-medium mb-3">Recent campaigns</p>

                            <div className="flex items-center py-3 px-1 hover:bg-gray-50 rounded cursor-pointer">
                                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded flex items-center justify-center mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="flex items-center">
                                        <h3 className="font-medium text-teal-600 mr-2">Health Insurance</h3>
                                        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Draft</span>
                                    </div>
                                    <p className="text-xs text-gray-500">Regular email • Last edited Sat June 28, 2025</p>
                                </div>
                            </div>
                        </div>

                        {/* Feedback section */}
                        <div className="flex justify-end items-center px-4 py-3 border-t border-gray-100">
                            <span className="text-sm text-gray-600 mr-2">Not the results you expected?</span>
                            <button className="text-teal-600 hover:underline text-sm font-medium mr-3">Leave feedback</button>
                            <button className="text-gray-500 mr-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904" />
                                </svg>
                            </button>
                            <button className="text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </>
            )}

        </>
    );
}

export default Navbar;
