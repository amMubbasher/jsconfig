"use client";

import React from 'react';
import { GiSevenPointedStar } from "react-icons/gi";
export default function RecommendedAutomations() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-8">
      <h2 className="text-[28px] font-medium text-[#241c15] mb-4">
        Try these recommended flows
      </h2>
      <p className="text-[16px] text-[#4a4a4a] mb-8">
        Some of these automation templates include generated email content that's personalized for you.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1 - Welcome new contacts */}
        <div className="border border-[#e6e6e6] rounded-xl hover:border-zinc-600 p-6 bg-white">
          <div className="absolute top-6 right-6">
            <span className="bg-[#e3f4ec] text-[#007755] text-xs font-medium py-1 px-3 rounded-full">
              Popular
            </span>
          </div>
          
          <div className="mb-4">
            <div className="w-8 h-8 bg-[#f0f0f0] rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="3.5" width="13" height="9" rx="1" stroke="#241c15" strokeWidth="1.5"/>
                <path d="M2 4L8 8.5L14 4" stroke="#241c15" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          
          <h3 className="text-[18px] font-medium text-[#241c15] mb-2">
            Welcome new contacts
          </h3>
          <p className="text-[14px] text-[#4a4a4a]">
            Increase engagement from new subscribers with a personalized hello.
          </p>
        </div>
        
        {/* Card 2 - Share exclusive content */}
        <div className="border border-[#e6e6e6] rounded-xl hover:border-zinc-600 p-6 bg-white">
          <div className="mb-4 flex gap-1.5">
            <div className="w-8 h-8 bg-[#f0f0f0] rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="3.5" width="13" height="9" rx="1" stroke="#241c15" strokeWidth="1.5"/>
                <path d="M2 4L8 8.5L14 4" stroke="#241c15" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="w-8 h-8 bg-[#1877f2] rounded-full flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 7H8.75V12.25H6.417V7H5.25V5.25H6.417V4.083C6.417 2.917 7 1.75 8.75 1.75H10.5V3.5H9.333C9.042 3.5 8.75 3.792 8.75 4.083V5.25H10.5V7Z" fill="white"/>
              </svg>
            </div>
            <div className="w-8 h-8 bg-[#c13584] rounded-full flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1.75C8.75 1.75 9.042 1.75 9.917 1.75C10.5 1.75 11.083 2.042 11.375 2.333C11.667 2.625 11.958 3.208 11.958 3.792C11.958 4.667 11.958 4.958 11.958 6.708C11.958 8.458 11.958 8.75 11.958 9.625C11.958 10.208 11.667 10.792 11.375 11.083C11.083 11.375 10.5 11.667 9.917 11.667C9.042 11.667 8.75 11.667 7 11.667C5.25 11.667 4.958 11.667 4.083 11.667C3.5 11.667 2.917 11.375 2.625 11.083C2.333 10.792 2.042 10.208 2.042 9.625C2.042 8.75 2.042 8.458 2.042 6.708C2.042 4.958 2.042 4.667 2.042 3.792C2.042 3.208 2.333 2.625 2.625 2.333C2.917 2.042 3.5 1.75 4.083 1.75C4.958 1.75 5.25 1.75 7 1.75ZM7 0.583C5.25 0.583 4.958 0.583 4.083 0.583C3.208 0.583 2.333 0.875 1.75 1.458C1.167 2.042 0.875 2.917 0.875 3.792C0.875 4.667 0.875 4.958 0.875 6.708C0.875 8.458 0.875 8.75 0.875 9.625C0.875 10.5 1.167 11.375 1.75 11.958C2.333 12.542 3.208 12.833 4.083 12.833C4.958 12.833 5.25 12.833 7 12.833C8.75 12.833 9.042 12.833 9.917 12.833C10.792 12.833 11.667 12.542 12.25 11.958C12.833 11.375 13.125 10.5 13.125 9.625C13.125 8.75 13.125 8.458 13.125 6.708C13.125 4.958 13.125 4.667 13.125 3.792C13.125 2.917 12.833 2.042 12.25 1.458C11.667 0.875 10.792 0.583 9.917 0.583C9.042 0.583 8.75 0.583 7 0.583Z" fill="white"/>
                <path d="M7 3.792C5.25 3.792 3.792 5.25 3.792 7C3.792 8.75 5.25 10.208 7 10.208C8.75 10.208 10.208 8.75 10.208 7C10.208 5.25 8.75 3.792 7 3.792ZM7 9.042C5.833 9.042 4.958 8.167 4.958 7C4.958 5.833 5.833 4.958 7 4.958C8.167 4.958 9.042 5.833 9.042 7C9.042 8.167 8.167 9.042 7 9.042Z" fill="white"/>
                <path d="M10.5 3.792C10.5 4.083 10.208 4.375 9.917 4.375C9.625 4.375 9.333 4.083 9.333 3.792C9.333 3.5 9.625 3.208 9.917 3.208C10.208 3.208 10.5 3.5 10.5 3.792Z" fill="white"/>
              </svg>
            </div>
          </div>
          
          <h3 className="text-[18px] font-medium text-[#241c15] mb-2">
            Share exclusive content with new leads
          </h3>
          <p className="text-[14px] text-[#4a4a4a]">
            Welcome new contacts acquired through Meta lead ads. Once a lead is approved, automatically engage them with members-only content via email.
          </p>
        </div>
        
        {/* Card 3 - Celebrate sign-up anniversaries */}
        <div className="border border-[#e6e6e6] rounded-xl hover:border-zinc-600 p-6 bg-white">
          <div className="mb-4">
            <div className="w-8 h-8 bg-[#f0f0f0] rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="3.5" width="13" height="9" rx="1" stroke="#241c15" strokeWidth="1.5"/>
                <path d="M2 4L8 8.5L14 4" stroke="#241c15" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          
          <h3 className="text-[18px] font-medium text-[#241c15] mb-2">
            Celebrate sign-up anniversaries with your contacts
          </h3>
          <p className="text-[14px] text-[#4a4a4a]">
            Offer promotions or well wishes that help contacts feel closer to your brand.
          </p>
        </div>
      </div>
    </div>
  );
}
