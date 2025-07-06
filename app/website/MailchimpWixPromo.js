// "use client";

// import { useState, useEffect } from 'react';

// export default function MailchimpWixPromo() {
//     const [isLoaded, setIsLoaded] = useState(false);

//     useEffect(() => {
//         setIsLoaded(true);
//     }, []);

//     return (
//         <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-16">
//             <div className="flex flex-col lg:flex-row items-center">
//                 {/* Left content section */}
//                 <div className="lg:w-1/2 lg:pr-8 mb-10 lg:mb-0">
//                     {/* Logos */}
//                     <div className="mb-8">
//                         {/* Using regular img tag to avoid Next.js Image restrictions with external URLs */}
//                         <img
//                             src="/images/mailchimp-wix-logos.png"
//                             alt="Mailchimp and Wix logos"
//                             className="h-8 w-auto"
//                         />
//                     </div>

//                     {/* Heading */}
//                     <h2 className="text-3xl md:text-4xl font-medium text-[#241c15] mb-6 leading-tight">
//                         Elevate your Business with a Wix Website
//                     </h2>

//                     {/* Description */}
//                     <p className="text-[16px] text-[#241c15] mb-8">
//                         We've partnered with Wix – an intuitive website builder that helps you build your business presence online
//                     </p>

//                     {/* Why use section */}
//                     <h3 className="text-xl font-medium text-[#241c15] mb-5">
//                         Why use Wix with Mailchimp?
//                     </h3>

//                     {/* Benefits list */}
//                     <ul className="space-y-4 mb-8">
//                         <li className="flex items-start">
//                             <span className="text-[#00a981] mr-3 mt-1 flex-shrink-0">
//                                 <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
//                                     <path d="M6.75 12.127L3.622 9L2.558 10.057L6.75 14.25L15.75 5.25L14.693 4.193L6.75 12.127Z" />
//                                 </svg>
//                             </span>
//                             <span className="text-[15px] text-[#241c15]">Launch a professional website in minutes</span>
//                         </li>

//                         <li className="flex items-start">
//                             <span className="text-[#00a981] mr-3 mt-1 flex-shrink-0">
//                                 <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
//                                     <path d="M6.75 12.127L3.622 9L2.558 10.057L6.75 14.25L15.75 5.25L14.693 4.193L6.75 12.127Z" />
//                                 </svg>
//                             </span>
//                             <span className="text-[15px] text-[#241c15]">Grow your audience by automatically syncing your subscribers, leads, and customers</span>
//                         </li>

//                         <li className="flex items-start">
//                             <span className="text-[#00a981] mr-3 mt-1 flex-shrink-0">
//                                 <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
//                                     <path d="M6.75 12.127L3.622 9L2.558 10.057L6.75 14.25L15.75 5.25L14.693 4.193L6.75 12.127Z" />
//                                 </svg>
//                             </span>
//                             <span className="text-[15px] text-[#241c15]">Automate your email and SMS campaigns based on website behavior*</span>
//                         </li>

//                         <li className="flex items-start">
//                             <span className="text-[#00a981] mr-3 mt-1 flex-shrink-0">
//                                 <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
//                                     <path d="M6.75 12.127L3.622 9L2.558 10.057L6.75 14.25L15.75 5.25L14.693 4.193L6.75 12.127Z" />
//                                 </svg>
//                             </span>
//                             <span className="text-[15px] text-[#241c15]">Choose from 900+ pre-designed templates or use the AI website builder</span>
//                         </li>

//                         <li className="flex items-start">
//                             <span className="text-[#00a981] mr-3 mt-1 flex-shrink-0">
//                                 <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
//                                     <path d="M6.75 12.127L3.622 9L2.558 10.057L6.75 14.25L15.75 5.25L14.693 4.193L6.75 12.127Z" />
//                                 </svg>
//                             </span>
//                             <span className="text-[15px] text-[#241c15]">Step by step help from a dedicated Wix support team</span>
//                         </li>
//                     </ul>

//                     {/* CTAs */}
//                     <div className="flex flex-col sm:flex-row gap-4">
//                         <button className="bg-[#00a981] hover:bg-[#007d61] text-white px-6 py-3 rounded transition-colors text-[15px] font-medium">
//                             Get started for free
//                         </button>
//                         <button className="bg-[#f2f2f2] hover:bg-[#e5e5e5] text-[#241c15] px-6 py-3 rounded transition-colors text-[15px] font-medium">
//                             Connect existing Wix site
//                         </button>
//                     </div>
//                 </div>

//                 {/* Right image section */}
//                 <div className="lg:w-1/2 relative">
//                     <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
//                         {/* Using regular img tag to avoid Next.js Image restrictions with external URLs */}
//                         <img
//                             src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/wix-and-mailchimp.png"
//                             alt="Wix website with Mailchimp integration"
//                             className="w-full h-auto"
//                         />
//                     </div>


//                     {/* <div className="absolute w-full h-full top-0 left-0 pointer-events-none" aria-hidden="true">
//                         p-[45%] right-[40%] w-[100px] border-t border-dashed border-[#999]" />
//                         <div className="hidden md:block absolute top-[85%] right-[20%] w-[60px] border-t border-dashed border-[#999]" />


//                         <div className="hidden md:flex items-center justify-center absolute bottom-4 right-4 w-16 h-16 bg-black rounded-full">
//                             <span className="text-white text-lg font-bold">WIX</span>
//                         </div>


//                         <div className="hidden md:flex items-center justify-center absolute top-[25%] right-[10%] w-16 h-16 bg-[#ffe01b] rounded-full">
//                             <svg width="32" height="32" viewBox="0 0 32 32" fill="#000">
//                                 <path d="M16 8C14.9 8 14 8.9 14 10C14 11.1 14.9 12 16 12C17.1 12 18 11.1 18 10C18 8.9 17.1 8 16 8ZM24 14C22.9 14 22 14.9 22 16C22 17.1 22.9 18 24 18C25.1 18 26 17.1 26 16C26 14.9 25.1 14 24 14ZM16 16C14.9 16 14 16.9 14 18C14 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16ZM8 14C6.9 14 6 14.9 6 16C6 17.1 6.9 18 8 18C9.1 18 10 17.1 10 16C10 14.9 9.1 14 8 14Z" />
//                             </svg>
//                         </div>
//                     </div> */}
//                 </div>
//             </div>
//         </div>
//     );
// }














"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function MailchimpWixPromo() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="w-full max-w-[1100px] mx-auto px-6 py-10 md:px-4 md:py-16">
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-16">
                {/* Left content */}
                <div className="w-full lg:w-1/2">
                    {/* Logo */}
                    <div className="mb-8">
                        <div className="h-8">
                            <Image
                                src="/images/mailchimp-wix-logos.png"
                                alt="Intuit mailchimp | WIX"
                                width={300}
                                height={30}
                                className="h-full w-auto object-contain object-left"
                            />
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="text-[32px] font-medium text-[#241c15] mb-4 leading-tight">
                        Elevate your Business with a Wix Website
                    </h2>

                    {/* Subheading */}
                    <p className="text-[16px] text-[#241c15] mb-8">
                        We've partnered with Wix – an intuitive website builder that helps you build your business presence online
                    </p>

                    {/* Why use section */}
                    <h3 className="text-xl font-medium text-[#241c15] mb-5">
                        Why use Wix with Mailchimp?
                    </h3>

                    {/* Benefits list */}
                    <ul className="space-y-4 mb-10">
                        <li className="flex items-start">
                            <span className="text-[#277e89] mr-3 mt-0.5 flex-shrink-0">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                                    <path d="M6.75 12.127L3.622 9L2.558 10.057L6.75 14.25L15.75 5.25L14.693 4.193L6.75 12.127Z" />
                                </svg>
                            </span>
                            <span className="text-[15px] text-[#241c15]">Launch a professional website in minutes</span>
                        </li>

                        <li className="flex items-start">
                            <span className="text-[#277e89] mr-3 mt-0.5 flex-shrink-0">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                                    <path d="M6.75 12.127L3.622 9L2.558 10.057L6.75 14.25L15.75 5.25L14.693 4.193L6.75 12.127Z" />
                                </svg>
                            </span>
                            <span className="text-[15px] text-[#241c15]">Grow your audience by automatically syncing your subscribers, leads, and customers</span>
                        </li>

                        <li className="flex items-start">
                            <span className="text-[#277e89] mr-3 mt-0.5 flex-shrink-0">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                                    <path d="M6.75 12.127L3.622 9L2.558 10.057L6.75 14.25L15.75 5.25L14.693 4.193L6.75 12.127Z" />
                                </svg>
                            </span>
                            <span className="text-[15px] text-[#241c15]">Automate your email and SMS campaigns based on website behavior*</span>
                        </li>

                        <li className="flex items-start">
                            <span className="text-[#277e89] mr-3 mt-0.5 flex-shrink-0">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                                    <path d="M6.75 12.127L3.622 9L2.558 10.057L6.75 14.25L15.75 5.25L14.693 4.193L6.75 12.127Z" />
                                </svg>
                            </span>
                            <span className="text-[15px] text-[#241c15]">Choose from 900+ pre-designed templates or use the AI website builder</span>
                        </li>

                        <li className="flex items-start">
                            <span className="text-[#277e89] mr-3 mt-0.5 flex-shrink-0">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                                    <path d="M6.75 12.127L3.622 9L2.558 10.057L6.75 14.25L15.75 5.25L14.693 4.193L6.75 12.127Z" />
                                </svg>
                            </span>
                            <span className="text-[15px] text-[#241c15]">Step by step help from a dedicated Wix support team</span>
                        </li>
                    </ul>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-[#277e89] hover:bg-[#1b5a62] text-white px-3 py-1 rounded transition-colors text-[15px] font-medium">
                            Get started for free
                        </button>
                        <button className="bg-[#f2f2f2] hover:bg-[#e5e5e5] text-[#241c15] px-3 py-1 rounded transition-colors text-[15px] font-medium">
                            Connect existing Wix site
                        </button>
                    </div>
                </div>

                {/* Right image */}
                <div className="w-full lg:w-1/2 relative">
                    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="relative">
                            {/* Main image */}
                            <img
                                src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/wix-and-mailchimp.png"
                                alt="Wix website with Mailchimp integration"
                                width={600}
                                height={500}
                                className="w-full h-auto"
                            />

                            {/* Decorative elements */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


