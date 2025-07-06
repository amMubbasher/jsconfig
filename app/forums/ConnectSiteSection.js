"use client";

import React from 'react';

export default function ConnectSiteSection() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-8">
      {/* Connect Your Site Panel */}
      <div className="flex flex-col md:flex-row border border-[#e6e6e6] rounded-lg mb-8 overflow-hidden">
        {/* Left side - Orange background with browser mockup */}
        <div className="bg-[#e9a151] w-full md:w-[320px] p-6 flex items-center justify-center relative">
          <div className="relative">
            {/* Browser icon */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z" fill="#333333"/>
              </svg>
            </div>
            
            {/* Browser window mockup */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden w-[240px]">
              {/* Browser toolbar */}
              <div className="h-6 bg-[#f5f5f5] border-b border-[#e6e6e6] flex items-center px-2">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#28c940]"></div>
                </div>
                <div className="text-[10px] text-center w-full text-[#666666] font-medium tracking-wide">TANDU</div>
              </div>
              
              {/* Browser content - website preview */}
              <div className="h-[140px] relative">
                <img
                  src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/forms-landing-pages/forms-dashboard/connect-your-site.png"
                  alt="TANDU website with popup form"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ clipPath: "inset(20% 0 0 0)" }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Content and button */}
        <div className="p-6 md:p-8 flex-1 bg-white">
          <h2 className="text-[22px] font-medium text-[#241c15] mb-2">
            Connect your site to publish popups
          </h2>
          <p className="text-[16px] text-[#4a4a4a] mb-6 max-w-[560px]">
            Integrate with Shopify or manually add a code snippet to your website to 
            publish your first popup form. It'll only take a few minutes.
          </p>
          <button className="px-4 py-2 bg-white border border-[#007c89] text-[#007c89] rounded-lg hover:bg-[#f7f7f7] transition-colors font-medium">
            Connect site
          </button>
        </div>
      </div>

      {/* All Popup Forms Panel */}
      <div className="border border-[#e6e6e6] rounded-lg p-8">
        <h2 className="text-[22px] font-medium text-[#241c15] mb-8">All popup forms</h2>
        
        <div className="text-center max-w-[600px] mx-auto">
          <h3 className="text-[22px] font-medium text-[#241c15] mb-2">
            Capture more contacts and boost conversion
          </h3>
          <p className="text-[16px] text-[#4a4a4a] mb-6">
            Here is where you'll see and manage your popup forms
          </p>
          <button className="px-4 py-2 bg-white border border-[#007c89] text-[#007c89] rounded-lg hover:bg-[#f7f7f7] transition-colors font-medium">
            Create popup form
          </button>
        </div>
      </div>
    </div>
  );
}
