// // components/campaign/CalendarTab.js
// "use client";

// import { useState } from 'react';
// import AddItemModal from './AddItemModal';

// export default function CalendarTab() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedDay, setSelectedDay] = useState(null);
//   const [sendDayOptimization, setSendDayOptimization] = useState(true);
  
//   // Calendar data structure
//   const weeks = [
//     [
//       { day: 29, isCurrentMonth: false }, 
//       { day: 30, isCurrentMonth: false }, 
//       { day: 1, isCurrentMonth: true },
//       { day: 2, isCurrentMonth: true }, 
//       { day: 3, isCurrentMonth: true },
//       { day: 4, isCurrentMonth: true, isHighlighted: true }, 
//       { day: 5, isCurrentMonth: true }
//     ],
//     [
//       { day: 6, isCurrentMonth: true }, 
//       { day: 7, isCurrentMonth: true }, 
//       { day: 8, isCurrentMonth: true, isGood: true },
//       { day: 9, isCurrentMonth: true, isGood: true }, 
//       { day: 10, isCurrentMonth: true, isGood: true},
//       { day: 11, isCurrentMonth: true }, 
//       { day: 12, isCurrentMonth: true }
//     ],
//     [
//       { day: 13, isCurrentMonth: true }, 
//       { day: 14, isCurrentMonth: true, isGood: true }, 
//       { day: 15, isCurrentMonth: true, isGood: true },
//       { day: 16, isCurrentMonth: true, isGood: true }, 
//       { day: 17, isCurrentMonth: true, isGood: true},
//       { day: 18, isCurrentMonth: true }, 
//       { day: 19, isCurrentMonth: true }
//     ],
//     [
//       { day: 20, isCurrentMonth: true, isGood: true }, 
//       { day: 21, isCurrentMonth: true, isGood: true }, 
//       { day: 22, isCurrentMonth: true, isGood: true},
//       { day: 23, isCurrentMonth: true, isGood: true }, 
//       { day: 24, isCurrentMonth: true, isGood: true},
//       { day: 25, isCurrentMonth: true }, 
//       { day: 26, isCurrentMonth: true }
//     ],
//     [
//       { day: 27, isCurrentMonth: true, isGood: true }, 
//       { day: 28, isCurrentMonth: true, isGood: true }, 
//       { day: 29, isCurrentMonth: true, isGood: true},
//       { day: 30, isCurrentMonth: true, isGood: true }, 
//       { day: 31, isCurrentMonth: true, isGood: true},
//       { day: 1, isCurrentMonth: false, isGood: true }, 
//       { day: 2, isCurrentMonth: false }
//     ]
//   ];
  
//   const handleDayClick = (day) => {
//     setSelectedDay(day);
//     setIsModalOpen(true);
//   };

//   return (
//     <div>
//       {/* Filters */}
//       <div className="flex flex-wrap items-center justify-between mb-6 gap-3">
//         <div className="flex items-center gap-4 flex-wrap">
//           <div className="flex items-center gap-2">
//             <span className="text-sm text-[#4a4a4a]">Type:</span>
//             <div className="relative">
//               <select className="appearance-none pr-8 pl-3 py-1 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#007c89]">
//                 <option>All</option>
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                 <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                 </svg>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-2">
//             <span className="text-sm text-[#4a4a4a]">Status:</span>
//             <div className="relative">
//               <select className="appearance-none pr-8 pl-3 py-1 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#007c89]">
//                 <option>All</option>
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                 <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                 </svg>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-2">
//             <span className="text-sm text-[#4a4a4a]">Folder:</span>
//             <div className="relative">
//               <select className="appearance-none pr-8 pl-3 py-1 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#007c89]">
//                 <option>All</option>
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                 <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                 </svg>
//               </div>
//             </div>
//           </div>
          
//           <button className="text-sm text-[#007c89]">Clear</button>
//         </div>
        
//         <div className="flex items-center gap-2">
//           <span className="text-sm text-[#4a4a4a]">Holidays:</span>
//           <div className="relative">
//             <select className="appearance-none pr-8 pl-3 py-1 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#007c89]">
//               <option>None</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Calendar Controls */}
//       <div className="flex flex-wrap items-center justify-between mb-4 gap-3">
//         <div className="flex items-center gap-2">
//           <button className="p-1 rounded hover:bg-gray-100">
//             <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
//             </svg>
//           </button>
//           <button className="p-1 rounded hover:bg-gray-100">
//             <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//             </svg>
//           </button>
          
//           <div className="relative">
//             <button className="flex items-center px-3 py-1 border border-gray-300 rounded bg-white text-sm">
//               <span>July 2025</span>
//               <svg className="ml-2 w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//           </div>
          
//           <button className="px-2 py-1 text-sm text-[#007c89] hover:underline">
//             Today
//           </button>
//         </div>
        
//         <div className="flex items-center gap-3">
//           <div className="relative">
//             <button className="flex items-center px-2 py-1 text-sm">
//               <span>Month</span>
//               <svg className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//           </div>
          
//           <div className="flex items-center gap-2">
//             <span className="text-sm whitespace-nowrap">Send day optimization:</span>
//             <button 
//               className={`relative inline-flex items-center h-5 rounded-full w-10 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007c89] ${sendDayOptimization ? 'bg-[#007c89]' : 'bg-gray-200'}`}
//               onClick={() => setSendDayOptimization(!sendDayOptimization)}
//             >
//               <span 
//                 className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${sendDayOptimization ? 'translate-x-5' : 'translate-x-1'}`} 
//               />
//             </button>
//             <button className="text-gray-500">
//               <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Calendar */}
//       <div className="border border-gray-200 rounded bg-white">
//         {/* Days of week */}
//         <div className="grid grid-cols-7 border-b border-gray-200">
//           <div className="px-2 py-3 text-center text-gray-700">Sunday</div>
//           <div className="px-2 py-3 text-center text-gray-700">Monday</div>
//           <div className="px-2 py-3 text-center text-gray-700">Tuesday</div>
//           <div className="px-2 py-3 text-center text-gray-700">Wednesday</div>
//           <div className="px-2 py-3 text-center text-gray-700">Thursday</div>
//           <div className="px-2 py-3 text-center text-gray-700">Friday</div>
//           <div className="px-2 py-3 text-center text-gray-700">Saturday</div>
//         </div>
        
//         {/* Calendar days */}
//         <div className="grid grid-cols-7">
//           {weeks.map((week, weekIndex) => (
//             week.map((day, dayIndex) => (
//               <div 
//                 key={`${weekIndex}-${dayIndex}`}
//                 className={`min-h-[100px] p-2 border-b border-r ${weekIndex === weeks.length - 1 ? '' : 'border-b'} ${dayIndex === 0 ? '' : 'border-l'} cursor-pointer hover:bg-gray-50`}
//                 onClick={() => handleDayClick(day)}
//               >
//                 <div className={`flex justify-between items-center ${!day.isCurrentMonth ? 'text-gray-400' : ''}`}>
//                   <span className={`text-sm font-medium ${day.isHighlighted ? 'inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#241c15] text-white' : ''}`}>
//                     {day.day}
//                   </span>
//                   {day.isGood && (
//                     <span className="font-medium px-2 py-0.5 border border-green-900 rounded ">
//                       GOOD
//                     </span>
//                   )}
//                 </div>
//               </div>
//             ))
//           ))}
//         </div>
//       </div>
      
//       {/* Add Item Modal */}
//       <AddItemModal 
//         isOpen={isModalOpen} 
//         onClose={() => setIsModalOpen(false)} 
//         selectedDay={selectedDay} 
//       />
//     </div>
//   );
// }



































































// components/campaign/CalendarTab.js
"use client";

import { useState } from 'react';
import AddItemModal from './AddItemModal';

export default function CalendarTab() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [sendDayOptimization, setSendDayOptimization] = useState(true);
  
  // Calendar data structure
  const weeks = [
    [
      { day: 29, isCurrentMonth: false }, 
      { day: 30, isCurrentMonth: false }, 
      { day: 1, isCurrentMonth: true },
      { day: 2, isCurrentMonth: true }, 
      { day: 3, isCurrentMonth: true },
      { day: 4, isCurrentMonth: true, isHighlighted: true }, 
      { day: 5, isCurrentMonth: true }
    ],
    [
      { day: 6, isCurrentMonth: true }, 
      { day: 7, isCurrentMonth: true }, 
      { day: 8, isCurrentMonth: true, isGood: true },
      { day: 9, isCurrentMonth: true, isGood: true }, 
      { day: 10, isCurrentMonth: true, isGood: true},
      { day: 11, isCurrentMonth: true }, 
      { day: 12, isCurrentMonth: true }
    ],
    [
      { day: 13, isCurrentMonth: true }, 
      { day: 14, isCurrentMonth: true, isGood: true }, 
      { day: 15, isCurrentMonth: true, isGood: true },
      { day: 16, isCurrentMonth: true, isGood: true }, 
      { day: 17, isCurrentMonth: true, isGood: true},
      { day: 18, isCurrentMonth: true }, 
      { day: 19, isCurrentMonth: true }
    ],
    [
      { day: 20, isCurrentMonth: true, isGood: true }, 
      { day: 21, isCurrentMonth: true, isGood: true }, 
      { day: 22, isCurrentMonth: true, isGood: true},
      { day: 23, isCurrentMonth: true, isGood: true }, 
      { day: 24, isCurrentMonth: true, isGood: true},
      { day: 25, isCurrentMonth: true }, 
      { day: 26, isCurrentMonth: true }
    ],
    [
      { day: 27, isCurrentMonth: true, isGood: true }, 
      { day: 28, isCurrentMonth: true, isGood: true }, 
      { day: 29, isCurrentMonth: true, isGood: true},
      { day: 30, isCurrentMonth: true, isGood: true }, 
      { day: 31, isCurrentMonth: true, isGood: true},
      { day: 1, isCurrentMonth: false, isGood: true }, 
      { day: 2, isCurrentMonth: false }
    ]
  ];
  
  const handleDayClick = (day) => {
    setSelectedDay(day);
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between mb-6">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#6b6b6b]">Type:</span>
            <div className="relative">
              <select className="appearance-none pr-8 pl-3 py-1 border border-[#dadada] rounded text-sm bg-white focus:outline-none">
                <option>All</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#6b6b6b]">Status:</span>
            <div className="relative">
              <select className="appearance-none pr-8 pl-3 py-1 border border-[#dadada] rounded text-sm bg-white focus:outline-none">
                <option>All</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#6b6b6b]">Folder:</span>
            <div className="relative">
              <select className="appearance-none pr-8 pl-3 py-1 border border-[#dadada] rounded text-sm bg-white focus:outline-none">
                <option>All</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <button className="text-sm text-[#007c89]">Clear</button>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#6b6b6b]">Holidays:</span>
          <div className="relative">
            <select className="appearance-none pr-8 pl-3 py-1 border border-[#dadada] rounded text-sm bg-white focus:outline-none">
              <option>None</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Calendar Controls */}
      <div className="flex flex-wrap items-center justify-between mb-4">
        <div className="flex items-center">
          <button className="p-1">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="p-1">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button className="flex items-center px-3 py-1.5 ml-1 border border-[#dadada] rounded bg-white text-sm">
            <span>July 2025</span>
            <svg className="ml-2 w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button className="px-2 py-1 ml-2 text-sm text-[#007c89] hover:underline">
            Today
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <button className="flex items-center px-2 py-1 text-sm">
              <span>Month</span>
              <svg className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm whitespace-nowrap">Send day optimization:</span>
            <button 
              className={`relative inline-flex items-center h-5 rounded-full w-10 transition-colors focus:outline-none ${sendDayOptimization ? 'bg-[#007c89]' : 'bg-gray-200'}`}
              onClick={() => setSendDayOptimization(!sendDayOptimization)}
            >
              <span 
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${sendDayOptimization ? 'translate-x-5' : 'translate-x-1'}`} 
              />
            </button>
            <button className="text-gray-500">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Calendar */}
      <div className="border border-[#e6e6e6] rounded bg-white">
        {/* Days of week */}
        <div className="grid grid-cols-7 border-b border-[#e6e6e6]">
          <div className="px-2 py-3 text-center text-[#292929]">Sunday</div>
          <div className="px-2 py-3 text-center text-[#292929]">Monday</div>
          <div className="px-2 py-3 text-center text-[#292929]">Tuesday</div>
          <div className="px-2 py-3 text-center text-[#292929]">Wednesday</div>
          <div className="px-2 py-3 text-center text-[#292929]">Thursday</div>
          <div className="px-2 py-3 text-center text-[#292929]">Friday</div>
          <div className="px-2 py-3 text-center text-[#292929]">Saturday</div>
        </div>
        
        {/* Calendar days */}
        <div className="grid grid-cols-7">
          {weeks.map((week, weekIndex) => (
            week.map((day, dayIndex) => (
              <div 
                key={`${weekIndex}-${dayIndex}`}
                className={`min-h-[100px] p-2 border-r border-b border-[#e6e6e6] cursor-pointer hover:bg-gray-50`}
                onClick={() => handleDayClick(day)}
              >
                <div className={`flex justify-between items-center ${!day.isCurrentMonth ? 'text-[#c1c1c1]' : ''}`}>
                  <span className={`text-[14px] ${day.isHighlighted ? 'inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#241c15] text-white' : ''}`}>
                    {day.day}
                  </span>
                  {day.isGood && (
                    <span className=" text-[#006400] font-medium px-1.5 py-0.5 rounded border border-[#00a700]">
                      GOOD
                    </span>
                  )}
                </div>
              </div>
            ))
          ))}
        </div>
      </div>
      
      {/* Add Item Modal */}
      <AddItemModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedDay={selectedDay} 
      />
    </div>
  );
}
