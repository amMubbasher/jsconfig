// "use client";

// import React from 'react';
// import Image from 'next/image';

// export default function WelcomeAutomationBanner() {
//     return (
//         <div className="bg-[#f4f9ff] w-full py-12 px-6 md:px-12">
//             <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
//                 {/* Left column - Text content */}
//                 <div className="max-w-[600px]">
//                     <h1 className="text-[40px] md:text-[44px] leading-[1.1] font-semibold text-[#241c15] mb-4">
//                         Welcome new customers—even when you&apos;re offline
//                     </h1>
//                     <p className="text-[18px] text-[#4a4a4a] mb-8">
//                         Automate welcome emails to make a great first impression with new customers.
//                     </p>
//                     <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//                         <button className="bg-[#007c89] hover:bg-[#004e54] text-white px-6 py-3 rounded transition-colors font-medium">
//                             Get started
//                         </button>
//                         <button className="flex items-center text-[#007c89] hover:text-[#004e54] transition-colors font-medium">
//                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
//                                 <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                 <path d="M9.5 9C9.5 9 11 7.5 12 9.5C13 11.5 14.5 10 14.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                 <path d="M9 12.5L11.5 12L12 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                 <path d="M14.5 16L12 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                             Learn more about automation flows
//                         </button>
//                     </div>
//                 </div>

//                 {/* Right column - Phone illustration */}
//                 <div className="relative w-full max-w-[400px] h-[300px]">

//                          {/* <Image src='https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/language-agnostic-assets/in-app-pages/automations/prebuilt_journeys_marketing_automations.png'/> */}

//                            <Image
//       src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/language-agnostic-assets/in-app-pages/automations/prebuilt_journeys_marketing_automations.png" // Path to your image
//       alt="Description of my image" // Alt text for accessibility
//       width={500} // Original width of the image
//       height={300} // Original height of the image
//     />
//                 </div>
//             </div>
//         </div>
//     );
// }

















"use client";

import React from 'react';
import Image from 'next/image';

export default function WelcomeAutomationBanner() {
    return (
        <div className="bg-[#f4f9ff] w-full py-6 px-10 md:px-12">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left column - Text content */}
                <div className="max-w-[600px]">
                    <h1 className="text-[40px] md:text-[44px] font-semibold text-[#241c15]">
                        Welcome new customers—even when you&apos;re offline
                    </h1>
                    <p className="text-[18px] text-[#4a4a4a]">
                        Automate welcome emails to make a great first impression with new customers.
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-1">
                        <button className="bg-[#007c89] hover:bg-[#004e54] text-white px-4 py-1 rounded-lg transition-colors font-medium">
                            Get started
                        </button>
                        <button className="flex items-center text-[#007c89] hover:text-[#004e54] transition-colors font-medium">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.5 9C9.5 9 11 7.5 12 9.5C13 11.5 14.5 10 14.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 12.5L11.5 12L12 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.5 16L12 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Learn more about automation flows
                        </button>
                    </div>
                </div>

                {/* Right column - Phone illustration */}
                <div className="relative w-full max-w-[400px] h-[300px]">
                    {/* Option 1: Using an img tag instead of Next.js Image component */}
                    <img
                        src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/language-agnostic-assets/in-app-pages/automations/prebuilt_journeys_marketing_automations.png"
                        alt="Mailchimp automation journey visualization showing a phone with TANDU app and workflow steps"
                        className="w-full h-full object-contain"
                    />
                    
                    {/* Option 2: If you want to keep using Next.js Image, you need to add the domain to your next.config.js:
                    <Image 
                        src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/language-agnostic-assets/in-app-pages/automations/prebuilt_journeys_marketing_automations.png"
                        alt="Mailchimp automation journey visualization showing a phone with TANDU app and workflow steps"
                        width={500}
                        height={300}
                        className="object-contain"
                    /> */}
                </div>
            </div>
        </div>
    );
}
