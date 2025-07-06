// // components/campaign/AddItemModal.js
// "use client";

// import { useEffect } from 'react';

// export default function AddItemModal({ isOpen, onClose, selectedDay }) {
//     // Close on escape key
//     useEffect(() => {
//         const handleEsc = (e) => {
//             if (e.key === 'Escape') onClose();
//         };

//         if (isOpen) {
//             document.addEventListener('keydown', handleEsc);
//         }

//         return () => {
//             document.removeEventListener('keydown', handleEsc);
//         };
//     }, [isOpen, onClose]);

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
//             <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
//                 <div className="fixed inset-0 transition-opacity" onClick={onClose}>
//                     <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//                 </div>

//                 <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//                     <div className="bg-white p-6">
//                         <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
//                             <div className="flex items-center">
//                                 <svg className="w-6 h-6 text-gray-600 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                     <path d="M12 4v16m8-8H4"></path>
//                                 </svg>
//                                 <h3 className="text-lg font-medium text-gray-900">Add item</h3>
//                             </div>
//                             <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
//                                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             </button>
//                         </div>

//                         <h2 className="text-2xl font-medium text-gray-900 mb-2">Choose what you want to create</h2>
//                         <p className="text-gray-600 mb-6">Design and schedule marketing across different channels to reach your contacts.</p>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             {/* Email */}
//                             <div className="border border-gray-200 rounded-md p-4 hover:border-[#007c89] cursor-pointer transition-colors">
//                                 <div className="flex items-start">
//                                     <div className="w-8 h-8 flex-shrink-0 mr-3">
//                                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-gray-700">
//                                             <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                         </svg>
//                                     </div>
//                                     <div>
//                                         <h3 className="font-medium text-gray-900">Email</h3>
//                                         <p className="text-sm text-gray-500 mt-1">Create an email to achieve your marketing goals.</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Multivariate test */}
//                             <div className="border border-gray-200 rounded-md p-4 hover:border-[#007c89] cursor-pointer transition-colors">
//                                 <div className="flex items-start">
//                                     <div className="w-8 h-8 flex-shrink-0 mr-3">
//                                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-gray-700">
//                                             <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                                         </svg>
//                                     </div>
//                                     <div>
//                                         <h3 className="font-medium text-gray-900">Multivariate test</h3>
//                                         <p className="text-sm text-gray-500 mt-1">Send the most effective email by testing up to 8 combinations.</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* SMS */}
//                             <div className="border border-gray-200 rounded-md p-4 hover:border-[#007c89] cursor-pointer transition-colors relative">
//                                 <div className="absolute top-2 right-2">
//                                     <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-pink-100 text-pink-800">
//                                         New
//                                     </span>
//                                 </div>
//                                 <div className="flex items-start">
//                                     <div className="w-8 h-8 flex-shrink-0 mr-3">
//                                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-gray-700">
//                                             <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
//                                         </svg>
//                                     </div>
//                                     <div>
//                                         <h3 className="font-medium text-gray-900">SMS</h3>
//                                         <p className="text-sm text-gray-500 mt-1">Send text messages to your SMS audience.</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Social post */}
//                             <div className="border border-gray-200 rounded-md p-4 hover:border-[#007c89] cursor-pointer transition-colors">
//                                 <div className="flex items-start">
//                                     <div className="w-8 h-8 flex-shrink-0 mr-3">
//                                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-gray-700">
//                                             <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
//                                         </svg>
//                                     </div>
//                                     <div>
//                                         <h3 className="font-medium text-gray-900">Social post</h3>
//                                         <p className="text-sm text-gray-500 mt-1">Schedule social posts on Facebook, Instagram, and Twitter.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

















































// components/campaign/AddItemModal.js
// "use client";

// import { useEffect, useRef } from 'react';

// export default function AddItemModal({ isOpen, onClose, selectedDay }) {
//     const modalRef = useRef(null);

//     // Close on escape key
//     useEffect(() => {
//         const handleEsc = (e) => {
//             if (e.key === 'Escape') onClose();
//         };

//         if (isOpen) {
//             document.addEventListener('keydown', handleEsc);
//             // Prevent scrolling on body when modal is open
//             document.body.style.overflow = 'hidden';
//         }

//         return () => {
//             document.removeEventListener('keydown', handleEsc);
//             document.body.style.overflow = '';
//         };
//     }, [isOpen, onClose]);

//     // Close when clicking outside
//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (modalRef.current && !modalRef.current.contains(event.target)) {
//                 onClose();
//             }
//         }

//         if (isOpen) {
//             document.addEventListener("mousedown", handleClickOutside);
//         }
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [isOpen, onClose]);

//     if (!isOpen) return null;

//     return (
//         <>
//             {/* Fixed overlay */}
//             <div
//                 className="fixed inset-0 bg-black border brightness-50 opacity-50 z-40"
//                 aria-hidden="true"
//             />

//             {/* Modal */}
//             <div className="fixed inset-0 z-50 overflow-y-auto">
//                 <div className="flex items-center justify-center min-h-screen p-4">
//                     <div
//                         ref={modalRef}
//                         className="bg-white rounded-lg shadow-xl border w-full max-w-3xl mx-auto"
//                     >
//                         {/* Modal header */}
//                         <div className="flex justify-between items-center border-b border-gray-200 p-4">
//                             <div className="flex items-center">
//                                 <svg className="w-6 h-6 text-gray-500 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                     <path d="M12 5v14M5 12h14"></path>
//                                 </svg>
//                                 <h3 className="text-lg font-medium text-gray-900">Add item</h3>
//                             </div>
//                             <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
//                                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* Modal body */}
//                         <div className="p-6">
//                             <h2 className="text-2xl font-medium text-gray-900 mb-2">Choose what you want to create</h2>
//                             <p className="text-gray-600 mb-6">Design and schedule marketing across different channels to reach your contacts.</p>

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 {/* Email */}
//                                 <div className="border border-gray-200 rounded-md p-4 hover:border-[#007c89] cursor-pointer transition-colors">
//                                     <div className="flex items-start">
//                                         <div className="w-8 h-8 flex-shrink-0 mr-3">
//                                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-gray-700">
//                                                 <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                             </svg>
//                                         </div>
//                                         <div>
//                                             <h3 className="font-medium text-gray-900">Email</h3>
//                                             <p className="text-sm text-gray-500 mt-1">Create an email to achieve your marketing goals.</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Multivariate test */}
//                                 <div className="border border-gray-200 rounded-md p-4 hover:border-[#007c89] cursor-pointer transition-colors">
//                                     <div className="flex items-start">
//                                         <div className="w-8 h-8 flex-shrink-0 mr-3">
//                                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-gray-700">
//                                                 <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                                             </svg>
//                                         </div>
//                                         <div>
//                                             <h3 className="font-medium text-gray-900">Multivariate test</h3>
//                                             <p className="text-sm text-gray-500 mt-1">Send the most effective email by testing up to 8 combinations.</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* SMS */}
//                                 <div className="border border-gray-200 rounded-md p-4 hover:border-[#007c89] cursor-pointer transition-colors relative">
//                                     <div className="absolute top-2 right-2">
//                                         <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-pink-100 text-pink-800">
//                                             New
//                                         </span>
//                                     </div>
//                                     <div className="flex items-start">
//                                         <div className="w-8 h-8 flex-shrink-0 mr-3">
//                                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-gray-700">
//                                                 <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
//                                             </svg>
//                                         </div>
//                                         <div>
//                                             <h3 className="font-medium text-gray-900">SMS</h3>
//                                             <p className="text-sm text-gray-500 mt-1">Send text messages to your SMS audience.</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Social post */}
//                                 <div className="border border-gray-200 rounded-md p-4 hover:border-[#007c89] cursor-pointer transition-colors">
//                                     <div className="flex items-start">
//                                         <div className="w-8 h-8 flex-shrink-0 mr-3">
//                                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-gray-700">
//                                                 <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
//                                             </svg>
//                                         </div>
//                                         <div>
//                                             <h3 className="font-medium text-gray-900">Social post</h3>
//                                             <p className="text-sm text-gray-500 mt-1">Schedule social posts on Facebook, Instagram, and Twitter.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }









































// components/campaign/AddItemModal.js
"use client";

import { useEffect, useRef } from 'react';

export default function AddItemModal({ isOpen, onClose, selectedDay }) {
    const modalRef = useRef(null);

    // Close on escape key and prevent background scrolling
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    // Close when clicking outside the modal
    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50  flex items-center justify-center p-4">
            <div
                ref={modalRef}
                className="rounded-lg bg-white border p-1 shadow-md w-full max-w-[850px]"
                role="dialog"
                aria-modal="true"
            >
                {/* Modal header */}
                <div className="border-b bg-white border-[#e6e6e6] flex items-center justify-between px-4 py-3">
                    <div className="flex items-center">
                        <div className="text-[#333] mr-3">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 5v14M5 12h14" />
                            </svg>
                        </div>
                        <span className="text-[#333] font-semibold border-l px-3" >Add item</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-[#555] hover:text-[#333] p-1"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Modal content */}
                <div className="p-6 md:p-8">
                    <h2 className="text-4xl font-semibold text-[#292929] mb-2">Choose what you want to create</h2>
                    <p className="text-[#555] text-[16px] mb-6">Design and schedule marketing across different channels to reach your contacts.</p>

                    {/* Cards in a single row (flexbox) */}
                    <div className="flex flex-wrap gap-4">
                        {/* Email card */}
                        <div className="flex-1 min-w-[180px] border border-[#e6e6e6] rounded-md p-5 hover:border-[#007c89] cursor-pointer transition-colors">
                            <div className="mb-4 font-semibold">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#333]">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="M2 8l10 6 10-6" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-[16px] text-[#333] mb-1">Email</h3>
                            <p className="text-[14px] text-[#666]">Create an email to achieve your marketing goals.</p>
                        </div>

                        {/* Multivariate test card */}
                        <div className="flex-1 min-w-[180px] border border-[#e6e6e6] rounded-md p-5 hover:border-[#007c89] cursor-pointer transition-colors">
                            <div className="mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#333]">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                    <line x1="9" y1="21" x2="9" y2="9" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-[16px] text-[#333] mb-1">Multivariate test</h3>
                            <p className="text-[14px] text-[#666]">Send the most effective email by testing up to 8 combinations.</p>
                        </div>

                        {/* SMS card */}
                        <div className="flex-1 min-w-[180px] border border-[#e6e6e6] rounded-md p-5 hover:border-[#007c89] cursor-pointer transition-colors relative">
                            <div className="absolute top-5 right-5">
                                <span className="bg-[#f8e2ee] text-[#b4539d] text-[11px] px-2 py-0.5 rounded">
                                    New
                                </span>
                            </div>
                            <div className="mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#333]">
                                    <rect x="5" y="2" width="14" height="20" rx="2" />
                                    <line x1="12" y1="18" x2="12.01" y2="18" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-[16px] text-[#333] mb-1">SMS</h3>
                            <p className="text-[14px] text-[#666]">Send text messages to your SMS audience.</p>
                        </div>

                        {/* Social post card */}
                        <div className="flex-1 min-w-[180px] border border-[#e6e6e6] rounded-md p-5 hover:border-[#007c89] cursor-pointer transition-colors">
                            <div className="mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#333]">
                                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-[16px] text-[#333] mb-1">Social post</h3>
                            <p className="text-[14px] text-[#666]">Schedule social posts on Facebook, Instagram, and Twitter.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
