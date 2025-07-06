// "use client";
// // app/home/OnboardingCarousel.js
// import React, { useState, useRef } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const OnboardingCarousel = () => {
//   // Tasks data based on the images
//   const tasks = [
//     {
//       id: 'contacts',
//       title: 'Add your contacts',
//       description: 'Upload your list of subscribers or import them from another app.',
//       timeEstimate: '4 min',
//       completed: false,
//       icon: '/icons/contacts.svg'
//     },
//     {
//       id: 'integration',
//       title: 'Connect an integration',
//       description: 'Leverage data to create more automated, personalized omni-channel marketing communications.',
//       timeEstimate: '2 min',
//       completed: false,
//       icons: ['/icons/wix.svg', '/icons/shopify.svg']
//     },
//     {
//       id: 'brand',
//       title: 'Import your brand',
//       description: "We'll create email designs using your fonts, logos, colors and images.",
//       timeEstimate: '2 seconds',
//       completed: false,
//       icon: '/icons/brand.svg'
//     },
//     {
//       id: 'domain',
//       title: 'Authenticate your email domain',
//       description: 'Strongly recommended to improve deliverability, avoid spam folders, and build your sender reputation.',
//       timeEstimate: '4 min',
//       completed: false,
//       icon: '/icons/email.svg'
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleTasks] = useState(3); // Show 3 tasks at a time
//   const carouselRef = useRef(null);

//   // Calculate progress
//   const completedTasks = tasks.filter(task => task.completed).length;
//   const progress = (completedTasks / tasks.length) * 100;

//   // Navigation functions
//   const handleNext = () => {
//     if (currentIndex < tasks.length - visibleTasks) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   // Check if buttons should be disabled
//   const isPrevDisabled = currentIndex === 0;
//   const isNextDisabled = currentIndex >= tasks.length - visibleTasks;

//   return (
//     <div className="max-w-6xl mx-auto p-8">
//       {/* Header and Progress */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold text-gray-800 mb-2">Finish setting up your account</h2>
//         <div className="flex items-center">
//           <span className="text-gray-600 mr-2">{Math.round(progress)}%</span>
//           <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
//             <div 
//               className="h-full bg-blue-600 rounded-full" 
//               style={{ width: `${progress}%` }}
//             ></div>
//           </div>
//         </div>
//         <p className="text-gray-600 mt-1">
//           {completedTasks} of {tasks.length} tasks completed
//         </p>
//       </div>

//       {/* Task Cards */}
//       <div className="relative">
//         <div className="overflow-hidden">
//           <motion.div 
//             ref={carouselRef}
//             className="flex gap-5"
//             initial={false}
//             animate={{ x: -currentIndex * (320 + 20) }} // Card width + gap
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//           >
//             {tasks.map((task) => (
//               <div 
//                 key={task.id}
//                 className="flex-shrink-0 w-80 border border-gray-200 rounded-lg p-6 bg-white"
//               >
//                 <div className="flex items-start justify-between">
//                   {/* Checkbox */}
//                   <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
//                     {task.completed && (
//                       <div className="w-4 h-4 rounded-full bg-blue-600"></div>
//                     )}
//                   </div>

//                   {/* Icons */}
//                   <div className="flex items-center">
//                     {task.icons ? (
//                       task.icons.map((icon, idx) => (
//                         <div key={idx} className="ml-1">
//                           <Image 
//                             src={icon} 
//                             alt="" 
//                             width={24} 
//                             height={24}
//                             className="rounded-full"
//                           />
//                         </div>
//                       ))
//                     ) : task.icon ? (
//                       <div className="ml-1">
//                         <Image 
//                           src={task.icon} 
//                           alt="" 
//                           width={24} 
//                           height={24}
//                           className="rounded-full"
//                         />
//                       </div>
//                     ) : null}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="mt-4">
//                   <h3 className="text-lg font-medium text-teal-600 mb-2">{task.title}</h3>
//                   <p className="text-gray-600 mb-4">{task.description}</p>
//                   <p className="text-gray-400 text-sm">{task.timeEstimate}</p>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Navigation Buttons */}
//         <div className="absolute bottom-0 right-0 -mb-12 flex gap-2">
//           <button
//             onClick={handlePrev}
//             disabled={isPrevDisabled}
//             className={`p-3 border rounded-md ${
//               isPrevDisabled ? 'text-gray-300 border-gray-200' : 'text-gray-600 border-gray-300 hover:bg-gray-50'
//             }`}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//               <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
//             </svg>
//           </button>
//           <button
//             onClick={handleNext}
//             disabled={isNextDisabled}
//             className={`p-3 border rounded-md ${
//               isNextDisabled ? 'text-gray-300 border-gray-200' : 'text-gray-600 border-gray-300 hover:bg-gray-50'
//             }`}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//               <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OnboardingCarousel;











































































// "use client";

// import React, { useState } from 'react';

// const OnboardingCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handlePrev = () => {
//     if (currentSlide > 0) setCurrentSlide(0);
//   };

//   const handleNext = () => {
//     if (currentSlide < 1) setCurrentSlide(1);
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-8 mt-4 font-sans">
//       {/* Header */}
//       <div className="mb-8">
//         <h2 className="text-[22px] font-medium text-[#333333] mb-4">Finish setting up your account</h2>

//         {/* Progress bar */}
//         <div className="w-full max-w-[330px] h-1 bg-[#f1f1f1] mb-1.5">
//           <div className="h-1 bg-[#0077ff] rounded-sm" style={{ width: '0%' }}></div>
//         </div>

//         <p className="text-sm text-[#666666]">0 of 4 tasks completed</p>
//       </div>

//       {/* Task Cards */}
//       <div className="relative">

//         <div className="transition-all duration-300 ease-in-out">
//           {currentSlide === 0 && (
//             <div className="flex space-x-5">
//               {/* Card 1 - Connect an integration */}
//               <div className="w-[330px] border border-[#e6e6e6] rounded-lg p-6 bg-white">
//                 <div className="flex justify-between">
//                   {/* Empty checkbox */}
//                   <div className="w-6 h-6 rounded-full border-2 border-[#dddddd]"></div>

//                   {/* Integration icons */}
//                   <div className="flex">
//                     <div className="w-6 h-6 bg-[#eef6ff] rounded-full flex items-center justify-center">
//                       <span className="text-xs font-bold text-[#0077ff]">W</span>
//                     </div>
//                     <div className="w-6 h-6 ml-1 bg-[#e6f7f4] rounded-full flex items-center justify-center">
//                       <span className="text-xs font-bold text-[#00aa8a]">S</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <h3 className="text-lg font-medium text-[#00aa8a] mb-2">Connect an integration</h3>
//                   <p className="text-[14px] text-[#666666] mb-4">Leverage data to create more automated, personalized omni-channel marketing communications.</p>
//                   <p className="text-[13px] text-[#999999]">2 min</p>
//                 </div>
//               </div>

//               {/* Card 2 - Import your brand */}
//               <div className="w-[330px] border border-[#e6e6e6] rounded-lg p-6 bg-white">
//                 <div className="flex justify-between">
//                   <div className="w-6 h-6 rounded-full border-2 border-[#dddddd]"></div>
//                   <div className="flex">
//                     <div className="w-6 h-6 flex items-center justify-center">
//                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2">
//                         <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
//                         <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
//                       </svg>
//                     </div>
//                     <div className="w-6 h-6 ml-1 flex items-center justify-center">
//                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2">
//                         <path d="M12 4h3l2 4h3a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h3l2-4z" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <h3 className="text-lg font-medium text-[#00aa8a] mb-2">Import your brand</h3>
//                   <p className="text-[14px] text-[#666666] mb-4">We'll create email designs using your fonts, logos, colors and images.</p>
//                   <p className="text-[13px] text-[#999999]">2 seconds</p>
//                 </div>
//               </div>

//               {/* Card 3 - Authenticate your email domain */}
//               <div className="w-[330px] border border-[#e6e6e6] rounded-lg p-6 bg-white">
//                 <div className="flex justify-between">
//                   <div className="w-6 h-6 rounded-full border-2 border-[#dddddd]"></div>
//                   <div className="w-6 h-6 flex items-center justify-center">
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2">
//                       <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
//                       <polyline points="22,6 12,13 2,6"></polyline>
//                     </svg>
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <h3 className="text-lg font-medium text-[#00aa8a] mb-2">Authenticate your email domain</h3>
//                   <p className="text-[14px] text-[#666666] mb-4">Strongly recommended to improve deliverability, avoid spam folders, and build your sender reputation.</p>
//                   <p className="text-[13px] text-[#999999]">4 min</p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Second slide */}
//           {currentSlide === 1 && (
//             <div className="flex space-x-5">
//               {/* Card 1 - Add your contacts */}
//               <div className="w-[330px] border border-[#e6e6e6] rounded-lg p-6 bg-white">
//                 <div className="flex justify-between">
//                   <div className="w-6 h-6 rounded-full border-2 border-[#dddddd]"></div>
//                   <div className="w-6 h-6 flex items-center justify-center">
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2">
//                       <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//                       <circle cx="12" cy="7" r="4"></circle>
//                     </svg>
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <h3 className="text-lg font-medium text-[#00aa8a] mb-2">Add your contacts</h3>
//                   <p className="text-[14px] text-[#666666] mb-4">Upload your list of subscribers or import them from another app.</p>
//                   <p className="text-[13px] text-[#999999]">4 min</p>
//                 </div>
//               </div>

//               {/* Card 2 - Connect an integration */}
//               <div className="w-[330px] border border-[#e6e6e6] rounded-lg p-6 bg-white">
//                 <div className="flex justify-between">
//                   <div className="w-6 h-6 rounded-full border-2 border-[#dddddd]"></div>
//                   <div className="flex">
//                     <div className="w-6 h-6 bg-[#eef6ff] rounded-full flex items-center justify-center">
//                       <span className="text-xs font-bold text-[#0077ff]">W</span>
//                     </div>
//                     <div className="w-6 h-6 ml-1 bg-[#e6f7f4] rounded-full flex items-center justify-center">
//                       <span className="text-xs font-bold text-[#00aa8a]">S</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <h3 className="text-lg font-medium text-[#00aa8a] mb-2">Connect an integration</h3>
//                   <p className="text-[14px] text-[#666666] mb-4">Leverage data to create more automated, personalized omni-channel marketing communications.</p>
//                   <p className="text-[13px] text-[#999999]">2 min</p>
//                 </div>
//               </div>

//               {/* Card 3 - Import your brand */}
//               <div className="w-[330px] border border-[#e6e6e6] rounded-lg p-6 bg-white">
//                 <div className="flex justify-between">
//                   <div className="w-6 h-6 rounded-full border-2 border-[#dddddd]"></div>
//                   <div className="flex">
//                     <div className="w-6 h-6 flex items-center justify-center">
//                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2">
//                         <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
//                         <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
//                       </svg>
//                     </div>
//                     <div className="w-6 h-6 ml-1 flex items-center justify-center">
//                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2">
//                         <path d="M12 4h3l2 4h3a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h3l2-4z" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <h3 className="text-lg font-medium text-[#00aa8a] mb-2">Import your brand</h3>
//                   <p className="text-[14px] text-[#666666] mb-4">We'll create email designs using your fonts, logos, colors and images.</p>
//                   <p className="text-[13px] text-[#999999]">2 seconds</p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Navigation buttons */}
//         <div className="absolute -bottom-12 right-0 flex space-x-2">
//           <button
//             onClick={handlePrev}
//             disabled={currentSlide === 0}
//             className={`p-2 border rounded-md ${currentSlide === 0 ? 'text-[#cccccc] border-[#e6e6e6]' : 'text-[#666666] border-[#dddddd]'}`}
//             aria-label="Previous cards"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
//               <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
//             </svg>
//           </button>
//           <button
//             onClick={handleNext}
//             disabled={currentSlide === 1}
//             className={`p-2 border rounded-md ${currentSlide === 1 ? 'text-[#cccccc] border-[#e6e6e6]' : 'text-[#666666] border-[#dddddd]'}`}
//             aria-label="Next cards"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
//               <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OnboardingCarousel;

































































// "use client";

// import React, { useState } from 'react';

// const OnboardingCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlides = 2; // Two slides based on the provided data
//   const tasks = [
//     [
//       {
//         title: "Connect an integration",
//         description: "Leverage data to create more automated, personalized omni-channel marketing communications.",
//         time: "2 min",
//         icons: [
//           { letter: "W", bgColor: "bg-[#eef6ff]", textColor: "text-[#0077ff]" },
//           { letter: "C", bgColor: "bg-[#e6f7f4]", textColor: "text-[#00aa8a]" },
//         ],
//       },
//       {
//         title: "Import your brand",
//         description: "We'll create email designs using your fonts, logos, colors and images.",
//         time: "2 seconds",
//         icons: [
//           { svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" /><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg> },
//           { svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2"><path d="M12 4h3l2 4h3a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h3l2-4z" /></svg> },
//         ],
//       },
//       {
//         title: "Authenticate your email domain",
//         description: "Strongly recommended to improve deliverability, avoid spam folders, and build your sender reputation.",
//         time: "4 min",
//         icons: [
//           { svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
//         ],
//       },
//     ],
//     [
//       {
//         title: "Add your contacts",
//         description: "Upload your list of subscribers or import them from another app.",
//         time: "4 min",
//         icons: [
//           { svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> },
//         ],
//       },
//       {
//         title: "Connect an integration",
//         description: "Leverage data to create more automated, personalized omni-channel marketing communications.",
//         time: "2 min",
//         icons: [
//           { letter: "W", bgColor: "bg-[#eef6ff]", textColor: "text-[#0077ff]" },
//           { letter: "C", bgColor: "bg-[#e6f7f4]", textColor: "text-[#00aa8a]" },
//         ],
//       },
//       {
//         title: "Import your brand",
//         description: "We'll create email designs using your fonts, logos, colors and images.",
//         time: "2 seconds",
//         icons: [
//           { svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" /><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg> },
//           { svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2"><path d="M12 4h3l2 4h3a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h3l2-4z" /></svg> },
//         ],
//       },
//     ],
//   ];

//   const totalTasks = 4;
//   const completedTasks = 0;

//   const handlePrev = () => {
//     if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
//   };

//   const handleNext = () => {
//     if (currentSlide < totalSlides - 1) setCurrentSlide(currentSlide + 1);
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4 sm:p-6  min-h-[300px]">
//       {/* Header */}
//       <div className='flex gap-3'>
//         <div className="mb-6 sm:mb-8 flex flex-col justify-center rounded-lg">
//           <h2 className="text-xl sm:text-2xl font-medium  mb-2">Finish setting up your account</h2>
//           <div className='flex items-center'>
//             0%
//             <div className="w-[90%]  mx-auto h-2 bg-[#d9e6f2] rounded-full">
//             </div>
//           </div>

//           <p className="text-sm mt-1 mt-2"><span className='text-[#267c89]'>0 of 4 </span>tasks completed</p>
//         </div>

  
//           <div className="transition-all duration-300 ease-in-out border flex">
           
//               {tasks[currentSlide].map((task, index) => (
//                 <div
//                   key={index}
//                   className="w-full w-[400px] mx-auto border border-[#d9e6f2] rounded-lg p-4 sm:p-5 bg-white shadow-sm hover:shadow-md transition-shadow"
//                 >
//                   <div className="flex justify-between items-center mb-3">
//                     <div className="w-5 h-5 rounded-full border-2 border-[#d9e6f2]"></div>
//                     <div className="flex space-x-2">
//                       {task.icons.map((icon, idx) => (
//                         <div
//                           key={idx}
//                           className={`w-6 h-6 flex items-center justify-center ${icon.bgColor ? icon.bgColor : 'bg-white'} rounded-full`}
//                         >
//                           {icon.letter ? (
//                             <span className={`text-xs font-bold ${icon.textColor}`}>{icon.letter}</span>
//                           ) : (
//                             icon.svg
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <h3 className="text-base sm:text-lg font-medium text-[#00aa8a] mb-2">{task.title}</h3>
//                   <p className="text-sm text-[#666666] mb-3">{task.description}</p>
//                   <p className="text-xs text-[#999999]">{task.time}</p>
//                 </div>
//               ))}
           
         

//           {/* Navigation buttons */}

//         </div>
//       </div>


























//       <div className="flex justify-end mt-6 sm:mt-8 space-x-3">
//         <button
//           onClick={handlePrev}
//           disabled={currentSlide === 0}
//           className={`w-8 h-8 flex items-center justify-center border border-[#d9e6f2] rounded-full ${currentSlide === 0 ? 'text-[#cccccc] cursor-not-allowed' : 'text-[#666666] hover:bg-gray-100'
//             }`}
//           aria-label="Previous"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
//             <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
//           </svg>
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentSlide === totalSlides - 1}
//           className={`w-8 h-8 flex items-center justify-center border border-[#d9e6f2] rounded-full ${currentSlide === totalSlides - 1 ? 'text-[#cccccc] cursor-not-allowed' : 'text-[#666666] hover:bg-gray-100'
//             }`}
//           aria-label="Next"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
//             <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OnboardingCarousel;








































"use client";

import React, { useState } from 'react';

const OnboardingCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2; // Two slides based on the provided data
  const tasks = [
    [
      {
        title: "Connect an integration",
        description: "Leverage data to create more automated, personalized omni-channel marketing communications.",
        time: "2 min",
        icons: [
          { letter: "W", bgColor: "bg-[#eef6ff]", textColor: "text-[#0077ff]" },
          { letter: "C", bgColor: "bg-[#e6f7f4]", textColor: "text-[#00aa8a]" },
        ],
      },
      {
        title: "Import your brand",
        description: "We'll create email designs using your fonts, logos, colors and images.",
        time: "2 seconds",
        icons: [
          { svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" /><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg> },
          { svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2"><path d="M12 4h3l2 4h3a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h3l2-4z" /></svg> },
        ],
      },
      {
        title: "Authenticate your email domain",
        description: "Strongly recommended to improve deliverability, avoid spam folders, and build your sender reputation.",
        time: "4 min",
        icons: [
          { svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
        ],
      },
    ],
    [
      {
        title: "Add your contacts",
        description: "Upload your list of subscribers or import them from another app.",
        time: "4 min",
        icons: [
          { svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> },
        ],
      },
      {
        title: "Connect an integration",
        description: "Leverage data to create more automated, personalized omni-channel marketing communications.",
        time: "2 min",
        icons: [
          { letter: "W", bgColor: "bg-[#eef6ff]", textColor: "text-[#0077ff]" },
          { letter: "C", bgColor: "bg-[#e6f7f4]", textColor: "text-[#00aa8a]" },
        ],
      },
      {
        title: "Import your brand",
        description: "We'll create email designs using your fonts, logos, colors and images.",
        time: "2 seconds",
        icons: [
          { svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" /><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg> },
          { svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2"><path d="M12 4h3l2 4h3a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h3l2-4z" /></svg> },
        ],
      },
    ],
  ];

  const handlePrev = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className="max-w-6xl mx-auto flex p-4 sm:p-6 min-h-[300px]">
      {/* Header */}
      <div className="mb-6 sm:mb-8 flex flex-col justify-center rounded-lg mr-4">
        <h2 className="text-xl sm:text-2xl font-medium mb-2">Finish setting up your account</h2>
        <div className="flex items-center">
          <span className="mr-2 text-sm">0%</span>
          <div className="w-[90%] mx-auto h-2 bg-[#d9e6f2] rounded-full"></div>
        </div>
        <p className="text-sm mt-2"><span className="text-[#267c89]">0 of 4</span> tasks completed</p>
      </div>

      {/* Sliding Task Cards */}
      <div className="transition-all duration-300 ease-in-out  flex overflow-hidden">
        <div
          className="flex items-center gap-6"
          style={{ transform: `translateX(-${currentSlide * 400}px)`, transition: 'transform 0.3s ease-in-out' }}
        >
          {tasks[currentSlide].map((task, index) => (
            <div
              key={index}
              className="w-[330px] min-w-[330px] h-[200px] border border-[#d9e6f2] rounded-lg p-2 bg-white shadow-sm"
            >
              <div className="flex justify-between items-center">
                <div className="w-5 h-5 rounded-full border-2 border-[#d9e6f2]"></div>
                <div className="flex space-x-2">
                  {task.icons.map((icon, idx) => (
                    <div
                      key={idx}
                      className={`w-6 h-6 flex items-center justify-center ${icon.bgColor ? icon.bgColor : 'bg-white'} rounded-full`}
                    >
                      {icon.letter ? (
                        <span className={`text-xs font-bold ${icon.textColor}`}>{icon.letter}</span>
                      ) : (
                        icon.svg
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-[#00aa8a]">{task.title}</h3>
              <p className="text-sm text-[#666666]">{task.description}</p>
              <p className="text-xs text-[#999999]">{task.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-end mt-6 sm:mt-8 space-x-3">
        <button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          className={`w-8 h-8 flex items-center justify-center border border-[#d9e6f2] rounded-full ${
            currentSlide === 0 ? 'text-[#cccccc] cursor-not-allowed' : 'text-[#666666] hover:bg-gray-100'
          }`}
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          disabled={currentSlide === totalSlides - 1}
          className={`w-8 h-8 flex items-center justify-center border border-[#d9e6f2] rounded-full ${
            currentSlide === totalSlides - 1 ? 'text-[#cccccc] cursor-not-allowed' : 'text-[#666666] hover:bg-gray-100'
          }`}
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OnboardingCarousel;
