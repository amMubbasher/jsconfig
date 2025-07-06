// // components/campaign/CampaignPage.js
// "use client";

// import { useState } from 'react';
// import ListViewTab from './ListViewTab';
// import CalendarTab from './CalendarTab';

// export default function CampaignPage() {
//     const [activeTab, setActiveTab] = useState('list');

//     return (
//         <div className="min-h-screen bg-white">
//             {/* Header */}
//             <div className="px-12 py-6 border-b border-gray-200">
//                 <div className="flex justify-between items-center">
//                     <h1 className="text-2xl font-medium text-[#241c15]">All campaigns</h1>
//                     <div className="flex items-center gap-3">
//                         <button className="px-4 py-2 text-sm text-[#007c89] border border-[#007c89] rounded hover:bg-[#f0fafb] transition-colors">
//                             View analytics
//                         </button>
//                         <button className="px-4 py-2 text-sm text-white bg-[#007c89] rounded hover:bg-[#005d66] transition-colors">
//                             Create
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Tabs */}
//             <div className="border-b border-gray-200">
//                 <div className="px-12">
//                     <div className="flex">
//                         <button
//                             className={`flex items-center py-3 px-4 relative ${activeTab === 'list' ? 'text-[#007c89]' : 'text-gray-600'}`}
//                             onClick={() => setActiveTab('list')}
//                         >
//                             <svg className="w-4 h-4 mr-2" viewBox="0 0 16 16" fill="currentColor">
//                                 <path d="M1 3.5a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z" />
//                             </svg>
//                             List
//                             {activeTab === 'list' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#007c89]"></div>}
//                         </button>

//                         <button
//                             className={`flex items-center py-3 px-4 relative ${activeTab === 'calendar' ? 'text-[#007c89]' : 'text-gray-600'}`}
//                             onClick={() => setActiveTab('calendar')}
//                         >
//                             <svg className="w-4 h-4 mr-2" viewBox="0 0 16 16" fill="currentColor">
//                                 <path d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v1h14V3a1 1 0 00-1-1H2zm13 3H1v9a1 1 0 001 1h12a1 1 0 001-1V5z" />
//                             </svg>
//                             Calendar
//                             {activeTab === 'calendar' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#007c89]"></div>}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Content based on active tab */}
//             <div className="px-12 py-6">
//                 {activeTab === 'list' ? <ListViewTab /> : <CalendarTab />}
//             </div>
//         </div>
//     );
// }




































// components/campaign/CampaignPage.js
"use client";

import { useState } from 'react';
import ListViewTab from './ListViewTab';
import CalendarTab from './CalendarTab';

export default function CampaignPage() {
    const [activeTab, setActiveTab] = useState('list');

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h1 className="text-[22px] font-medium text-[#241c15]">All campaigns</h1>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 text-sm text-[#007c89] border border-[#007c89] rounded hover:bg-[#f0fafb] transition-colors">
                        View analytics
                    </button>
                    <button className="px-4 py-2 text-sm text-white bg-[#007c89] rounded hover:bg-[#005d66] transition-colors">
                        Create
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
                <div className="px-6">
                    <div className="flex">
                        <button
                            className={`flex items-center py-3 px-4 relative ${activeTab === 'list' ? 'text-[#007c89]' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('list')}
                        >
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M1 3.5a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z" />
                            </svg>
                            List
                            {activeTab === 'list' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#007c89]"></div>}
                        </button>

                        <button
                            className={`flex items-center py-3 px-4 relative ${activeTab === 'calendar' ? 'text-[#007c89]' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('calendar')}
                        >
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v1h14V3a1 1 0 00-1-1H2zm13 3H1v9a1 1 0 001 1h12a1 1 0 001-1V5z" />
                            </svg>
                            Calendar
                            {activeTab === 'calendar' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#007c89]"></div>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Content based on active tab */}
            <div className="px-6 py-4">
                {activeTab === 'list' ? <ListViewTab /> : <CalendarTab />}
            </div>
        </div>
    );
}
