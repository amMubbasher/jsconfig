// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// import Navbar from '@/components/Navbar';
// import Sidebar from '@/components/Sidebar';

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         <div className="flex min-h-screen w-screen">
//           <aside className="w-80 bg-white shadow h-screen sticky top-0">
//             <Sidebar />
//           </aside>

//           <div className="flex-1 flex flex-col">
//             <Navbar />
//             <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
//               {children}
//             </main>
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }


















// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// import Navbar from '@/components/Navbar';
// import Sidebar from '@/components/Sidebar';

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head />
//       <body className="overflow-x-hidden">
//          <Navbar />
//         <div className="flex h-screen w-screen overflow-hidden">

//           {/* Left column: Navbar + Sidebar */}
//           <aside className="bg-white shadow h-screen border sticky top-50 flex-shrink-0 flex flex-col">
           
//             <Sidebar />
//           </aside>

//           {/* Right column: Main page content */}
//           <div className="flex-1 flex min-w-0">
//             <main className="flex-1 overflow-y-auto bg-gray-100">
              
//               {children}
//             </main>
//           </div>

//         </div>
//       </body>
//     </html>
//   );
// }




























"use client";

import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import HelpSidebar from '@/components/HelpSidebar';

export default function RootLayout({ children }) {
  const [helpSidebarOpen, setHelpSidebarOpen] = useState(false);

  // Listen for help sidebar toggle events from Navbar
  useEffect(() => {
    const handleToggleHelpSidebar = (event) => {
      setHelpSidebarOpen(event.detail.isOpen);
    };
    
    document.addEventListener("toggleHelpSidebar", handleToggleHelpSidebar);
    
    return () => {
      document.removeEventListener("toggleHelpSidebar", handleToggleHelpSidebar);
    };
  }, []);

  return (
    <html lang="en">
      <head />
      <body className="overflow-x-hidden">
        {/* Navbar */}
        <Navbar />
        
        <div className="flex h-screen w-screen overflow-hidden pt-[49px] mt-[-49px]">
          {/* Left sidebar */}
          <aside className="sticky top-0 h-screen flex-shrink-0">
            <Sidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1 flex min-w-0">
            <main className="flex-1 overflow-y-auto bg-[#f9f9f9]">
              {children}
            </main>
          </div>

          {/* Help sidebar */}
          <HelpSidebar 
            isOpen={helpSidebarOpen} 
            onClose={() => setHelpSidebarOpen(false)} 
          />
        </div>
      </body>
    </html>
  );
}