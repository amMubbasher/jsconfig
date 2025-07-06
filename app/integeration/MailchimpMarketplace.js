// "use client";

// import { useState } from 'react';
// import Image from 'next/image';

// export default function MailchimpMarketplace() {
//     const [sortOption, setSortOption] = useState("Popularity");

//     return (
//         <div className="flex flex-col lg:flex-row gap-8  mx-auto px-4 py-6 max-w-5xl w-full border">
//             {/* Left sidebar with filters */}
//             <div className="w-full lg:w-64 flex-shrink-0">
//                 {/* Discover section */}
//                 <div className="mb-8">
//                     <h3 className="text-[15px] font-medium text-[#241c15] mb-3">Discover</h3>
//                     <div className="flex flex-col gap-2">
//                         <label className="flex items-center gap-2 cursor-pointer my-2">
//                             <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-[#007c89]" />
//                             <span className="text-[14px] text-[#241c15]">Made By Mailchimp</span>
//                         </label>
//                         <label className="flex items-center gap-2 cursor-pointer">
//                             <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-[#007c89]" />
//                             <span className="text-[14px] text-[#241c15]">Featured</span>
//                         </label>
//                     </div>
//                 </div>

//                 {/* Category section */}
//                 <div>
//                     <h3 className="text-[15px] font-medium text-[#241c15] mb-3">Category</h3>
//                     <div className="flex flex-col gap-2">
//                         {[
//                             'Advertising',
//                             'Analytics',
//                             'Booking & Scheduling',
//                             'Connector Services',
//                             'Contact Management',
//                             'Content',
//                             'Customer Service',
//                             'Design',
//                             'Developer Tools',
//                             'E-commerce',
//                             'Finance & Accounting',
//                             'Forms & Surveys',
//                             'Loyalty',
//                             'Marketing',
//                             'Payments',
//                             'Point of Sale',
//                             'Productivity',
//                             'Social Media',
//                             'Subscription Management',
//                             'Ticketing & Event Management',
//                             'Websites'
//                         ].map((category) => (
//                             <label key={category} className="flex items-center gap-2 my-2 cursor-pointer">
//                                 <input type="checkbox" className="h-5 w-5 rounded-[20px] border-gray-300 text-[#007c89]" />
//                                 <span className="text-[14px] text-[#241c15] ml-1">{category}</span>
//                             </label>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Main content area */}
//             <div className="flex-1">
//                 {/* Wix featured section */}
//                 <div className="border border-3 h-[150px] rounded-lg mb-8 overflow-hidden flex">
//                     <div className="bg-[#ffd24c] flex items-center justify-center">
//                         <div className="relative w-full">
//                             <Image
//                                 src="../assests/download2.png"
//                                 alt="Wix"
//                                 fill
//                                 style={{ objectFit: 'contain' }}
//                                 className="max-w-full max-h-full"
//                             />
//                         </div>
//                     </div>
//                     <div className="p-6">
//                         <h2 className="font-medium text-[#241c15] mb-2">Create your website with Wix</h2>
//                         <p className="text-[#4a4a4a] text-xs mb-1">
//                             Build a Wix website to boost your business's online visibility. Use your website to drive conversion and convert visitors into loyal customers.
//                         </p>
//                         <div className="flex flex-wrap gap-3">
//                             <button className="bg-[#277e89] hover:bg-[#1b5a62] text-white px-3 py-1 rounded text-sm font-medium transition-colors">
//                                 Get started
//                             </button>
//                             <button className="bg-[#f2f2f2] hover:bg-[#e5e5e5] text-[#241c15] px-3 py-1 rounded text-sm font-medium transition-colors">
//                                 Connect existing Wix site
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Data tools section */}
//                 <div>
//                     <div className="flex justify-between items-center flex-wrap gap-4 mb-4">
//                         <h2 className="text-[24px] font-medium text-[#241c15]">Bring your tools together to make the most of your data</h2>
//                         <div className="relative min-w-[120px]">
//                             <select
//                                 value={sortOption}
//                                 onChange={(e) => setSortOption(e.target.value)}
//                                 className="appearance-none w-full bg-white border border-[#e6e6e6] rounded px-3 py-2 pr-8 text-sm"
//                             >
//                                 <option>Popularity</option>
//                                 <option>Newest</option>
//                                 <option>A-Z</option>
//                             </select>
//                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
//                                 <svg className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
//                                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>

//                     <p className="text-[15px] text-[#4a4a4a] mb-6">
//                         Sync contacts, content, engagement data, and more from your other apps and platforms.
//                     </p>

//                     {/* Integration cards grid */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {/* Snapchat */}
//                         <div className="border border-[#e6e6e6] rounded-lg p-6">
//                             <div className="flex gap-2 mb-4">
//                                 <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#f2f2f2] text-[#6b6b6b]">Made by Mailchimp</span>
//                                 <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#ffebf8] text-[#d471b5]">New</span>
//                             </div>
//                             <div className="flex justify-center my-6">
//                                 <div className="relative w-16 h-16">
//                                     <Image
//                                         src="/snapchat-logo.png"
//                                         alt="Snapchat"
//                                         fill
//                                         style={{ objectFit: 'contain' }}
//                                     />
//                                 </div>
//                             </div>
//                             <h3 className="text-[18px] font-medium text-[#241c15] mt-4 mb-1">Snapchat Lead Generation</h3>
//                             <p className="text-[14px] text-[#4a4a4a]">
//                                 Streamline lead management by connecting leads from Snapchat to Mailchimp®.
//                             </p>
//                         </div>

//                         {/* Meta */}
//                         <div className="border border-[#e6e6e6] rounded-lg p-6">
//                             <div className="flex gap-2 mb-4">
//                                 <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#f2f2f2] text-[#6b6b6b]">Made by Mailchimp</span>
//                                 <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#ffebf8] text-[#d471b5]">New</span>
//                             </div>
//                             <div className="flex justify-center my-6">
//                                 <div className="relative w-16 h-16">
//                                     <Image
//                                         src="/meta-logo.png"
//                                         alt="Meta"
//                                         fill
//                                         style={{ objectFit: 'contain' }}
//                                     />
//                                 </div>
//                             </div>
//                             <h3 className="text-[18px] font-medium text-[#241c15] mt-4 mb-1">Meta Lead Ads</h3>
//                             <p className="text-[14px] text-[#4a4a4a]">
//                                 Meta Lead Ads
//                             </p>
//                         </div>

//                         {/* Google */}
//                         <div className="border border-[#e6e6e6] rounded-lg p-6">
//                             <div className="flex gap-2 mb-4">
//                                 <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#f2f2f2] text-[#6b6b6b]">Made by Mailchimp</span>
//                                 <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#ffebf8] text-[#d471b5]">New</span>
//                             </div>
//                             <div className="flex justify-center my-6">
//                                 <div className="relative w-16 h-16">
//                                     <Image
//                                         src="/google-logo.png"
//                                         alt="Google"
//                                         fill
//                                         style={{ objectFit: 'contain' }}
//                                     />
//                                 </div>
//                             </div>
//                             <h3 className="text-[18px] font-medium text-[#241c15] mt-4 mb-1">Google Lead Ads</h3>
//                             <p className="text-[14px] text-[#4a4a4a]">
//                                 Google Lead Ads
//                             </p>
//                         </div>

//                         {/* Canva */}
//                         <div className="border border-[#e6e6e6] rounded-lg p-6">
//                             <div className="flex gap-2 mb-4">
//                                 <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#f2f2f2] text-[#6b6b6b]">Made by Mailchimp</span>
//                             </div>
//                             <div className="flex justify-center my-6">
//                                 <div className="relative w-16 h-16">
//                                     <Image
//                                         src="/canva-logo.png"
//                                         alt="Canva"
//                                         fill
//                                         style={{ objectFit: 'contain' }}
//                                     />
//                                 </div>
//                             </div>
//                             <h3 className="text-[18px] font-medium text-[#241c15] mt-4 mb-1">Canva</h3>
//                             <p className="text-[14px] text-[#4a4a4a]">
//                                 Create custom designs in Canva and seamlessly share them in Mailchimp once connected.
//                             </p>
//                             <p className="text-xs text-[#6b6b6b] mt-4">15,000+ installs</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

































// // "use client";

// // import { useState } from 'react';
// // import Image from 'next/image';

// // export default function MailchimpMarketplace() {
// //     const [sortOption, setSortOption] = useState("Popularity");

// //     return (
// //         <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto px-4 py-6">
// //             {/* Left sidebar with filters */}
// //             <div className="w-full lg:w-64 flex-shrink-0">
// //                 {/* Discover section */}
// //                 <div className="mb-8">
// //                     <h3 className="text-[15px] font-medium text-[#241c15] mb-3">Discover</h3>
// //                     <div className="flex flex-col gap-2.5">
// //                         <label className="flex items-center gap-2.5 py-1 cursor-pointer">
// //                             <input
// //                                 type="checkbox"
// //                                 className="h-5 w-5 rounded-md border-gray-300 text-[#007c89] focus:ring-[#007c89]"
// //                             />
// //                             <span className="text-[14px] text-[#241c15]">Made By Mailchimp</span>
// //                         </label>
// //                         <label className="flex items-center gap-2.5 py-1 cursor-pointer">
// //                             <input
// //                                 type="checkbox"
// //                                 className="h-5 w-5 rounded-md border-gray-300 text-[#007c89] focus:ring-[#007c89]"
// //                             />
// //                             <span className="text-[14px] text-[#241c15]">Featured</span>
// //                         </label>
// //                     </div>
// //                 </div>

// //                 {/* Category section */}
// //                 <div>
// //                     <h3 className="text-[15px] font-medium text-[#241c15] mb-3">Category</h3>
// //                     <div className="flex flex-col gap-2.5">
// //                         {[
// //                             'Advertising',
// //                             'Analytics',
// //                             'Booking & Scheduling',
// //                             'Connector Services',
// //                             'Contact Management',
// //                             'Content',
// //                             'Customer Service',
// //                             'Design',
// //                             'Developer Tools',
// //                             'E-commerce',
// //                             'Finance & Accounting',
// //                             'Forms & Surveys',
// //                             'Loyalty',
// //                             'Marketing',
// //                             'Payments',
// //                             'Point of Sale',
// //                             'Productivity',
// //                             'Social Media',
// //                             'Subscription Management',
// //                             'Ticketing & Event Management',
// //                             'Websites'
// //                         ].map((category) => (
// //                             <label key={category} className="flex items-center gap-2.5 py-1 cursor-pointer">
// //                                 <input
// //                                     type="checkbox"
// //                                     className="h-5 w-5 rounded-md border-gray-300 text-[#007c89] focus:ring-[#007c89]"
// //                                 />
// //                                 <span className="text-[14px] text-[#241c15]">{category}</span>
// //                             </label>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Main content area */}
// //             <div className="flex-1">
// //                 {/* Wix featured section */}
// //                 <div className="border border-[#e6e6e6] rounded-2xl mb-8 overflow-hidden">
// //                     <div className="flex flex-col md:flex-row">
// //                         <div className="bg-[#ffd24c] w-full md:w-[260px] h-[200px] md:h-auto p-6 flex items-center justify-center">
// //                             <div className="relative w-[180px] h-[100px]">
// //                                 <Image
// //                                     src="/wix-logo.png"
// //                                     alt="Wix"
// //                                     fill
// //                                     style={{ objectFit: 'contain' }}
// //                                     className="max-w-full max-h-full"
// //                                 />
// //                             </div>
// //                         </div>
// //                         <div className="p-6">
// //                             <h2 className="text-[22px] font-medium text-[#241c15] mb-2">Create your website with Wix</h2>
// //                             <p className="text-[16px] text-[#4a4a4a] mb-6">
// //                                 Build a Wix website to boost your business's online visibility. Use your website to drive conversion and convert visitors into loyal customers.
// //                             </p>
// //                             <div className="flex flex-wrap gap-3">
// //                                 <button className="bg-[#277e89] hover:bg-[#1b5a62] text-white px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors">
// //                                     Get started
// //                                 </button>
// //                                 <button className="bg-[#f2f2f2] hover:bg-[#e5e5e5] text-[#241c15] px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors">
// //                                     Connect existing Wix site
// //                                 </button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Data tools section */}
// //                 <div>
// //                     <div className="flex justify-between items-center flex-wrap gap-4 mb-4">
// //                         <h2 className="text-[24px] font-medium text-[#241c15]">Bring your tools together to make the most of your data</h2>
// //                         <div className="relative min-w-[120px]">
// //                             <select
// //                                 value={sortOption}
// //                                 onChange={(e) => setSortOption(e.target.value)}
// //                                 className="appearance-none w-full bg-white border border-[#e6e6e6] rounded-2xl px-3.5 py-2.5 pr-8 text-sm"
// //                             >
// //                                 <option>Popularity</option>
// //                                 <option>Newest</option>
// //                                 <option>A-Z</option>
// //                             </select>
// //                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
// //                                 <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
// //                                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
// //                                 </svg>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     <p className="text-[15px] text-[#4a4a4a] mb-6">
// //                         Sync contacts, content, engagement data, and more from your other apps and platforms.
// //                     </p>

// //                     {/* Integration cards grid */}
// //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                         {/* Snapchat */}
// //                         <div className="border border-[#e6e6e6] rounded-2xl p-6">
// //                             <div className="flex gap-2 mb-4">
// //                                 <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#f2f2f2] text-[#6b6b6b]">Made by Mailchimp</span>
// //                                 <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#ffebf8] text-[#d471b5]">New</span>
// //                             </div>
// //                             <div className="flex justify-center my-6">
// //                                 <div className="relative w-16 h-16">
// //                                     <Image
// //                                         src="/snapchat-logo.png"
// //                                         alt="Snapchat"
// //                                         fill
// //                                         style={{ objectFit: 'contain' }}
// //                                     />
// //                                 </div>
// //                             </div>
// //                             <h3 className="text-[18px] font-medium text-[#241c15] mt-4 mb-1">Snapchat Lead Generation</h3>
// //                             <p className="text-[14px] text-[#4a4a4a]">
// //                                 Streamline lead management by connecting leads from Snapchat to Mailchimp®.
// //                             </p>
// //                         </div>

// //                         {/* Meta */}
// //                         <div className="border border-[#e6e6e6] rounded-2xl p-6">
// //                             <div className="flex gap-2 mb-4">
// //                                 <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#f2f2f2] text-[#6b6b6b]">Made by Mailchimp</span>
// //                                 <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#ffebf8] text-[#d471b5]">New</span>
// //                             </div>
// //                             <div className="flex justify-center my-6">
// //                                 <div className="relative w-16 h-16">
// //                                     <Image
// //                                         src="/meta-logo.png"
// //                                         alt="Meta"
// //                                         fill
// //                                         style={{ objectFit: 'contain' }}
// //                                     />
// //                                 </div>
// //                             </div>
// //                             <h3 className="text-[18px] font-medium text-[#241c15] mt-4 mb-1">Meta Lead Ads</h3>
// //                             <p className="text-[14px] text-[#4a4a4a]">
// //                                 Meta Lead Ads
// //                             </p>
// //                         </div>

// //                         {/* Google */}
// //                         <div className="border border-[#e6e6e6] rounded-2xl p-6">
// //                             <div className="flex gap-2 mb-4">
// //                                 <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#f2f2f2] text-[#6b6b6b]">Made by Mailchimp</span>
// //                                 <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#ffebf8] text-[#d471b5]">New</span>
// //                             </div>
// //                             <div className="flex justify-center my-6">
// //                                 <div className="relative w-16 h-16">
// //                                     <Image
// //                                         src="/google-logo.png"
// //                                         alt="Google"
// //                                         fill
// //                                         style={{ objectFit: 'contain' }}
// //                                     />
// //                                 </div>
// //                             </div>
// //                             <h3 className="text-[18px] font-medium text-[#241c15] mt-4 mb-1">Google Lead Ads</h3>
// //                             <p className="text-[14px] text-[#4a4a4a]">
// //                                 Google Lead Ads
// //                             </p>
// //                         </div>

// //                         {/* Canva */}
// //                         <div className="border border-[#e6e6e6] rounded-2xl p-6">
// //                             <div className="flex gap-2 mb-4">
// //                                 <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#f2f2f2] text-[#6b6b6b]">Made by Mailchimp</span>
// //                             </div>
// //                             <div className="flex justify-center my-6">
// //                                 <div className="relative w-16 h-16">
// //                                     <Image
// //                                         src="/canva-logo.png"
// //                                         alt="Canva"
// //                                         fill
// //                                         style={{ objectFit: 'contain' }}
// //                                     />
// //                                 </div>
// //                             </div>
// //                             <h3 className="text-[18px] font-medium text-[#241c15] mt-4 mb-1">Canva</h3>
// //                             <p className="text-[14px] text-[#4a4a4a]">
// //                                 Create custom designs in Canva and seamlessly share them in Mailchimp once connected.
// //                             </p>
// //                             <p className="text-xs text-[#6b6b6b] mt-4">15,000+ installs</p>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }



























































import React from 'react'

function MailchimpMarketplace() {
  return (
    <div>MailchimpMarketplace</div>
  )
}

export default MailchimpMarketplace
