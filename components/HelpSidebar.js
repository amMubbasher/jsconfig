















// "use client";

// import React, { useState, useEffect, useRef } from 'react';
// import { IoMdSearch } from "react-icons/io";

// function HelpSidebar({ isOpen, onClose }) {
//   const [searchQuery, setSearchQuery] = useState('');
//   const sidebarRef = useRef(null);

//   // Close sidebar with Escape key
//   useEffect(() => {
//     const handleEscKey = (event) => {
//       if (event.key === 'Escape' && isOpen) {
//         onClose();
//       }
//     };

//     window.addEventListener('keydown', handleEscKey);
//     return () => window.removeEventListener('keydown', handleEscKey);
//   }, [isOpen, onClose]);

//   // Prevent body scrolling when sidebar is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isOpen]);

//   return (
//     <>
//       {/* Backdrop overlay */}
//       {isOpen && (
//         <div 

//           onClick={onClose}
//         />
//       )}

//       {/* Help Sidebar */}
//       <div 
//         ref={sidebarRef}
//         style={{
//           position: 'fixed',
//           top: 0,
//           right: 0,
//           bottom: 0,
//           width: window.innerWidth < 1000 ? '100%' : '380px',
//           backgroundColor: 'white',
//           transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
//           transition: 'transform 0.3s ease',
//           zIndex: 1000,
//           display: 'flex',
//           flexDirection: 'column',
//           maxWidth: '100%',
//         }}
//       >
//         {/* Header */}
//         <div style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           padding: '16px',
//           borderBottom: '1px solid #e7e7e7'
//         }}>
//           <h2 style={{
//             fontSize: '18px',
//             fontWeight: 500,
//             color: '#241c15',
//             margin: 0
//           }}>Help & Support</h2>
//           <button 
//             onClick={onClose}
//             style={{
//               background: 'none',
//               border: 'none',
//               cursor: 'pointer',
//               padding: 0
//             }}
//           >
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round">
//               <line x1="18" y1="6" x2="6" y2="18"></line>
//               <line x1="6" y1="6" x2="18" y2="18"></line>
//             </svg>
//           </button>
//         </div>

//         {/* Search */}
//         <div style={{
//           padding: '16px',
//           backgroundColor: '#f9f9f9',
//           borderBottom: '1px solid #e7e7e7'
//         }}>
//           <div style={{ position: 'relative' }}>
//             <div style={{
//               position: 'absolute',
//               left: '12px',
//               top: '50%',
//               transform: 'translateY(-50%)',
//               pointerEvents: 'none'
//             }}>
//               <IoMdSearch size={16} color="#757575" />
//             </div>
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search help center"
//               style={{
//                 width: '100%',
//                 padding: '10px 10px 10px 36px',
//                 border: '1px solid #d9d9d9',
//                 borderRadius: '4px',
//                 fontSize: '14px',
//                 outline: 'none'
//               }}
//             />
//           </div>
//         </div>

//         {/* Content */}
//         <div style={{ 
//           flex: 1,
//           overflowY: 'auto',
//           padding: '20px'
//         }}>
//           <h3 style={{
//             fontSize: '16px',
//             fontWeight: 500,
//             marginBottom: '16px',
//             color: '#241c15'
//           }}>People like you viewed these answers</h3>

//           {/* Article 1 */}
//           <div style={{ marginBottom: '24px' }}>
//             <a href="#" style={{ 
//               color: '#007c89', 
//               fontSize: '16px',
//               fontWeight: 500,
//               textDecoration: 'none',
//               display: 'block',
//               marginBottom: '4px'
//             }}>
//               Getting Started with Mailchimp
//             </a>
//             <div style={{ 
//               display: 'flex',
//               alignItems: 'center',
//               fontSize: '12px',
//               color: '#666666',
//               marginBottom: '8px'
//             }}>
//               <span>External</span>
//               <span style={{ margin: '0 8px' }}>•</span>
//               <span>by Mailchimp</span>
//             </div>
//             <p style={{ 
//               fontSize: '14px',
//               color: '#241c15',
//               lineHeight: '1.5',
//               margin: 0
//             }}>
//               Mailchimp is an all-in-one marketing platform that helps you manage and talk to your clients, customers, and other interested parties.
//             </p>
//           </div>

//           {/* Article 2 */}
//           <div style={{ marginBottom: '24px' }}>
//             <a href="#" style={{ 
//               color: '#007c89', 
//               fontSize: '16px',
//               fontWeight: 500,
//               textDecoration: 'none',
//               display: 'block',
//               marginBottom: '4px'
//             }}>
//               Set Up Email Domain Authentication
//             </a>
//             <div style={{ 
//               display: 'flex',
//               alignItems: 'center',
//               fontSize: '12px',
//               color: '#666666',
//               marginBottom: '8px'
//             }}>
//               <span>External</span>
//               <span style={{ margin: '0 8px' }}>•</span>
//               <span>by Mailchimp</span>
//             </div>
//             <p style={{ 
//               fontSize: '14px',
//               color: '#241c15',
//               lineHeight: '1.5',
//               margin: 0
//             }}>
//               To help your emails reach your recipients' inboxes, set up email authentication for your custom domain. Authenticating the domain you use to send email can ...
//             </p>
//           </div>

//           {/* Article 3 */}
//           <div style={{ marginBottom: '24px' }}>
//             <a href="#" style={{ 
//               color: '#007c89', 
//               fontSize: '16px',
//               fontWeight: 500,
//               textDecoration: 'none',
//               display: 'block',
//               marginBottom: '4px'
//             }}>
//               Import Contacts to Mailchimp
//             </a>
//             <div style={{ 
//               display: 'flex',
//               alignItems: 'center',
//               fontSize: '12px',
//               color: '#666666',
//               marginBottom: '8px'
//             }}>
//               <span>External</span>
//               <span style={{ margin: '0 8px' }}>•</span>
//               <span>by Mailchimp</span>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div style={{
//           padding: '16px',
//           backgroundColor: '#f5f5f5',
//           borderTop: '1px solid #e7e7e7',
//           textAlign: 'center'
//         }}>
//           <button style={{
//             backgroundColor: 'white',
//             border: '1px solid #007c89',
//             color: '#007c89',
//             padding: '8px 24px',
//             borderRadius: '4px',
//             fontSize: '14px',
//             fontWeight: 500,
//             cursor: 'pointer'
//           }}>
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HelpSidebar;


































"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoMdSearch } from "react-icons/io";

function HelpSidebar({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarWidth, setSidebarWidth] = useState("380px");
  const sidebarRef = useRef(null);

  // Set sidebar width based on window size
  useEffect(() => {
    const handleResize = () => {
      setSidebarWidth(window.innerWidth < 1000 ? "100%" : "380px");
    };
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar with Escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isOpen, onClose]);

  // Prevent body scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0   z-50"
          onClick={onClose}
        />
      )}

      {/* Help Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 bottom-0 z-50 bg-white flex flex-col max-w-full transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ width: sidebarWidth }}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-medium text-gray-800">Help & Support</h2>
          <button
            onClick={onClose}
            className="p-0 bg-none border-none cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Search */}
        <div className="p-4 bg-gray-100 border-b border-gray-200">
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <IoMdSearch size={16} color="#757575" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search help center"
              className="w-full pl-10 pr-2 py-2 border border-gray-300 rounded-md text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5">
          <h3 className="text-lg font-medium mb-4 text-gray-800">
            People like you viewed these answers
          </h3>

          {/* Article 1 */}
          <div className="mb-6">
            <a
              href="#"
              className="text-teal-600 text-lg font-medium block mb-1"
            >
              Getting Started with Mailchimp
            </a>
            <div className="flex items-center text-xs text-gray-500 mb-2">
              <span>External</span>
              <span className="mx-2">•</span>
              <span>by Mailchimp</span>
            </div>
            <p className="text-base text-gray-800 leading-6">
              Mailchimp is an all-in-one marketing platform that helps you manage
              and talk to your clients, customers, and other interested parties.
            </p>
          </div>

          {/* Article 2 */}
          <div className="mb-6">
            <a
              href="#"
              className="text-teal-600 text-lg font-medium block mb-1"
            >
              Set Up Email Domain Authentication
            </a>
            <div className="flex items-center text-xs text-gray-500 mb-2">
              <span>External</span>
              <span className="mx-2">•</span>
              <span>by Mailchimp</span>
            </div>
            <p className="text-base text-gray-800 leading-6">
              To help your emails reach your recipients' inboxes, set up email
              authentication for your custom domain. Authenticating the domain
              you use to send email can ...
            </p>
          </div>

          {/* Article 3 */}
          <div className="mb-6">
            <a
              href="#"
              className="text-teal-600 text-lg font-medium block mb-1"
            >
              Import Contacts to Mailchimp
            </a>
            <div className="flex items-center text-xs text-gray-500 mb-2">
              <span>External</span>
              <span className="mx-2">•</span>
              <span>by Mailchimp</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 text-center">
          <button className="bg-white border border-teal-600 text-teal-600 py-2 px-6 rounded-md text-sm font-medium cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

export default HelpSidebar;