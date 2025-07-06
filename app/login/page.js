"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MailchimpLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="min-h-screen flex">
            {/* Left yellow sidebar */}
            <div className="w-2 bg-[#FFE01B] h-screen fixed left-0 top-0 bottom-0"></div>

            {/* Main content */}
            <div className="flex-1 pl-14 flex items-center justify-center">
                {/* Top logo */}
                <div className="absolute top-6 left-20">
                    <svg width="36" height="36" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.2952 13.2377C27.9029 12.713 27.119 12.5261 26.5619 12.9184C26.0049 13.3107 25.818 14.0945 26.2103 14.6516L36.4772 29.1078C36.8695 29.6325 37.6533 29.8193 38.2104 29.427C38.7674 29.0347 38.9543 28.2509 38.562 27.6938L28.2952 13.2377Z" fill="#241C15" />
                        <path d="M30.6569 15.9998C30.6569 15.1715 29.9855 14.5 29.1569 14.5C28.3283 14.5 27.6569 15.1715 27.6569 15.9998V33.2998C27.6569 34.1281 28.3283 34.7996 29.1569 34.7996C29.9855 34.7996 30.6569 34.1281 30.6569 33.2998V15.9998Z" fill="#241C15" />
                        <path d="M23.1027 16.9559C22.5127 16.6191 21.7426 16.8669 21.4058 17.4568C21.069 18.0468 21.3168 18.8169 21.9068 19.1537L34.1565 26.2309C34.7465 26.5678 35.5166 26.3199 35.8534 25.73C36.1902 25.14 35.9424 24.3699 35.3524 24.0331L23.1027 16.9559Z" fill="#241C15" />
                        <path d="M38.0568 0.5C42.4748 0.5 46.0568 4.08205 46.0568 8.5V33.5C46.0568 37.918 42.4748 41.5 38.0568 41.5H18.0568C13.6388 41.5 10.0568 37.918 10.0568 33.5V8.5C10.0568 4.08205 13.6388 0.5 18.0568 0.5H38.0568ZM38.0568 4.5H18.0568C15.8478 4.5 14.0568 6.29086 14.0568 8.5V33.5C14.0568 35.7091 15.8478 37.5 18.0568 37.5H38.0568C40.2658 37.5 42.0568 35.7091 42.0568 33.5V8.5C42.0568 6.29086 40.2658 4.5 38.0568 4.5Z" fill="#241C15" />
                    </svg>
                </div>

                <div className="absolute top-6 right-8 flex items-center">
                    <div className="w-5 h-5 mr-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="#007C89" />
                        </svg>
                    </div>
                    <div className="text-[#007C89] font-medium flex items-center">
                        English
                        <svg className="ml-1" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="#007C89" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className="w-full max-w-[480px] py-8 px-4 border border-zinc-300 rounded-xl">
                    <div className="flex justify-center">
                        <img
                            src="https://cdn-images.mailchimp.com/billboards/phpza0iJx.png"
                            alt="Mailchimp"
                            className="h-10"
                        />
                    </div>

                    <h1 className="text-[32px] font-semibold text-center text-[#241C15]">
                        Log in to Mailchimp
                    </h1>

                    <div className="text-center mb-6">
                        <span className="text-[#241C15]">Need a Mailchimp account? </span>
                        <Link href="/create-account" className="text-[#007C89] hover:underline">
                            Create an account
                        </Link>
                    </div>

                    {/* Notification */}
                    <div className="bg-[#FBE3EE] border-l-4 border-[#E01E5A] p-4 mb-6 flex">
                        <svg className="flex-shrink-0 mt-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#E01E5A" fillOpacity="0.2" />
                            <path d="M8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z" fill="#E01E5A" />
                            <path d="M7 4V8H9V4H7Z" fill="#E01E5A" />
                        </svg>

                        <div className="ml-3 text-[14px] text-[#241C15]">
                            <p>
                                Mailchimp is making some changes to enhance your account security. It might look a little different over the next few weeks, but don't worry, your login won't change.
                            </p>
                        </div>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-[#241C15] font-semibold mb-2">
                                Username or Email
                            </label>
                            <input
                                id="email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-[#DBDEE1] rounded p-3 focus:outline-none focus:border-[#007C89] focus:ring-1 focus:ring-[#007C89]"
                            />
                        </div>

                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <label htmlFor="password" className="block text-[#241C15] font-semibold">
                                    Password
                                </label>
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="text-[#007C89] text-sm font-medium rounded-xl"
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border border-[#DBDEE1] rounded p-3 focus:outline-none focus:border-[#007C89] focus:ring-1 focus:ring-[#007C89]"
                            />
                        </div>

                        <div className="mb-6 flex items-center">
                            <input
                                id="rememberMe"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                                className="h-5 w-5 text-[#007C89] border-[#DBDEE1] rounded accent-[#007C89] focus:ring-[#007C89]"
                            />
                            <label htmlFor="rememberMe" className="ml-2 text-[#241C15]">
                                Keep me logged in
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#007C89] hover:bg-[#005D66] text-white rounded py-2 font-medium flex justify-center items-center"
                        >
                            <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 2C10.1 2 11.9 3.1 12.8 4.8C12.5 4.9 11.5 5.3 10.1 5.7C9.5 4.6 8.9 3.6 8.3 3C8.2 3 8.1 3 8 3C7.9 3 7.8 3 7.7 3C7.1 3.7 6.5 4.6 5.9 5.7C4.5 5.3 3.6 5 3.2 4.8C4.1 3.1 5.9 2 8 2ZM3 8C3 7.4 3.1 6.9 3.2 6.4C3.5 6.5 4.6 6.9 6.2 7.4C6.1 7.6 6 7.9 5.9 8.2C5.5 9.5 5.2 10.7 5 11.6C3.8 10.7 3 9.4 3 8ZM8 14C6.1 14 4.4 13.1 3.4 11.7C3.5 11 3.9 9.8 4.3 8.6C4.4 8.3 4.5 8 4.6 7.8C6.3 8.3 8.3 8.6 10.4 8.6C10.8 8.6 11.2 8.6 11.6 8.5C11.8 9.1 12 9.8 12.2 10.5C12.4 11.1 12.5 11.7 12.6 12.1C11.6 13.2 9.9 14 8 14ZM13.6 11.2C13.5 10.8 13.4 10.3 13.2 9.7C13 9.1 12.9 8.4 12.7 7.8C13.4 7.7 14.1 7.5 14.7 7.3C14.9 7.5 15 7.7 15 8C15 9.2 14.5 10.3 13.6 11.2ZM14.1 6.4C13.5 6.6 12.8 6.8 12 6.9C11.8 6.3 11.6 5.7 11.3 5.1C11.2 4.8 11 4.5 10.9 4.3C12.2 3.9 13.1 3.5 13.5 3.4C13.8 4.3 14 5.3 14 6.3C14 6.3 14.1 6.4 14.1 6.4Z" fill="white" />
                            </svg>
                            Log In
                        </button>
                    </form>

                    <div className="flex justify-between mt-2">
                        <Link href="/forgot-username" className="text-[#007C89] hover:underline">
                            Forgot username?
                        </Link>
                        <Link href="/forgot-password" className="text-[#007C89] hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#E6E6E6]">
                        <p className="text-center text-[#241C15] mb-4">
                            Or, if you created your Mailchimp account with Google:
                        </p>

                        <button
                            type="button"
                            className="w-full border border-[#DBDEE1] rounded py-3 flex justify-center items-center"
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" className="mr-2">
                                <path fill="#EA4335" d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"></path>
                                <path fill="#4285F4" d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"></path>
                                <path fill="#FBBC05" d="M3.88 10.78c-.19-.51-.3-1.05-.3-1.6 0-.56.11-1.1.29-1.6l-2.91-2.26a9 9 0 000 7.72l2.92-2.26z"></path>
                                <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"></path>
                            </svg>
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
