// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';

// export default function CustomCheckboxTable() {
//   const [checkedItems, setCheckedItems] = useState({});
  
//   const handleCheck = (id) => {
//     setCheckedItems(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   // Select all functionality
//   const handleSelectAll = () => {
//     const newCheckedItems = {};
//     if (Object.keys(checkedItems).length !== tableData.length) {
//       tableData.forEach(item => {
//         newCheckedItems[item.id] = true;
//       });
//     }
//     setCheckedItems(newCheckedItems);
//   };

//   const tableData = [
//     { id: 1, name: 'Item 1', description: 'Description for item 1', status: 'Active' },
//     { id: 2, name: 'Item 2', description: 'Description for item 2', status: 'Pending' },
//     { id: 3, name: 'Item 3', description: 'Description for item 3', status: 'Inactive' },
//     { id: 4, name: 'Item 4', description: 'Description for item 4', status: 'Active' },
//   ];

//   return (
//     <div className="container mx-auto p-4 max-w-6xl">
//       <h1 className="text-3xl font-bold mb-6 text-[#277e89]">Custom Checkbox Table</h1>
      
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
//         <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
//           <div className="flex items-center">
//             <label className="inline-flex items-center cursor-pointer mr-4">
//               <input 
//                 type="checkbox" 
//                 checked={Object.keys(checkedItems).length === tableData.length && tableData.length > 0}
//                 onChange={handleSelectAll}
//                 className="opacity-0 absolute h-5 w-5 cursor-pointer"
//               />
//               <div className="relative h-5 w-5 border border-gray-300 rounded bg-white flex items-center justify-center">
//                 {Object.keys(checkedItems).length === tableData.length && tableData.length > 0 && (
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <Image 
//                       src="https://mcusercontent.com/75236bd76ee8400bc070a75dd/_thumbs/da82141e-f6c9-1935-fe6f-81df98e6465e.jpg"
//                       alt="Checkmark"
//                       width={16}
//                       height={16}
//                       className="object-contain"
//                       priority
//                       unoptimized={true}
//                     />
//                   </div>
//                 )}
//               </div>
//               <span className="ml-2 text-sm text-gray-700">Select All</span>
//             </label>
            
//             {Object.keys(checkedItems).length > 0 && (
//               <button className="text-sm bg-[#277e89] hover:bg-[#1d6670] text-white py-1 px-3 rounded transition-colors duration-200">
//                 Delete Selected
//               </button>
//             )}
//           </div>
//           <div className="text-sm text-gray-500">
//             {Object.keys(checkedItems).length} of {tableData.length} selected
//           </div>
//         </div>
        
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Select
//               </th>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Name
//               </th>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Description
//               </th>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Status
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {tableData.map((item) => (
//               <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-150">
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="flex items-center">
//                     <label className="inline-flex items-center cursor-pointer">
//                       <input 
//                         type="checkbox" 
//                         checked={checkedItems[item.id] || false}
//                         onChange={() => handleCheck(item.id)}
//                         className="opacity-0 absolute h-5 w-5 cursor-pointer"
//                       />
//                       <div className="relative h-5 w-5 border border-gray-300 rounded bg-white flex items-center justify-center">
//                         {checkedItems[item.id] && (
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <Image 
//                               src="https://mcusercontent.com/75236bd76ee8400bc070a75dd/_thumbs/da82141e-f6c9-1935-fe6f-81df98e6465e.jpg"
//                               alt="Checkmark"
//                               width={16}
//                               height={16}
//                               className="object-contain"
//                               priority
//                               unoptimized={true}
//                             />
//                           </div>
//                         )}
//                       </div>
//                     </label>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                   {item.name}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {item.description}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
//                     ${item.status === 'Active' ? 'bg-[#277e89] bg-opacity-10 text-[#277e89]' : 
//                       item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
//                       'bg-red-100 text-red-800'}`}>
//                     {item.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
        
//         <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
//           <div className="flex items-center justify-between">
//             <div className="text-sm text-gray-500">
//               Showing {tableData.length} entries
//             </div>
//             <div className="flex space-x-2">
//               <button className="px-3 py-1 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
//                 Previous
//               </button>
//               <button className="px-3 py-1 bg-[#277e89] text-white border border-[#277e89] rounded-md text-sm hover:bg-[#1d6670]">
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
































































'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function CustomCheckboxTable() {
  const [checkedItems, setCheckedItems] = useState({});
  
  const handleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Select all functionality
  const handleSelectAll = () => {
    const newCheckedItems = {};
    if (Object.keys(checkedItems).length !== tableData.length) {
      tableData.forEach(item => {
        newCheckedItems[item.id] = true;
      });
    }
    setCheckedItems(newCheckedItems);
  };

  const tableData = [
    { id: 1, name: 'Item 1', description: 'Description for item 1', status: 'Active' },
    { id: 2, name: 'Item 2', description: 'Description for item 2', status: 'Pending' },
    { id: 3, name: 'Item 3', description: 'Description for item 3', status: 'Inactive' },
    { id: 4, name: 'Item 4', description: 'Description for item 4', status: 'Active' },
  ];

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6 text-[#277e89]">Custom Checkbox Table</h1>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
          <div className="flex items-center">
            <label className="inline-flex items-center cursor-pointer mr-4">
              <input 
                type="checkbox" 
                checked={Object.keys(checkedItems).length === tableData.length && tableData.length > 0}
                onChange={handleSelectAll}
                className="opacity-0 absolute h-5 w-5 cursor-pointer"
              />
              <div className="relative h-5 w-5 border border-gray-300 rounded bg-white flex items-center justify-center">
                {Object.keys(checkedItems).length === tableData.length && tableData.length > 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                      src="https://mcusercontent.com/75236bd76ee8400bc070a75dd/_thumbs/da82141e-f6c9-1935-fe6f-81df98e6465e.jpg"
                      alt="Checkmark"
                      width={16}
                      height={16}
                      className="object-contain"
                      priority
                      unoptimized={true}
                    />
                  </div>
                )}
              </div>
              <span className="ml-2 text-sm text-gray-700">Select All</span>
            </label>
            
            {Object.keys(checkedItems).length > 0 && (
              <button className="text-sm bg-[#277e89] hover:bg-[#1d6670] text-white py-1 px-3 rounded transition-colors duration-200">
                Delete Selected
              </button>
            )}
          </div>
          <div className="text-sm text-gray-500">
            {Object.keys(checkedItems).length} of {tableData.length} selected
          </div>
        </div>
        
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Select
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={checkedItems[item.id] || false}
                        onChange={() => handleCheck(item.id)}
                        className="opacity-0 absolute h-5 w-5 cursor-pointer"
                      />
                      <div className="relative h-5 w-5 border border-gray-300 rounded bg-white flex items-center justify-center">
                        {checkedItems[item.id] && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Image 
                              src="https://mcusercontent.com/75236bd76ee8400bc070a75dd/_thumbs/da82141e-f6c9-1935-fe6f-81df98e6465e.jpg"
                              alt="Checkmark"
                              width={16}
                              height={16}
                              className="object-contain"
                              priority
                              unoptimized={true}
                            />
                          </div>
                        )}
                      </div>
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${item.status === 'Active' ? 'bg-[#277e89] bg-opacity-10 text-[#277e89]' : 
                      item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing {tableData.length} entries
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 bg-[#277e89] text-white border border-[#277e89] rounded-md text-sm hover:bg-[#1d6670]">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
