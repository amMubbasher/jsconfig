"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HelpResourcesSection() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-8">
      <h2 className="text-[28px] font-medium text-[#241c15] mb-4">Need some help?</h2>
      <div className="h-px bg-[#e6e6e6] mb-6"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: About automation flows */}
        <div className="flex flex-col">
          <div className="bg-[#f9f9f9] rounded-lg overflow-hidden h-[208px] mb-4 flex items-center justify-center">
            <img
              src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/cjb_paths_builder.jpg"
              alt="Automation flow builder illustration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#6b6b6b] text-sm mb-1">getting started</span>
            <h3 className="text-xl font-medium text-[#241c15] mb-2">About automation flows</h3>
            <p className="text-[#4a4a4a] text-base">
              Get started with our automation builder, and create dynamic marketing paths for your contacts.
            </p>
          </div>
        </div>
        
        {/* Card 2: Quick start video */}
        <div className="flex flex-col">
          <div className="bg-[#f9f9f9] rounded-lg overflow-hidden h-[208px] mb-4 relative">
            <img
              src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/quick_start_video.jpg"
              alt="Quick start video thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-white/80 rounded p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.5V7.5L16 12L10 16.5Z" fill="#241c15"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[#6b6b6b] text-sm mb-1">tutorial</span>
            <h3 className="text-xl font-medium text-[#241c15] mb-2">Quick start video</h3>
            <p className="text-[#4a4a4a] text-base">
              Watch as we guide you through the process of setting up an automation with the flow builder.
            </p>
          </div>
        </div>
        
        {/* Card 3: Create an automation flow */}
        <div className="flex flex-col">
          <div className="bg-[#f9f9f9] rounded-lg overflow-hidden h-[208px] mb-4">
            <img
              src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/create_customer_journey.jpg"
              alt="Create automation flow interface"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#6b6b6b] text-sm mb-1">step-by-step guide</span>
            <h3 className="text-xl font-medium text-[#241c15] mb-2">Create an automation flow</h3>
            <p className="text-[#4a4a4a] text-base">
              Learn how to build automated workflows that deliver personalized experiences for your contacts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
