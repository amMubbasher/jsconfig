// "use client";

// import React, { useState } from 'react';
// import { TiPencil } from "react-icons/ti";
// import { IoMdHome } from "react-icons/io";
// import { TfiAnnouncement } from "react-icons/tfi";
// import { GiWireCoil } from "react-icons/gi";
// import { MdOutlineLocalMovies, MdOutlineGroups2, MdContentPaste } from "react-icons/md";
// import { FaSignal } from "react-icons/fa6";
// import { CgWebsite } from "react-icons/cg";
// import { LuCombine } from "react-icons/lu";
// import { GiHamburgerMenu } from "react-icons/gi";

// function MobileSidebar() {
//     const [isVisible, setIsVisible] = useState(false);

//     const sidebarItems = [
//         { icon: <TiPencil size={20} />, label: "Create" },
//         { icon: <IoMdHome size={25} />, label: "Home", active: true },
//         { icon: <TfiAnnouncement size={22} />, label: "Campaigns" },
//         { icon: <GiWireCoil size={22} />, label: "Automations" },
//         { icon: <MdOutlineLocalMovies size={22} />, label: "Forms", badge: "Beta" },
//         { icon: <MdOutlineGroups2 size={22} />, label: "Audience" },
//         { icon: <FaSignal size={22} />, label: "Analytics" },
//         { icon: <CgWebsite size={22} />, label: "Website" },
//         { icon: <MdContentPaste size={22} />, label: "Content" },
//         { icon: <LuCombine size={22} />, label: "Integrations" },
//     ];

//     return (
//         <div className="flex absolute z-50 bottom-10 left-10 lg:bottom-0 lg:left-0 lg:relative lg:border-4">
//             <div>
//                 {/* Expanded Sidebar */}
//                 {isVisible && (
//                     <div className='border hidden lg:flex  w-screen z-20 border-zinc-200 flex flex-col justify-between px-3 py-4 p-2'>
//                         <div className='space-y-1'>
//                             {sidebarItems.map((item, index) => (
//                                 <button
//                                     key={index}
//                                     className={`flex items-center gap-3 w-full border-zinc-300 rounded-lg p-1 py-1.5 ${item.active ? "bg-gray-200 font-semibold" : ""
//                                         }`}
//                                 >
//                                     {item.icon}
//                                     {item.label}
//                                     {item.badge && (
//                                         <span className='bg-pink-200/75 px-1 rounded-md text-xs'>{item.badge}</span>
//                                     )}
//                                 </button>
//                             ))}
//                         </div>

//                         <div className='border rounded-xl border-zinc-200 mt-4'>
//                             <div className='p-6 space-y-6 flex flex-col justify-center text-sm font-semibold w-full'>
//                                 Time Sensitive
//                                 <button className='p-4 rounded-xl mt-4 bg-gray-200 text-lg font-normal'>
//                                     Upgrade
//                                 </button>
//                             </div>

//                             <div className='w-full flex justify-end px-4 cursor-pointer' onClick={() => setIsVisible(false)}>
//                                 <div className='border-2 w-6 h-6 mb-2'>
//                                     <div className='border-r-2 w-[50%] bg-[#277e89] h-full'></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//             </div>
//         </div>
//     );
// }

// export default MobileSidebar;





import React from 'react'

function MobileSidebar() {
  return (
    <div>MobileSidebar</div>
  )
}

export default MobileSidebar