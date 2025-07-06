// import React from 'react'
// import { TiPencil } from "react-icons/ti";
// import { IoMdHome } from "react-icons/io";
// import { TfiAnnouncement } from "react-icons/tfi";
// import { GiWireCoil } from "react-icons/gi";
// import { MdOutlineLocalMovies } from "react-icons/md";
// import { MdOutlineGroups2 } from "react-icons/md";
// import { FaSignal } from "react-icons/fa6";
// import { CgWebsite } from "react-icons/cg";
// import { MdContentPaste } from "react-icons/md";
// import { LuCombine } from "react-icons/lu";


// function Sidebar() {

//     const [isVisible, setIsVisible] = useState(false);
//     return (
//         <div className=''>
//             {isVisible ?
//                 <div className='border w-[280px] border-zinc-200 flex-1 px-3 py-4 flex flex-col justify-between p-2 '>
//                     <div className='space-y-1'>
//                         <button className='flex items-center gap-3 border w-full border-zinc-300 rounded-lg p-1 py-1.5'>
//                             <TiPencil size={20} />
//                             Create
//                         </button>
//                         <button className='flex items-center gap-3 font-semibold w-full border-zinc-300 rounded-lg p-1 py-1.5 bg-gray-200'>
//                             <IoMdHome size={25} />
//                             Home
//                         </button>
//                         <button className='flex items-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                             <TfiAnnouncement size={22} />
//                             Campaigns
//                         </button>
//                         <button className='flex items-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                             <GiWireCoil size={22} />
//                             Automations
//                         </button>
//                         <button className='flex items-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                             <MdOutlineLocalMovies size={22} />
//                             Forms
//                             <p className='bg-pink-200/75 px-1 rounded-md'>Beta</p>
//                         </button>
//                         <button className='flex items-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                             <MdOutlineGroups2 size={22} />
//                             Audience
//                         </button>
//                         <button className='flex items-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                             <FaSignal size={22} />
//                             Analytics
//                         </button>
//                         <button className='flex items-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                             <CgWebsite size={22} />
//                             Website
//                         </button>
//                         <button className='flex items-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                             <MdContentPaste size={22} />
//                             Content
//                         </button>
//                         <button className='flex items-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                             <LuCombine size={22} />
//                             Integerations
//                         </button>
//                     </div>
//                     <div className='border rounded-xl border-zinc-200'>
//                         <div className='p-6 space-y-6 flex flex-col justify-center text-sm font-semibold w-full'>
//                             Time Senstive<br></br>
//                             <button className='p-4 rounded-xl mt-4 bg-gray-200 text-lg font-normal'>Upgrade</button>
//                         </div>
//                         {/* sidebar Expand */}
//                         <div className='w-full flex justify-end px-4' onClick={() => setIsActive((prev) => !prev)}>
//                             <div className='border-2 w-6 h-6 mb-2'>
//                                 <div className='border-r-2 w-[50%] bg-[#277e89] h-full'></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div> : null
//             }

//             <div className='border w-[80px] border-zinc-200 flex-1 px-3 py-4 flex flex-col justify-between border p-2 '>
//                 <div className='space-y-1 flex flex-col items-center'>
//                     <button className='flex items-center justify-center gap-3 border w-full border-zinc-300 rounded-lg p-1 py-1.5'>
//                         <TiPencil size={20} />

//                     </button>
//                     <button className='flex items-center justify-center  gap-3 font-semibold w-full border-zinc-300 rounded-lg p-1 py-1.5 '>
//                         <IoMdHome size={25} />

//                     </button>
//                     <button className='flex items-center justify-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                         <TfiAnnouncement size={22} />

//                     </button>
//                     <button className='flex items-center justify-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                         <GiWireCoil size={22} />

//                     </button>
//                     <button className='flex items-center justify-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                         <MdOutlineLocalMovies size={22} />

//                     </button>
//                     <button className='flex items-center justify-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                         <MdOutlineGroups2 size={22} />

//                     </button>
//                     <button className='flex items-center justify-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                         <FaSignal size={22} />

//                     </button>
//                     <button className='flex items-center justify-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                         <CgWebsite size={22} />

//                     </button>
//                     <button className='flex items-center justify-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                         <MdContentPaste size={22} />

//                     </button>
//                     <button className='flex items-center justify-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                         <LuCombine size={22} />
//                     </button>
//                 </div>
//                 {/* sidebar contract */}
//                 <div className='w-full flex justify-end px-4'>
//                     <div className='border-2 w-6 h-6 mb-2'>
//                         <div className='border-r-2 w-[50%] bg-[#277e89] h-full'></div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Sidebar

















































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
// import MobileSidebar from './MobileSidebar';

// function Sidebar() {
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
//         <div className="flex absolute z-50 bottom-10 left-10 lg:bottom-0 lg:left-0 lg:relative">
//             <div>
//                 {/* Expanded Sidebar */}
//                 {isVisible && (
//                     <div className='border hidden lg:flex  w-[280px] border-zinc-200 flex flex-col justify-between px-3 py-4 p-2'>
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

//                 {/* Collapsed Sidebar */}
//                 {!isVisible && (
//                     <div className='border hidden lg:flex  w-[80px] border-zinc-200 flex flex-col justify-between px-3 py-4 p-2'>
//                         <div className='space-y-1 hidden lg:flex  flex flex-col items-center'>
//                             {sidebarItems.map((item, index) => (
//                                 <button key={index} className='flex items-center justify-center w-full border-zinc-300 rounded-lg p-1 py-1.5'>
//                                     {item.icon}
//                                 </button>
//                             ))}
//                         </div>

//                         <div className='w-full flex justify-end px-4 cursor-pointer' onClick={() => setIsVisible(true)}>
//                             <div className='border-2 w-6 h-6 mb-2'>
//                                 <div className='border-r-2 w-[50%] bg-[#277e89] h-full'></div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>

//             <div className='text-white lg:hidden'>
//                 <div>
//                     <MobileSidebar/>
//                 </div>
//                 <button className='p-3 border border-white bg-black rounded-full' onClick={() => setIsVisible(true)}>
//                     <GiHamburgerMenu size={20} />
//                 </button>
//             </div>

//         </div>
//     );
// }

// export default Sidebar;















































































































































// "use client";

// import React, { useState, useEffect } from 'react';
// import { FiEdit3, FiHome, FiMessageSquare } from "react-icons/fi";
// import { TfiAnnouncement } from "react-icons/tfi";
// import { VscCircuitBoard } from "react-icons/vsc";
// import { TbScreenShare } from "react-icons/tb";
// import { HiOutlineUserGroup } from "react-icons/hi";
// import { BsBarChart, BsGlobe, BsFolder, BsBoxes } from "react-icons/bs";
// import { IoCloseOutline } from "react-icons/io5";
// import { HiChevronRight } from "react-icons/hi";

// export default function Sidebar() {
//   const [isExpanded, setIsExpanded] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   // Handle screen resize
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);

//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   // Close mobile sidebar when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (mobileOpen && !event.target.closest('#sidebar-container') && !event.target.closest('#hamburger-button')) {
//         setMobileOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [mobileOpen]);

//   const menuItems = [
//     { 
//       icon: <FiEdit3 size={20} className="text-gray-600" />, 
//       label: "Create",
//       path: "#create",
//       expanded: false,
//       submenu: []
//     },
//     { 
//       icon: <FiHome size={20} className="text-gray-600" />, 
//       label: "Home",
//       path: "#home",
//       expanded: false,
//       submenu: []
//     },
//     { 
//       icon: <TfiAnnouncement size={20} className="text-gray-600" />, 
//       label: "Campaigns",
//       path: "#campaigns",
//       expanded: false,
//       submenu: []
//     },
//     { 
//       icon: <VscCircuitBoard size={20} className="text-gray-600" />, 
//       label: "Automations",
//       path: "#automations",
//       expanded: false,
//       submenu: [
//         { label: "All Flows", path: "#all-flows" },
//         { label: "Flow Templates", path: "#flow-templates" },
//         { label: "Transactional Email", path: "#transactional-email" }
//       ]
//     },
//     { 
//       icon: <FiMessageSquare size={20} className="text-gray-600" />, 
//       label: "SMS",
//       path: "#sms",
//       badge: { text: "New", color: "pink" },
//       expanded: false,
//       submenu: []
//     },
//     { 
//       icon: <TbScreenShare size={20} className="text-gray-600" />, 
//       label: "Forms",
//       path: "#forms",
//       badge: { text: "Beta", color: "purple" },
//       expanded: false,
//       submenu: [
//         { label: "Other Forms", path: "#other-forms" }
//       ]
//     },
//     { 
//       icon: <HiOutlineUserGroup size={20} className="text-gray-600" />, 
//       label: "Audience",
//       path: "#audience",
//       expanded: false,
//       submenu: [
//         { label: "Audience Dashboard", path: "#audience-dashboard" },
//         { label: "Tags", path: "#tags" },
//         { label: "Segments", path: "#segments" },
//         { label: "Surveys", path: "#surveys" },
//         { label: "Subscriber Preferences", path: "#subscriber-preferences" },
//         { label: "Inbox", path: "#inbox" }
//       ]
//     },
//     { 
//       icon: <BsBarChart size={20} className="text-gray-600" />, 
//       label: "Analytics",
//       path: "#analytics",
//       expanded: false,
//       submenu: [
//         { label: "Reports", path: "#reports" },
//         { label: "Custom Reports", path: "#custom-reports" }
//       ]
//     },
//     { 
//       icon: <BsGlobe size={20} className="text-gray-600" />, 
//       label: "Website",
//       path: "#website",
//       expanded: false,
//       submenu: [
//         { label: "Settings", path: "#website-settings" },
//         { label: "Reports", path: "#website-reports" }
//       ]
//     },
//     { 
//       icon: <BsFolder size={20} className="text-gray-600" />, 
//       label: "Content",
//       path: "#content",
//       active: true,
//       expanded: true,
//       submenu: [
//         { label: "Creative Assistant", path: "#creative-assistant" },
//         { label: "Email templates", path: "#email-templates" },
//         { label: "Brand Kit", path: "#brand-kit" }
//       ]
//     },
//     { 
//       icon: <BsBoxes size={20} className="text-gray-600" />, 
//       label: "Integrations",
//       path: "#integrations",
//       expanded: false,
//       submenu: [
//         { label: "Manage", path: "#manage-integrations" }
//       ]
//     },
//   ];

//   const toggleSubmenu = (index) => {
//     const updatedItems = [...menuItems];
//     updatedItems[index].expanded = !updatedItems[index].expanded;
//     // You would normally use state here, but for this example I'm keeping it simple
//   };

//   return (
//     <>
//       {/* Mobile hamburger button */}
//       {isMobile && !mobileOpen && (
//         <button
//           id="hamburger-button"
//           onClick={() => setMobileOpen(true)}
//           className="fixed z-50 bottom-6 left-6 bg-black text-white rounded-full p-3 shadow-lg"
//           aria-label="Open menu"
//         >
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>
//       )}

//       {/* Mobile overlay */}
//       {isMobile && mobileOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-40" aria-hidden="true" />
//       )}

//       {/* Sidebar container */}
//       <div
//         id="sidebar-container"
//         className={`
//           fixed top-0 left-0 h-full bg-white z-50 transition-all duration-300 ease-in-out border-r border-gray-200 
//           ${isExpanded ? 'w-64' : 'w-16'} 
//           ${isMobile ? (mobileOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
//         `}
//       >
//         {/* Mobile close button */}
//         {isMobile && mobileOpen && (
//           <button
//             onClick={() => setMobileOpen(false)}
//             className="absolute top-4 right-4 p-1 text-gray-500 hover:text-gray-700"
//             aria-label="Close menu"
//           >
//             <IoCloseOutline size={24} />
//           </button>
//         )}

//         {/* Navigation menu */}
//         <nav className="h-full flex flex-col">
//           <div className="flex-grow overflow-y-auto py-2">
//             <ul className="px-2 space-y-1">
//               {menuItems.map((item, index) => (
//                 <li key={index} className="relative">
//                   <a
//                     href={item.path}
//                     className={`
//                       flex items-center px-2 py-2 rounded-md transition-all
//                       ${item.active ? 'bg-gray-100' : 'hover:bg-gray-50'}
//                     `}
//                   >
//                     <div className="flex items-center justify-center min-w-8">
//                       {item.icon}
//                     </div>

//                     {(isExpanded || (isMobile && mobileOpen)) && (
//                       <div className="ml-2 flex-grow flex items-center justify-between">
//                         <span className="text-sm text-gray-700">
//                           {item.label}
//                         </span>

//                         <div className="flex items-center">
//                           {item.badge && (
//                             <span className={`
//                               text-xs px-1.5 py-0.5 rounded mr-2
//                               ${item.badge.color === 'pink' ? 'bg-pink-100 text-pink-800' : 'bg-purple-100 text-purple-800'}
//                             `}>
//                               {item.badge.text}
//                             </span>
//                           )}

//                           {item.submenu && item.submenu.length > 0 && (
//                             <HiChevronRight 
//                               size={16}
//                               className={`transition-transform ${item.expanded ? 'transform rotate-90' : ''}`}
//                             />
//                           )}
//                         </div>
//                       </div>
//                     )}
//                   </a>

//                   {/* Submenu */}
//                   {(isExpanded || (isMobile && mobileOpen)) && item.expanded && item.submenu && item.submenu.length > 0 && (
//                     <ul className="pl-10 py-1 space-y-1">
//                       {item.submenu.map((subItem, subIndex) => (
//                         <li key={subIndex}>
//                           <a 
//                             href={subItem.path}
//                             className="block py-1.5 px-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded"
//                           >
//                             {subItem.label}
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Bottom section */}
//           {(isExpanded || (isMobile && mobileOpen)) && (
//             <div className="p-3 mt-auto">
//               <div className="border rounded-lg p-4">
//                 <div className="text-xs text-gray-500">Time sensitive</div>
//                 <h4 className="font-medium text-sm mt-1">Onboarding</h4>
//                 <p className="text-xs text-gray-700 mt-1">
//                   83 days left to access a personalized product tour of our tools and features.
//                 </p>
//                 <button className="w-full mt-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
//                   Connect to expert
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Toggle button for desktop */}
//           {!isMobile && (
//             <button
//               onClick={() => setIsExpanded(!isExpanded)}
//               className="absolute bottom-4 right-3 border border-teal-500 rounded p-1"
//               aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
//             >
//               <div className="w-5 h-5 flex">
//                 <div className={`w-1/2 h-full ${isExpanded ? 'bg-white' : 'bg-teal-500'}`}></div>
//                 <div className={`w-1/2 h-full ${isExpanded ? 'bg-teal-500' : 'bg-white'}`}></div>
//               </div>
//             </button>
//           )}
//         </nav>
//       </div>

//       {/* Main content margin compensation (only applied on desktop) */}
//       <div className={`transition-all duration-300 ${!isMobile ? (isExpanded ? 'ml-64' : 'ml-16') : 'ml-0'}`}>
//         {/* Your main content would go here */}
//       </div>
//     </>
//   );
// }



























































































































// "use client";

// import React, { useState, useEffect } from 'react';
// import { FiEdit3, FiHome } from "react-icons/fi";
// import { TfiAnnouncement } from "react-icons/tfi";
// import { VscCircuitBoard } from "react-icons/vsc";
// import { TbMessage } from "react-icons/tb";
// import { TbScreenShare } from "react-icons/tb";
// import { HiOutlineUserGroup } from "react-icons/hi";
// import { IoStatsChartOutline } from "react-icons/io5";
// import { CgWebsite } from "react-icons/cg";
// import { BsFolder, BsBoxes } from "react-icons/bs";
// import { IoCloseOutline } from "react-icons/io5";
// import { IoIosArrowForward } from "react-icons/io";
// import { GiHamburgerMenu } from "react-icons/gi";

// export default function Sidebar() {
//   const [expandedItem, setExpandedItem] = useState("content"); // Only content expanded by default
//   const [isExpanded, setIsExpanded] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   // Check screen size
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Initial menu items structure with proper states
//   const menuItems = [
//     { 
//       id: "create",
//       icon: <FiEdit3 />, 
//       label: "Create",
//       hasSubmenu: false,
//       submenu: []
//     },
//     { 
//       id: "home",
//       icon: <FiHome />, 
//       label: "Home",
//       hasSubmenu: false,
//       submenu: []
//     },
//     { 
//       id: "campaigns",
//       icon: <TfiAnnouncement />, 
//       label: "Campaigns",
//       hasSubmenu: false,
//       submenu: []
//     },
//     { 
//       id: "automations",
//       icon: <VscCircuitBoard />, 
//       label: "Automations",
//       hasSubmenu: true,
//       submenu: [
//         { label: "All Flows", path: "#all-flows" },
//         { label: "Flow Templates", path: "#flow-templates" },
//         { label: "Transactional Email", path: "#transactional-email" }
//       ]
//     },
//     { 
//       id: "sms",
//       icon: <TbMessage />, 
//       label: "SMS",
//       hasSubmenu: false,
//       badge: { text: "New", color: "pink" },
//       submenu: []
//     },
//     { 
//       id: "forms",
//       icon: <TbScreenShare />, 
//       label: "Forms",
//       hasSubmenu: true,
//       badge: { text: "Beta", color: "purple" },
//       submenu: [
//         { label: "Other Forms", path: "#other-forms" }
//       ]
//     },
//     { 
//       id: "audience",
//       icon: <HiOutlineUserGroup />, 
//       label: "Audience",
//       hasSubmenu: true,
//       submenu: [
//         { label: "Audience Dashboard", path: "#audience-dashboard" },
//         { label: "Tags", path: "#tags" },
//         { label: "Segments", path: "#segments" },
//         { label: "Surveys", path: "#surveys" },
//         { label: "Subscriber Preferences", path: "#subscriber-preferences" },
//         { label: "Inbox", path: "#inbox" }
//       ]
//     },
//     { 
//       id: "analytics",
//       icon: <IoStatsChartOutline />, 
//       label: "Analytics",
//       hasSubmenu: true,
//       submenu: [
//         { label: "Reports", path: "#reports" },
//         { label: "Custom Reports", path: "#custom-reports" }
//       ]
//     },
//     { 
//       id: "website",
//       icon: <CgWebsite />, 
//       label: "Website",
//       hasSubmenu: true,
//       submenu: [
//         { label: "Settings", path: "#website-settings" },
//         { label: "Reports", path: "#website-reports" }
//       ]
//     },
//     { 
//       id: "content",
//       icon: <BsFolder />, 
//       label: "Content",
//       hasSubmenu: true,
//       submenu: [
//         { label: "Creative Assistant", path: "#creative-assistant" },
//         { label: "Email templates", path: "#email-templates" },
//         { label: "Brand Kit", path: "#brand-kit" }
//       ]
//     },
//     { 
//       id: "integrations",
//       icon: <BsBoxes />, 
//       label: "Integrations",
//       hasSubmenu: true,
//       submenu: [
//         { label: "Manage", path: "#manage-integrations" }
//       ]
//     },
//   ];

//   // Toggle menu item expansion
//   const toggleMenuItem = (itemId) => {
//     setExpandedItem(expandedItem === itemId ? null : itemId);
//   };

//   // Toggle sidebar expansion
//   const toggleSidebar = () => {
//     setIsExpanded(!isExpanded);
//   };

//   // Toggle mobile menu
//   const toggleMobileMenu = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   return (
//     <>
//       {/* Mobile hamburger button */}
//       {isMobile && !mobileOpen && (
//         <button
//           onClick={toggleMobileMenu}
//           className="fixed z-50 bottom-10 left-10 bg-black text-white rounded-full p-3 shadow-lg"
//           aria-label="Open menu"
//         >
//           <GiHamburgerMenu size={20} />
//         </button>
//       )}

//       {/* Mobile overlay */}
//       {isMobile && mobileOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMobileMenu} />
//       )}

//       {/* Sidebar container */}
//       <div
//         className={`
//           fixed z-50 h-full bg-white border-r border-zinc-200 transition-all duration-300
//           ${isMobile && mobileOpen ? 'w-full' : isExpanded ? 'w-[280px]' : 'w-[80px]'}
//           ${isMobile ? (mobileOpen ? 'left-0' : '-left-full') : 'left-0'}
//         `}
//       >
//         {/* Mobile close button - FIXED: Made more prominent and visible */}
//         {isMobile && mobileOpen && (
//           <button
//             onClick={toggleMobileMenu}
//             className="absolute bottom-10 left-10 z-50 bg-black text-white p-3 rounded-full shadow-lg"
//           >
//             <IoCloseOutline size={24} />
//           </button>
//         )}

//         {/* Menu items */}
//         <div className="flex flex-col h-full pt-3 pb-4 px-3 justify-between">
//           <div className="space-y-1 overflow-y-auto">
//             {menuItems.map((item) => (
//               <div key={item.id} className="mb-0.5">
//                 {/* Main menu item */}
//                 <button
//                   onClick={() => toggleMenuItem(item.id)}
//                   className={`
//                     w-full flex items-center gap-3 rounded-lg p-1 py-1.5 text-left
//                     ${expandedItem === item.id ? 'bg-gray-200 font-medium' : ''}
//                   `}
//                 >
//                   <div className={`${isExpanded || (isMobile && mobileOpen) ? 'text-[#52595f] ml-1' : 'mx-auto'}`}>
//                     {React.cloneElement(item.icon, { 
//                       size: expandedItem === item.id ? 22 : 20 
//                     })}
//                   </div>

//                   {(isExpanded || (isMobile && mobileOpen)) && (
//                     <div className="flex justify-between items-center flex-grow">
//                       <span className={`text-sm ${expandedItem === item.id ? 'text-black' : 'text-[#52595f]'}`}>
//                         {item.label}
//                       </span>

//                       <div className="flex items-center">
//                         {item.badge && (
//                           <span className={`
//                             text-xs font-medium px-1.5 py-0.5 rounded mr-1
//                             ${item.badge.color === 'pink' ? 'bg-pink-100 text-pink-900' : 'bg-purple-100 text-purple-900'}
//                           `}>
//                             {item.badge.text}
//                           </span>
//                         )}

//                         {item.hasSubmenu && (
//                           <IoIosArrowForward
//                             size={14}
//                             className={`transition-transform ${expandedItem === item.id ? 'transform rotate-90' : ''}`}
//                           />
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </button>

//                 {/* Submenu */}
//                 {(isExpanded || (isMobile && mobileOpen)) && 
//                  expandedItem === item.id && 
//                  item.hasSubmenu && (
//                   <div className="ml-8 mt-1 space-y-1">
//                     {item.submenu.map((subItem, idx) => (
//                       <a
//                         key={idx}
//                         href={subItem.path}
//                         className="block py-1.5 text-sm text-[#52595f] hover:text-black"
//                       >
//                         {subItem.label}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Bottom time sensitive section */}
//           <div className={`mt-auto mb-20 ${!isExpanded && !isMobile ? 'hidden' : ''}`}>
//             <div className="border rounded-xl border-zinc-200 p-4">
//               <div className="text-xs text-gray-500">Time sensitive</div>
//               <div className="font-semibold mt-1">Onboarding</div>
//               <p className="text-sm mt-1 text-gray-700">
//                 83 days left to access a personalized product tour of our tools and features.
//               </p>
//               <button className="w-full mt-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-center text-sm">
//                 Connect to expert
//               </button>
//             </div>
//           </div>

//           {/* Toggle button */}
//           <div className={`w-full flex justify-end px-4 mt-3 ${isMobile ? 'hidden' : ''}`}>
//             <button
//               onClick={toggleSidebar}
//               className="border-2 w-6 h-6 focus:outline-none"
//             >
//               <div className="flex h-full">
//                 <div className={`w-1/2 h-full ${isExpanded ? 'bg-white' : 'bg-[#277e89]'}`}></div>
//                 <div className={`w-1/2 h-full ${isExpanded ? 'bg-[#277e89]' : 'bg-white'}`}></div>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main content spacing */}
//       <div className={`transition-all duration-300 ${
//         !isMobile ? (isExpanded ? 'ml-[280px]' : 'ml-[80px]') : 'ml-0'
//       }`}>
//         {/* Your page content would go here */}
//       </div>
//     </>
//   );
// }





















































































































// "use client";

// import React, { useState, useEffect } from "react"; // Added React import
// import { FiEdit3, FiHome, FiMessageSquare } from "react-icons/fi";
// import { TfiAnnouncement } from "react-icons/tfi";
// import { VscCircuitBoard } from "react-icons/vsc";
// import { TbScreenShare } from "react-icons/tb";
// import { HiOutlineUserGroup } from "react-icons/hi";
// import { BsBarChart, BsGlobe, BsFolder, BsBoxes } from "react-icons/bs"; // Fixed BSBarChart to BsBarChart
// import { IoCloseOutline } from "react-icons/io5";
// import { HiChevronRight } from "react-icons/hi";
// import { GiHamburgerMenu } from "react-icons/gi";

// export default function Sidebar() {
//   const [isExpanded, setIsExpanded] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [expandedItem, setExpandedItem] = useState("content"); // Content expanded by default

//   // Handle screen resize
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);

//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   // Close mobile sidebar when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         mobileOpen &&
//         !event.target.closest("#sidebar-container") &&
//         !event.target.closest("#hamburger-button")
//       ) {
//         setMobileOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [mobileOpen]);

//   const menuItems = [
//     {
//       id: "create",
//       icon: <FiEdit3 size={20} className="text-gray-600" />,
//       label: "Create",
//       path: "#create",
//       active: false,
//       hasSubmenu: false,
//       submenu: [],
//     },
//     {
//       id: "home",
//       icon: <FiHome size={20} className="text-gray-600" />,
//       label: "Home",
//       path: "#home",
//       active: false,
//       hasSubmenu: false,
//       submenu: [],
//     },
//     {
//       id: "campaigns",
//       icon: <TfiAnnouncement size={20} className="text-gray-600" />,
//       label: "Campaigns",
//       path: "#campaigns",
//       active: false,
//       hasSubmenu: false,
//       submenu: [],
//     },
//     {
//       id: "automations",
//       icon: <VscCircuitBoard size={20} className="text-gray-600" />,
//       label: "Automations",
//       path: "#automations",
//       active: false,
//       hasSubmenu: true,
//       submenu: [
//         { label: "All Flows", path: "#all-flows" },
//         { label: "Flow Templates", path: "#flow-templates" },
//         { label: "Transactional Email", path: "#transactional-email" },
//       ],
//     },
//     {
//       id: "sms",
//       icon: <FiMessageSquare size={20} className="text-gray-600" />,
//       label: "SMS",
//       path: "#sms",
//       badge: { text: "New", color: "pink" },
//       active: false,
//       hasSubmenu: false,
//       submenu: [],
//     },
//     {
//       id: "forms",
//       icon: <TbScreenShare size={20} className="text-gray-600" />,
//       label: "Forms",
//       path: "#forms",
//       badge: { text: "Beta", color: "purple" },
//       active: false,
//       hasSubmenu: true,
//       submenu: [{ label: "Other Forms", path: "#other-forms" }],
//     },
//     {
//       id: "audience",
//       icon: <HiOutlineUserGroup size={20} className="text-gray-600" />,
//       label: "Audience",
//       path: "#audience",
//       active: false,
//       hasSubmenu: true,
//       submenu: [
//         { label: "Audience Dashboard", path: "#audience-dashboard" },
//         { label: "Tags", path: "#tags" },
//         { label: "Segments", path: "#segments" },
//         { label: "Surveys", path: "#surveys" },
//         { label: "Subscriber Preferences", path: "#subscriber-preferences" },
//         { label: "Inbox", path: "#inbox" },
//       ],
//     },
//     {
//       id: "analytics",
//       icon: <BsBarChart size={20} className="text-gray-600" />,
//       label: "Analytics",
//       path: "#analytics",
//       active: false,
//       hasSubmenu: true,
//       submenu: [
//         { label: "Reports", path: "#reports" },
//         { label: "Custom Reports", path: "#custom-reports" },
//       ],
//     },
//     {
//       id: "website",
//       icon: <BsGlobe size={20} className="text-gray-600" />,
//       label: "Website",
//       path: "#website",
//       active: false,
//       hasSubmenu: true,
//       submenu: [
//         { label: "Settings", path: "#website-settings" },
//         { label: "Reports", path: "#website-reports" },
//       ],
//     },
//     {
//       id: "content",
//       icon: <BsFolder size={20} className="text-gray-600" />,
//       label: "Content",
//       path: "#content",
//       active: true,
//       hasSubmenu: true,
//       submenu: [
//         { label: "Creative Assistant", path: "#creative-assistant" },
//         { label: "Email templates", path: "#email-templates" },
//         { label: "Brand Kit", path: "#brand-kit" },
//       ],
//     },
//     {
//       id: "integrations",
//       icon: <BsBoxes size={20} className="text-gray-600" />,
//       label: "Integrations",
//       path: "#integrations",
//       active: false,
//       hasSubmenu: true,
//       submenu: [{ label: "Manage", path: "#manage-integrations" }],
//     },
//   ];

//   const toggleMenuItem = (itemId) => {
//     setExpandedItem(expandedItem === itemId ? null : itemId);
//   };

//   return (
//     <>
//       {/* Mobile hamburger button */}
//       {isMobile && !mobileOpen && (
//         <button
//           id="hamburger-button"
//           onClick={() => setMobileOpen(true)}
//           className="fixed z-50 bottom-6 left-6 bg-black text-white rounded-full p-3 shadow-lg"
//           aria-label="Open menu"
//         >
//           <GiHamburgerMenu size={20} />
//         </button>
//       )}

//       {/* Mobile overlay */}
//       {isMobile && mobileOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={() => setMobileOpen(false)}
//           aria-hidden="true"
//         />
//       )}

//       {/* Sidebar container */}
//       <div
//         id="sidebar-container"
//         className={`
//           fixed top-0 left-0 h-full bg-white z-50 transition-all duration-300 ease-in-out border-r border-gray-200 
//           ${isMobile && mobileOpen ? "w-full" : isExpanded ? "w-[280px]" : "w-[80px]"}
//           ${isMobile ? (mobileOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"}
//         `}
//       >
//         {/* Mobile close button */}
//         {isMobile && mobileOpen && (
//           <button
//             onClick={() => setMobileOpen(false)}
//             className="absolute top-4 right-4 p-1 text-gray-500 hover:text-gray-700"
//             aria-label="Close menu"
//           >
//             <IoCloseOutline size={24} />
//           </button>
//         )}

//         {/* Navigation menu */}
//         <nav className="h-full flex flex-col">
//           <div className="flex-grow overflow-y-auto py-2">
//             <ul className="px-2 space-y-1">
//               {menuItems.map((item) => (
//                 <li key={item.id} className="relative">
//                   <a
//                     href={item.path}
//                     onClick={() => toggleMenuItem(item.id)}
//                     className={`
//                       flex items-center px-2 py-2 rounded-md transition-all
//                       ${item.active ? "bg-gray-100" : "hover:bg-gray-50"}
//                     `}
//                   >
//                     <div className="flex items-center justify-center min-w-8">
//                       {React.cloneElement(item.icon, {
//                         size: expandedItem === item.id ? 22 : 20,
//                       })}
//                     </div>

//                     {(isExpanded || (isMobile && mobileOpen)) && (
//                       <div className="ml-2 flex-grow flex items-center justify-between">
//                         <span
//                           className={`text-sm ${
//                             item.active ? "text-black" : "text-gray-700"
//                           }`}
//                         >
//                           {item.label}
//                         </span>

//                         <div className="flex items-center">
//                           {item.badge && (
//                             <span
//                               className={`
//                                 text-xs px-1.5 py-0.5 rounded mr-2
//                                 ${
//                                   item.badge.color === "pink"
//                                     ? "bg-pink-100 text-pink-800"
//                                     : "bg-purple-100 text-purple-800"
//                                 }
//                               `}
//                             >
//                               {item.badge.text}
//                             </span>
//                           )}

//                           {item.hasSubmenu && item.submenu.length > 0 && (
//                             <HiChevronRight
//                               size={16}
//                               className={`transition-transform ${
//                                 expandedItem === item.id ? "transform rotate-90" : ""
//                               }`}
//                             />
//                           )}
//                         </div>
//                       </div>
//                     )}
//                   </a>

//                   {/* Submenu */}
//                   {(isExpanded || (isMobile && mobileOpen)) &&
//                     expandedItem === item.id &&
//                     item.hasSubmenu &&
//                     item.submenu.length > 0 && (
//                       <ul className="pl-10 py-1 space-y-1">
//                         {item.submenu.map((subItem, subIndex) => (
//                           <li key={subIndex}>
//                             <a
//                               href={subItem.path}
//                               className="block py-1.5 px-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded"
//                             >
//                               {subItem.label}
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Bottom section */}
//           {(isExpanded || (isMobile && mobileOpen)) && (
//             <div className="p-3 mt-auto mb-20">
//               <div className="border rounded-xl p-4">
//                 <div className="text-xs text-gray-500">Time sensitive</div>
//                 <h4 className="font-medium text-sm mt-1">Onboarding</h4>
//                 <p className="text-xs text-gray-700 mt-1">
//                   83 days left to access a personalized product tour of our tools and features.
//                 </p>
//                 <button className="w-full mt-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm">
//                   Connect to expert
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Toggle button for desktop */}
//           {!isMobile && (
//             <button
//               onClick={() => setIsExpanded(!isExpanded)}
//               className="absolute bottom-4 right-3 border border-teal-500 rounded p-1"
//               aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
//             >
//               <div className="w-5 h-5 flex">
//                 <div
//                   className={`w-1/2 h-full ${isExpanded ? "bg-white" : "bg-teal-500"}`}
//                 ></div>
//                 <div
//                   className={`w-1/2 h-full ${isExpanded ? "bg-teal-500" : "bg-white"}`}
//                 ></div>
//               </div>
//             </button>
//           )}
//         </nav>
//       </div>

//       {/* Main content margin compensation */}
//       <div
//         className={`transition-all duration-300 ${
//           !isMobile ? (isExpanded ? "ml-[280px]" : "ml-[80px]") : "ml-0"
//         }`}
//       >
//         {/* Your main content would go here */}
//       </div>
//     </>
//   );
// }

































































































































































































// "use client";

// import React, { useState, useEffect } from "react";
// import { FiEdit3, FiHome, FiMessageSquare } from "react-icons/fi";
// import { TfiAnnouncement } from "react-icons/tfi";
// import { VscCircuitBoard } from "react-icons/vsc";
// import { TbScreenShare } from "react-icons/tb";
// import { HiOutlineUserGroup } from "react-icons/hi";
// import { BsBarChart, BsGlobe, BsFolder, BsBoxes } from "react-icons/bs";
// import { IoCloseOutline } from "react-icons/io5";
// import { HiChevronRight } from "react-icons/hi";
// import { GiHamburgerMenu } from "react-icons/gi";

// export default function Sidebar() {
//   const [isExpanded, setIsExpanded] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [expandedItem, setExpandedItem] = useState("content"); // Content submenu expanded by default
//   const [activeItem, setActiveItem] = useState(null); // Track clicked menu item

//   // Handle screen resize
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);

//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   // Close mobile sidebar when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         mobileOpen &&
//         !event.target.closest("#sidebar-container") &&
//         !event.target.closest("#hamburger-button")
//       ) {
//         setMobileOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [mobileOpen]);

//   const menuItems = [
//     {
//       id: "create",
//       icon: <FiEdit3 size={20} className="text-gray-600" />,
//       label: "Create",
//       path: "#create",
//       hasSubmenu: false,
//       submenu: [],
//     },
//     {
//       id: "home",
//       icon: <FiHome size={20} className="text-gray-600" />,
//       label: "Home",
//       path: "#home",
//       hasSubmenu: false,
//       submenu: [],
//     },
//     {
//       id: "campaigns",
//       icon: <TfiAnnouncement size={20} className="text-gray-600" />,
//       label: "Campaigns",
//       path: "#campaigns",
//       hasSubmenu: false,
//       submenu: [],
//     },
//     {
//       id: "automations",
//       icon: <VscCircuitBoard size={20} className="text-gray-600" />,
//       label: "Automations",
//       path: "#automations",
//       hasSubmenu: true,
//       submenu: [
//         { label: "All Flows", path: "#all-flows" },
//         { label: "Flow Templates", path: "#flow-templates" },
//         { label: "Transactional Email", path: "#transactional-email" },
//       ],
//     },
//     {
//       id: "sms",
//       icon: <FiMessageSquare size={20} className="text-gray-600" />,
//       label: "SMS",
//       path: "#sms",
//       badge: { text: "New", color: "pink" },
//       hasSubmenu: false,
//       submenu: [],
//     },
//     {
//       id: "forms",
//       icon: <TbScreenShare size={20} className="text-gray-600" />,
//       label: "Forms",
//       path: "#forms",
//       badge: { text: "Beta", color: "purple" },
//       hasSubmenu: true,
//       submenu: [{ label: "Other Forms", path: "#other-forms" }],
//     },
//     {
//       id: "audience",
//       icon: <HiOutlineUserGroup size={20} className="text-gray-600" />,
//       label: "Audience",
//       path: "#audience",
//       hasSubmenu: true,
//       submenu: [
//         { label: "Audience Dashboard", path: "#audience-dashboard" },
//         { label: "Tags", path: "#tags" },
//         { label: "Segments", path: "#segments" },
//         { label: "Surveys", path: "#surveys" },
//         { label: "Subscriber Preferences", path: "#subscriber-preferences" },
//         { label: "Inbox", path: "#inbox" },
//       ],
//     },
//     {
//       id: "analytics",
//       icon: <BsBarChart size={20} className="text-gray-600" />,
//       label: "Analytics",
//       path: "analytics",
//       hasSubmenu: true,
//       submenu: [
//         { label: "Reports", path: "#reports" },
//         { label: "Custom Reports", path: "#custom-reports" },
//       ],
//     },
//     {
//       id: "website",
//       icon: <BsGlobe size={20} className="text-gray-600" />,
//       label: "Website",
//       path: "#website",
//       hasSubmenu: true,
//       submenu: [
//         { label: "Settings", path: "#website-settings" },
//         { label: "Reports", path: "#website-reports" },
//       ],
//     },
//     {
//       id: "content",
//       icon: <BsFolder size={20} className="text-gray-600" />,
//       label: "Content",
//       path: "#content",
//       hasSubmenu: true,
//       submenu: [
//         { label: "Creative Assistant", path: "#creative-assistant" },
//         { label: "Email templates", path: "#email-templates" },
//         { label: "Brand Kit", path: "#brand-kit" },
//       ],
//     },
//     {
//       id: "integrations",
//       icon: <BsBoxes size={20} className="text-gray-600" />,
//       label: "Integrations",
//       path: "#integrations",
//       hasSubmenu: true,
//       submenu: [{ label: "Manage", path: "#manage-integrations" }],
//     },
//   ];

//   const handleMenuClick = (itemId) => {
//     setActiveItem(itemId); // Set clicked item as active
//     setExpandedItem(expandedItem === itemId ? null : itemId); // Toggle submenu
//   };

//   return (
//     <>
//       {/* Mobile hamburger button */}
//       {isMobile && !mobileOpen && (
//         <button
//           id="hamburger-button"
//           onClick={() => setMobileOpen(true)}
//           className="fixed z-50 bottom-6 left-6 bg-black text-white rounded-full p-3 shadow-lg"
//           aria-label="Open menu"
//         >
//           <GiHamburgerMenu size={20} />
//         </button>
//       )}

//       {/* Mobile overlay */}
//       {isMobile && mobileOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={() => setMobileOpen(false)}
//           aria-hidden="true"
//         />
//       )}

//       {/* Sidebar container */}
//       <div
//         id="sidebar-container"
//         className={`
//           fixed top-[49px] left-0 h-[calc(100vh-49px)] bg-white z-50 transition-all duration-300 ease-in-out border-r border-gray-200 
//           ${isMobile && mobileOpen ? "w-full" : isExpanded ? "w-[280px]" : "w-[80px]"}
//           ${isMobile ? (mobileOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"}
//         `}
//       >
//         {/* Mobile close button */}
//         {isMobile && mobileOpen && (
//           <button
//             onClick={() => setMobileOpen(false)}
//             className="absolute top-4 right-4 p-1 text-gray-500 hover:text-gray-700"
//             aria-label="Close menu"
//           >
//             <IoCloseOutline size={24} />
//           </button>
//         )}

//         {/* Navigation menu */}
//         <nav className="h-full flex flex-col">
//           <div className="flex-grow overflow-y-auto py-2">
//             <ul className="px-2 space-y-1">
//               {menuItems.map((item) => (
//                 <li key={item.id} className="relative">
//                   <a
//                     href={item.path}
//                     onClick={() => handleMenuClick(item.id)}
//                     className={`
//                       flex items-center px-2 py-2 rounded-md transition-all
//                       ${activeItem === item.id ? "bg-gray-100" : "hover:bg-gray-50"}
//                     `}
//                   >
//                     <div className="flex items-center justify-center min-w-8">
//                       {React.cloneElement(item.icon, {
//                         size: activeItem === item.id ? 22 : 20,
//                       })}
//                     </div>

//                     {(isExpanded || (isMobile && mobileOpen)) && (
//                       <div className="ml-2 flex-grow flex items-center justify-between">
//                         <span
//                           className={`text-sm ${
//                             activeItem === item.id ? "text-black" : "text-gray-700"
//                           }`}
//                         >
//                           {item.label}
//                         </span>

//                         <div className="flex items-center">
//                           {item.badge && (
//                             <span
//                               className={`
//                                 text-xs px-1.5 py-0.5 rounded mr-2
//                                 ${
//                                   item.badge.color === "pink"
//                                     ? "bg-pink-100 text-pink-800"
//                                     : "bg-purple-100 text-purple-800"
//                                 }
//                               `}
//                             >
//                               {item.badge.text}
//                             </span>
//                           )}

//                           {item.hasSubmenu && item.submenu.length > 0 && (
//                             <HiChevronRight
//                               size={16}
//                               className={`transition-transform ${
//                                 expandedItem === item.id ? "transform rotate-90" : ""
//                               }`}
//                             />
//                           )}
//                         </div>
//                       </div>
//                     )}
//                   </a>

//                   {/* Submenu */}
//                   {(isExpanded || (isMobile && mobileOpen)) &&
//                     expandedItem === item.id &&
//                     item.hasSubmenu &&
//                     item.submenu.length > 0 && (
//                       <ul className="pl-10 py-1 space-y-1">
//                         {item.submenu.map((subItem, subIndex) => (
//                           <li key={subIndex}>
//                             <a
//                               href={subItem.path}
//                               className="block py-1.5 px-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded"
//                             >
//                               {subItem.label}
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Bottom section */}
//           {(isExpanded || (isMobile && mobileOpen)) && (
//             <div className="p-3 mt-auto mb-20">
//               <div className="border rounded-xl p-4">
//                 <div className="text-xs text-gray-500">Time sensitive</div>
//                 <h4 className="font-medium text-sm mt-1">Onboarding</h4>
//                 <p className="text-xs text-gray-700 mt-1">
//                   83 days left to access a personalized product tour of our tools and features.
//                 </p>
//                 <button className="w-full mt-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm">
//                   Connect to expert
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Toggle button for desktop */}
//           {!isMobile && (
//             <button
//               onClick={() => setIsExpanded(!isExpanded)}
//               className="absolute bottom-4 right-3 border border-teal-500 rounded p-1"
//               aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
//             >
//               <div className="w-5 h-5 flex">
//                 <div
//                   className={`w-1/2 h-full ${isExpanded ? "bg-white" : "bg-teal-500"}`}
//                 ></div>
//                 <div
//                   className={`w-1/2 h-full ${isExpanded ? "bg-teal-500" : "bg-white"}`}
//                 ></div>
//               </div>
//             </button>
//           )}
//         </nav>
//       </div>

//       {/* Main content margin compensation */}
//       <div
//         className={`transition-all duration-300 ${
//           !isMobile ? (isExpanded ? "ml-[280px]" : "ml-[80px]") : "ml-0"
//         }`}
//       >
//         {/* Your main content would go here */}
//       </div>
//     </>
//   );
// }






































































































































































"use client";

import React, { useState, useEffect } from "react";
import { FiEdit3, FiHome, FiMessageSquare } from "react-icons/fi";
import { TfiAnnouncement } from "react-icons/tfi";
import { VscCircuitBoard } from "react-icons/vsc";
import { TbScreenShare } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsBarChart, BsGlobe, BsFolder, BsBoxes } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { HiChevronRight } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [expandedItem, setExpandedItem] = useState("content");
    const [activeItem, setActiveItem] = useState(null);

    // Handle screen resize
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // Close mobile sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                mobileOpen &&
                !event.target.closest("#sidebar-container") &&
                !event.target.closest("#hamburger-button")
            ) {
                setMobileOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [mobileOpen]);

    const menuItems = [
        {
            id: "create",
            icon: <FiEdit3 size={20} className="text-gray-600" />,
            label: "Create",
            path: "#create",
            hasSubmenu: false,
            submenu: [],
        },
        {
            id: "home",
            icon: <FiHome size={20} className="text-gray-600" />,
            label: "Home",
            path: "#home",
            hasSubmenu: false,
            submenu: [],
        },
        {
            id: "campaigns",
            icon: <TfiAnnouncement size={20} className="text-gray-600" />,
            label: "Campaigns",
            path: "#campaigns",
            hasSubmenu: false,
            submenu: [],
        },
        {
            id: "automations",
            icon: <VscCircuitBoard size={20} className="text-gray-600" />,
            label: "Automations",
            path: "#automations",
            hasSubmenu: true,
            submenu: [
                { label: "All Flows", path: "#all-flows" },
                { label: "Flow Templates", path: "#flow-templates" },
                { label: "Transactional Email", path: "#transactional-email" },
            ],
        },
        {
            id: "sms",
            icon: <FiMessageSquare size={20} className="text-gray-600" />,
            label: "SMS",
            path: "#sms",
            badge: { text: "New", color: "pink" },
            hasSubmenu: false,
            submenu: [],
        },
        {
            id: "forms",
            icon: <TbScreenShare size={20} className="text-gray-600" />,
            label: "Forms",
            path: "#forms",
            badge: { text: "Beta", color: "purple" },
            hasSubmenu: true,
            submenu: [{ label: "Other Forms", path: "#other-forms" }],
        },
        {
            id: "audience",
            icon: <HiOutlineUserGroup size={20} className="text-gray-600" />,
            label: "Audience",
            path: "#audience",
            hasSubmenu: true,
            submenu: [
                { label: "Audience Dashboard", path: "#audience-dashboard" },
                { label: "Tags", path: "#tags" },
                { label: "Segments", path: "#segments" },
                { label: "Surveys", path: "#surveys" },
                { label: "Subscriber Preferences", path: "#subscriber-preferences" },
                { label: "Inbox", path: "#inbox" },
            ],
        },
        {
            id: "analytics",
            icon: <BsBarChart size={20} className="text-gray-600" />,
            label: "Analytics",
            path: "#analytics",
            hasSubmenu: true,
            submenu: [
                { label: "Reports", path: "#reports" },
                { label: "Custom Reports", path: "#custom-reports" },
            ],
        },
        {
            id: "website",
            icon: <BsGlobe size={20} className="text-gray-600" />,
            label: "Website",
            path: "#website",
            hasSubmenu: true,
            submenu: [
                { label: "Settings", path: "#website-settings" },
                { label: "Reports", path: "#website-reports" },
            ],
        },
        {
            id: "content",
            icon: <BsFolder size={20} className="text-gray-600" />,
            label: "Content",
            path: "#content",
            hasSubmenu: true,
            submenu: [
                { label: "Creative Assistant", path: "#creative-assistant" },
                { label: "Email templates", path: "#email-templates" },
                { label: "Brand Kit", path: "#brand-kit" },
            ],
        },
        {
            id: "integrations",
            icon: <BsBoxes size={20} className="text-gray-600" />,
            label: "Integrations",
            path: "#integrations",
            hasSubmenu: true,
            submenu: [{ label: "Manage", path: "#manage-integrations" }],
        },
    ];

    const handleMenuClick = (itemId) => {
        setActiveItem(itemId);
        setExpandedItem(expandedItem === itemId ? null : itemId);
    };

    return (
        <>
            {/* Mobile hamburger button */}
            {isMobile && !mobileOpen && (
                <button
                    id="hamburger-button"
                    onClick={() => setMobileOpen(true)}
                    className="fixed z-50 bottom-6 left-6 bg-black text-white rounded-full p-3 shadow-lg"
                    aria-label="Open menu"
                >
                    <GiHamburgerMenu size={20} />
                </button>
            )}

            {/* Mobile overlay */}
            {isMobile && mobileOpen && (
                <div
                    className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-40"
                    onClick={() => setMobileOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar container */}
            <div
                id="sidebar-container"
                className={`
          fixed top-[49px] left-0 h-[calc(100vh-49px)] bg-white z-50 transition-all duration-300 ease-in-out border-r border-gray-200 
          ${isMobile && mobileOpen ? "w-full" : isExpanded ? "w-[280px]" : "w-[80px]"}
          ${isMobile ? (mobileOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"}
        `}
            >
                {/* Mobile close button */}
                {isMobile && mobileOpen && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setMobileOpen(false);
                        }}
                        className="absolute top-4 right-4 p-1 text-gray-500 hover:text-gray-700 z-50"
                        aria-label="Close menu"
                    >
                        <IoCloseOutline size={24} />
                    </button>
                )}

                {/* Navigation menu */}
                <nav className="h-full flex flex-col">
                    <div className="flex-grow overflow-y-auto py-2">
                        <ul className="px-2 space-y-1">
                            {menuItems.map((item) => (
                                <li key={item.id} className="relative">
                                    <a
                                        href={item.path}
                                        onClick={() => handleMenuClick(item.id)}
                                        className={`
                      flex items-center px-2 py-2 rounded-md transition-all
                      ${activeItem === item.id ? "bg-gray-100" : "hover:bg-gray-50"}
                    `}
                                    >
                                        <div className="flex items-center justify-center min-w-8">
                                            {React.cloneElement(item.icon, {
                                                size: activeItem === item.id ? 22 : 20,
                                            })}
                                        </div>

                                        {(isExpanded || (isMobile && mobileOpen)) && (
                                            <div className="ml-2 flex-grow flex items-center justify-between">
                                                <span
                                                    className={`text-sm ${activeItem === item.id ? "text-black" : "text-gray-700"
                                                        }`}
                                                >
                                                    {item.label}
                                                </span>

                                                <div className="flex items-center">
                                                    {item.badge && (
                                                        <span
                                                            className={`
                                text-xs px-1.5 py-0.5 rounded mr-2
                                ${item.badge.color === "pink"
                                                                    ? "bg-pink-100 text-pink-800"
                                                                    : "bg-purple-100 text-purple-800"
                                                                }
                              `}
                                                        >
                                                            {item.badge.text}
                                                        </span>
                                                    )}

                                                    {item.hasSubmenu && item.submenu.length > 0 && (
                                                        <HiChevronRight
                                                            size={16}
                                                            className={`transition-transform ${expandedItem === item.id ? "transform rotate-90" : ""
                                                                }`}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </a>

                                    {/* Submenu */}
                                    {(isExpanded || (isMobile && mobileOpen)) &&
                                        expandedItem === item.id &&
                                        item.hasSubmenu &&
                                        item.submenu.length > 0 && (
                                            <ul className="pl-10 py-1 space-y-1">
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <a
                                                            href={subItem.path}
                                                            className="block py-1.5 px-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded"
                                                        >
                                                            {subItem.label}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bottom section */}
                    {(isExpanded || (isMobile && mobileOpen)) && (
                        <div className="p-3 mt-auto mb-20">
                            <div className="border rounded-xl p-4">
                                <div className="text-xs text-gray-500">Time sensitive</div>
                                <h4 className="font-medium text-sm mt-1">Onboarding</h4>
                                <p className="text-xs text-gray-700 mt-1">
                                    83 days left to access a personalized product tour of our tools and features.
                                </p>
                                <button className="w-full mt-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm">
                                    Connect to expert
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Toggle button for desktop */}
                    {!isMobile && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="absolute bottom-4 right-3 border border-teal-500 rounded p-1"
                            aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
                        >
                            <div className="w-5 h-5 flex">
                                <div
                                    className={`w-1/2 h-full ${isExpanded ? "bg-white" : "bg-teal-500"}`}
                                ></div>
                                <div
                                    className={`w-1/2 h-full ${isExpanded ? "bg-teal-500" : "bg-white"}`}
                                ></div>
                            </div>
                        </button>
                    )}
                </nav>
            </div>

            {/* Main content margin compensation */}
            <div
                className={`transition-all duration-300 ${!isMobile ? (isExpanded ? "ml-[280px]" : "ml-[80px]") : "ml-0"
                    }`}
            >
                {/* Your main content would go here */}
            </div>
        </>
    );
}





