"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function ProfileSettings() {
    const [activeTab, setActiveTab] = useState('settings');

    return (
        <div className="min-h-screen px-6 bg-[#f9f9f9]">
            {/* Header */}
            <header className="bg-white  border-gray-200">
                <div className="max-w-[1200px] mx-auto my-8 lg:my-12 flex justify-between items-center">
                    <div className="text-3xl lg:text-5xl font-semibold">ORACLESOL</div>
                    {/* <button className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button> */}
                </div>
            </header>

            {/* Navigation */}
            <nav className="sticky top-0 bg-white  z-10">
                <div className="max-w-[1200px] border-b border-zonc-400 mx-auto overflow-x-auto">
                    <ul className="flex whitespace-nowrap">
                        <li>
                            <Link href="#"
                                className={` py-4 inline-block border-b-2 transition-colors ${activeTab === 'overview' ? 'border-[#007c89] text-[#007c89]' : 'border-transparent text-gray-700'}`}
                                onClick={(e) => { e.preventDefault(); setActiveTab('overview'); }}>
                                Overview
                            </Link>
                        </li>
                        <li>
                            <Link href="#"
                                className={`px-5 py-4 inline-block border-b-2 transition-colors ${activeTab === 'settings' ? 'border-[#007c89] text-[#007c89]' : 'border-transparent text-gray-700'}`}
                                onClick={(e) => { e.preventDefault(); setActiveTab('settings'); }}>
                                Settings
                            </Link>
                        </li>
                        <li>
                            <Link href="#"
                                className={`px-5 py-4 inline-block border-b-2 transition-colors ${activeTab === 'billing' ? 'border-[#007c89] text-[#007c89]' : 'border-transparent text-gray-700'}`}
                                onClick={(e) => { e.preventDefault(); setActiveTab('billing'); }}>
                                Billing
                            </Link>
                        </li>
                        <li>
                            <Link href="#"
                                className={`px-5 py-4 inline-block border-b-2 transition-colors ${activeTab === 'domains' ? 'border-[#007c89] text-[#007c89]' : 'border-transparent text-gray-700'}`}
                                onClick={(e) => { e.preventDefault(); setActiveTab('domains'); }}>
                                Domains
                            </Link>
                        </li>
                        <li>
                            <Link href="#"
                                className={`px-5 py-4 inline-block border-b-2 transition-colors ${activeTab === 'extras' ? 'border-[#007c89] text-[#007c89]' : 'border-transparent text-gray-700'}`}
                                onClick={(e) => { e.preventDefault(); setActiveTab('extras'); }}>
                                Extras
                            </Link>
                        </li>
                        <li>
                            <Link href="#"
                                className={`px-5 py-4 inline-block border-b-2 transition-colors ${activeTab === 'integrations' ? 'border-[#007c89] text-[#007c89]' : 'border-transparent text-gray-700'}`}
                                onClick={(e) => { e.preventDefault(); setActiveTab('integrations'); }}>
                                Integrations
                            </Link>
                        </li>
                        <li>
                            <Link href="#"
                                className={`px-5 py-4 inline-block border-b-2 transition-colors ${activeTab === 'shop' ? 'border-[#007c89] text-[#007c89]' : 'border-transparent text-gray-700'}`}
                                onClick={(e) => { e.preventDefault(); setActiveTab('shop'); }}>
                                Shop New Plans
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-[1200px] mx-auto py-16 ">
                {/* Profile Section */}
                <div className="mb-10">
                    <h1 className="text-4xl font-semibold text-[#241c15] mb-2" style={{ fontFamily: "'Means Web', Georgia, Times, 'Times New Roman', serif" }}>Profile</h1>
                    <p className="text-[#666]">
                        This is where you manage profile details specific to you. To manage what{' '}
                        <Link href="#" className="text-[#007c89] hover:underline">communication</Link>{' '}
                        you receive from Mailchimp, go to your{' '}
                        <Link href="#" className="text-[#007c89] hover:underline">communication preferences page</Link>.
                    </p>
                </div>

                {/* Profile Photo Section */}
                <div className="mb-10">
                    <h2 className="text-3xl font-semibold text-[#241c15] mb-4">Profile photo</h2>
                    <div className="flex flex-col md:flex-row items-start md:items-center">
                        <div className="w-[80px] h-[80px] lg:h-[100px] lg:w-[100px] rounded-full bg-[#f9eacc] flex items-center justify-center text-3xl font-medium text-[#333] mr-6 mb-4 md:mb-0 border border-[#e6e6e6]">
                            M
                        </div>
                        <div>
                            <h3 className="font-medium text-lg mb-1">Upload your photo...</h3>
                            <p className="text-[#666] text-lg mb-3">Photo should be at least 300px × 300px</p>
                            <div className="flex gap-3">
                                <button className="px-4 py-2 border border-[#dcdcdc] rounded text-[14px] hover:bg-gray-50 transition-colors">
                                    Upload Photo
                                </button>
                                <button className="px-4 py-2 border border-[#dcdcdc] rounded text-[14px] hover:bg-gray-50 transition-colors">
                                    Take A Photo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Forms Section */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Basic Information Form */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl font-semibold text-[#241c15] mb-4">Basic information</h2>

                        <div className="mb-4">
                            <label className="block mb-1 text-[15px] font-semibold" htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                className="w-full px-3 py-2 border border-[#dcdcdc] rounded focus:border-[#007c89] focus:outline-none"
                                defaultValue="testing@oraclesol.com"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-[15px] font-semibold" htmlFor="firstname">First name</label>
                            <input
                                type="text"
                                id="firstname"
                                className="w-full px-3 py-2 border border-[#dcdcdc] rounded focus:border-[#007c89] focus:outline-none"
                                defaultValue="Marketing"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-[15px] font-semibold" htmlFor="lastname">Last name</label>
                            <input
                                type="text"
                                id="lastname"
                                className="w-full px-3 py-2 border border-[#dcdcdc] rounded focus:border-[#007c89] focus:outline-none"
                                defaultValue="OS"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-[15px] font-semibold" htmlFor="email">Email address</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border border-[#dcdcdc] rounded focus:border-[#007c89] focus:outline-none"
                                defaultValue="testing@oraclesol.com"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-[15px] font-semibold" htmlFor="website">Website</label>
                            <input
                                type="url"
                                id="website"
                                className="w-full px-3 py-2 border border-[#dcdcdc] rounded focus:border-[#007c89] focus:outline-none"
                                defaultValue="https://oraclesol.com"
                            />
                        </div>

                        <button className="px-4 py-2 border border-[#dcdcdc] rounded text-[14px] hover:bg-gray-50 transition-colors">
                            Update
                        </button>
                    </div>

                    {/* Change Password Form */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl font-semibold text-[#241c15] mb-4">Change password</h2>

                        <div className="mb-4">
                            <label className="block mb-1 text-[15px] font-semibold" htmlFor="currentPassword">Verify current password</label>
                            <input
                                type="password"
                                id="currentPassword"
                                className="w-full px-3 py-2 border border-[#dcdcdc] rounded focus:border-[#007c89] focus:outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-1">
                                <label className="text-[15px] font-semibold" htmlFor="newPassword">New password</label>
                                <Link href="#" className="text-[#007c89] text-sm hover:underline">Generate strong password</Link>
                            </div>
                            <input
                                type="password"
                                id="newPassword"
                                className="w-full px-3 py-2 border border-[#dcdcdc] rounded focus:border-[#007c89] focus:outline-none"
                            />

                            <ul className="mt-3 space-y-1 text-[#666] text-[14px]">
                                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                                    One lowercase character
                                </li>
                                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                                    One uppercase character
                                </li>
                                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                                    One number
                                </li>
                                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                                    One special character
                                </li>
                                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                                    8 characters minimum
                                </li>
                                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                                    Must not contain username
                                </li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-[15px] font-semibold" htmlFor="confirmPassword">Confirm new password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="w-full px-3 py-2 border border-[#dcdcdc] rounded focus:border-[#007c89] focus:outline-none"
                            />
                        </div>

                        <button className="px-4 py-2 border border-[#dcdcdc] rounded text-[14px] hover:bg-gray-50 transition-colors">
                            Update
                        </button>
                    </div>
                </div>

                {/* Connections and Notifications */}
                <div className="mt-10">
                    <h2 className="text-[22px] font-normal text-[#241c15] mb-4">Connections and notifications</h2>
                    <p className="text-[15px] text-[#666] mb-2">
                        If you're the admin or owner of an account, enable notifications to receive updates when a change is made to the account.
                    </p>
                    <p className="text-[15px] text-[#666] mb-6">
                        SMS Verification must be enabled in the Account Security section below in order to receive notifications via SMS.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full mb-4 min-w-[700px]">
                            <thead>
                                <tr className="border-t border-gray-200 py-6 bg-[#f6f6f4]">
                                    <th className="py-3 text-left font-semibold ">Account name</th>
                                    <th className="py-3 text-left font-semibold ">User type</th>
                                    <th className="py-3 text-left font-semibold  whitespace-nowrap">
                                        Security notifications
                                        <button className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#666] text-white text-xs">i</button>
                                    </th>
                                    <th className="py-3 text-left font-semibold  whitespace-nowrap">
                                        Login notifications
                                        <button className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#666] text-white text-xs">i</button>
                                    </th>
                                    <th className="py-3 text-left"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-200">
                                    <td className="py-3">
                                        ORACLESOL
                                        <span className="ml-1 px-1.5 py-0.5 bg-gray-100 text-[#666] text-xs rounded">Current</span>
                                    </td>
                                    <td className="py-3">Owner</td>
                                    <td className="py-3 whitespace-nowrap">
                                        <label className="mr-3 inline-flex items-center">
                                            <input type="checkbox" className="h-4 w-4 text-[#007c89] rounded" />
                                            <span className="ml-1">SMS</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input type="checkbox" className="h-4 w-4 text-[#007c89] rounded" />
                                            <span className="ml-1">Email</span>
                                        </label>
                                    </td>
                                    <td className="py-3 whitespace-nowrap">
                                        <label className="mr-3 inline-flex items-center">
                                            <input type="checkbox" className="h-4 w-4 text-[#007c89] rounded" />
                                            <span className="ml-1">SMS</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input type="checkbox" className="h-4 w-4 text-[#007c89] rounded" />
                                            <span className="ml-1">Email</span>
                                        </label>
                                    </td>
                                    <td className="py-3 text-right">
                                        <Link href="#" className="text-[#666] text-sm hover:underline">Leave Account</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <button className="px-4 py-2 border border-[#dcdcdc] rounded text-[14px] hover:bg-gray-50 transition-colors">
                        Update
                    </button>
                     
                </div>
                 <p className='w-full mt-10 text-center text-sm text-zonc-500'>©2001–2025 Mailchimp® All rights reserved.</p>
            </main>
           
        </div>
    );
}
