// // components/campaign/ListViewTab.js
// "use client";

// import { useState } from 'react';

// export default function ListViewTab() {
//     const [searchTerm, setSearchTerm] = useState('');

//     return (
//         <div>
//             {/* Search bar */}
//             <div className="mb-6">
//                 <div className="relative max-w-md">
//                     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                         <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
//                         </svg>
//                     </div>
//                     <input
//                         type="text"
//                         className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#007c89] focus:border-[#007c89]"
//                         placeholder="Search campaigns"
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                 </div>
//             </div>

//             {/* Filters */}
//             <div className="flex flex-wrap items-center justify-between mb-6 gap-3">
//                 <div className="flex items-center gap-4 flex-wrap">
//                     <div className="flex items-center gap-2">
//                         <span className="text-sm">Type:</span>
//                         <div className="relative">
//                             <select className="appearance-none pr-8 pl-3 py-1 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#007c89]">
//                                 <option>All</option>
//                             </select>
//                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                                 <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//                                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <span className="text-sm">Status:</span>
//                         <div className="relative">
//                             <select className="appearance-none pr-8 pl-3 py-1 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#007c89]">
//                                 <option>All</option>
//                             </select>
//                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                                 <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//                                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <span className="text-sm">Folder:</span>
//                         <div className="relative">
//                             <select className="appearance-none pr-8 pl-3 py-1 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#007c89]">
//                                 <option>All</option>
//                             </select>
//                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                                 <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//                                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <span className="text-sm">Date:</span>
//                         <div className="relative">
//                             <select className="appearance-none pr-8 pl-3 py-1 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#007c89]">
//                                 <option>All</option>
//                             </select>
//                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                                 <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//                                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>

//                     <button className="text-sm text-[#007c89]">Clear</button>
//                 </div>

//                 <div className="flex items-center gap-2">
//                     <span className="text-sm">Sort by:</span>
//                     <div className="relative">
//                         <select className="appearance-none pr-8 pl-3 py-1 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#007c89]">
//                             <option>Date edited</option>
//                         </select>
//                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                             <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                             </svg>
//                         </div>
//                     </div>
//                     <button className="p-1">
//                         <svg className="w-5 h-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
//                             <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* Campaign Table */}
//             <div className="overflow-x-auto">
//                 <table className="w-full">
//                     <thead>
//                         <tr className="border-t border-b border-gray-200">
//                             <th className="w-10 py-3 pr-3 text-left">
//                                 <input type="checkbox" className="h-4 w-4 text-[#007c89] rounded border-gray-300 focus:ring-[#007c89]" />
//                             </th>
//                             <th className="py-3 px-3 text-left font-medium text-gray-700">Name</th>
//                             <th className="py-3 px-3 text-left font-medium text-gray-700">Status</th>
//                             <th className="py-3 px-3 text-left font-medium text-gray-700">Audience</th>
//                             <th className="py-3 px-3 text-left font-medium text-gray-700">Analytics</th>
//                             <th className="py-3 px-3 text-left font-medium text-gray-700">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr className="border-b border-gray-200 hover:bg-gray-50">
//                             <td className="py-4 pr-3">
//                                 <input type="checkbox" className="h-4 w-4 text-[#007c89] rounded border-gray-300 focus:ring-[#007c89]" />
//                             </td>
//                             <td className="py-4 px-3">
//                                 <div className="mb-1">
//                                     <a href="#" className="font-medium text-[#007c89] hover:underline">Health Insurance</a>
//                                 </div>
//                                 <div className="flex items-center text-sm text-gray-600">
//                                     <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
//                                         <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                                         <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                                     </svg>
//                                     Regular email
//                                 </div>
//                                 <div className="text-xs text-gray-500 mt-1">
//                                     Last edited Sat, Jun 28, 02:14 PM by Marketing OS
//                                 </div>
//                             </td>
//                             <td className="py-4 px-3">
//                                 <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
//                                     Draft
//                                 </span>
//                             </td>
//                             <td className="py-4 px-3">
//                                 <a href="#" className="text-[#007c89] hover:underline">ORACLESOL</a>
//                             </td>
//                             <td className="py-4 px-3">
//                                 {/* Empty Analytics column */}
//                             </td>
//                             <td className="py-4 px-3">
//                                 <div className="flex items-center">
//                                     <button className="text-[#007c89] hover:text-[#005d66] text-sm font-medium">Edit</button>
//                                     <div className="relative ml-2">
//                                         <button className="text-gray-400 hover:text-gray-600">
//                                             <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
//                                                 <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
//                                             </svg>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>

//             {/* Pagination */}
//             <div className="flex items-center justify-between mt-6">
//                 <div className="text-sm text-gray-700">
//                     Showing results 1 - 1 of 1
//                 </div>
//                 <div className="flex items-center space-x-2">
//                     <span className="text-sm text-gray-700">Page</span>
//                     <div className="inline-block w-16">
//                         <input
//                             type="text"
//                             value="1"
//                             className="w-full py-1 px-2 text-center border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#007c89] focus:border-[#007c89]"
//                         />
//                     </div>
//                     <span className="text-sm text-gray-700">of 1</span>
//                     <div className="flex">
//                         <button className="p-1 border border-gray-300 rounded-l text-gray-400">
//                             <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
//                             </svg>
//                         </button>
//                         <button className="p-1 border-t border-b border-r border-gray-300 text-gray-400">
//                             <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }














































































// components/campaign/ListViewTab.js
"use client";

import { useState } from 'react';

export default function ListViewTab() {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div>
      {/* Search bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#007c89] focus:border-[#007c89]"
            placeholder="Search campaigns"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-3">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#4a4a4a]">Type:</span>
            <div className="relative">
              <select className="appearance-none pr-8 pl-3 py-1 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#007c89]">
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
            <span className="text-sm text-[#4a4a4a]">Status:</span>
            <div className="relative">
              <select className="appearance-none pr-8 pl-3 py-1 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#007c89]">
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
            <span className="text-sm text-[#4a4a4a]">Folder:</span>
            <div className="relative">
              <select className="appearance-none pr-8 pl-3 py-1 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#007c89]">
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
            <span className="text-sm text-[#4a4a4a]">Date:</span>
            <div className="relative">
              <select className="appearance-none pr-8 pl-3 py-1 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#007c89]">
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
          <span className="text-sm text-[#4a4a4a]">Sort by:</span>
          <div className="relative">
            <select className="appearance-none pr-8 pl-3 py-1 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#007c89]">
              <option>Date edited</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <button className="p-1">
            <svg className="w-5 h-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Campaign Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-t border-b border-gray-200">
              <th className="w-10 py-3 pr-3 text-left">
                <input type="checkbox" className="h-4 w-4 text-[#007c89] rounded border-gray-300 focus:ring-[#007c89]" />
              </th>
              <th className="py-3 px-3 text-left font-medium text-gray-700">Name</th>
              <th className="py-3 px-3 text-left font-medium text-gray-700">Status</th>
              <th className="py-3 px-3 text-left font-medium text-gray-700">Audience</th>
              <th className="py-3 px-3 text-left font-medium text-gray-700">Analytics</th>
              <th className="py-3 px-3 text-left font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-4 pr-3">
                <input type="checkbox" className="h-4 w-4 text-[#007c89] rounded border-gray-300 focus:ring-[#007c89]" />
              </td>
              <td className="py-4 px-3">
                <div className="mb-1">
                  <a href="#" className="font-medium text-[#007c89] hover:underline">Health Insurance</a>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Regular email
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Last edited Sat, Jun 28, 02:14 PM by Marketing OS
                </div>
              </td>
              <td className="py-4 px-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                  Draft
                </span>
              </td>
              <td className="py-4 px-3">
                <a href="#" className="text-[#007c89] hover:underline">ORACLESOL</a>
              </td>
              <td className="py-4 px-3">
                {/* Empty Analytics column */}
              </td>
              <td className="py-4 px-3">
                <div className="flex items-center">
                  <button className="text-[#007c89] hover:text-[#005d66] text-sm font-medium">Edit</button>
                  <div className="relative ml-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-700">
          Showing results 1 - 1 of 1
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">Page</span>
          <div className="inline-block w-16">
            <input 
              type="text" 
              value="1" 
              className="w-full py-1 px-2 text-center border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#007c89] focus:border-[#007c89]" 
            />
          </div>
          <span className="text-sm text-gray-700">of 1</span>
          <div className="flex">
            <button className="p-1 border border-gray-300 rounded-l text-gray-400">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="p-1 border-t border-b border-r border-gray-300 text-gray-400">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
