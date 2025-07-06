"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiSevenPointedStar } from "react-icons/gi";
export default function AutomationFlowsComponent() {
    const automationCategories = [
        {
            id: 'welcome',
            title: 'Welcome new contacts',
            description: 'Find and greet new contacts with welcome flows.',
            flowCount: 22,
            imageUrl: 'https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/mc-growth/welcome_small.png'
        },
        {
            id: 'nurture',
            title: 'Nurture leads',
            description: 'Build personalized relationships with contacts and customers.',
            flowCount: 51,
            imageUrl: 'https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/mc-growth/drive_repeat_customers_small.png'
        },
        {
            id: 'reengage',
            title: 'Re-engage contacts',
            description: 'Target less engaged contacts before its too late.',
            flowCount: 10,
            imageUrl: 'https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/mc-growth/build_customer_loyalty_small.png'
        },
        {
            id: 'support',
            title: 'Support contacts',
            description: 'Automate follow ups, manage contacts and collect feedback.',
            flowCount: 20,
            imageUrl: 'https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/mc-growth/drive_repeat_customers_small.png'
        },
        {
            id: 'transactions',
            title: 'Automate transactions',
            description: 'Keep customers updated with real-time transaction notifications.',
            flowCount: 8,
            imageUrl: 'https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/mc-growth/transaction_small.png'
        }
    ];

    return (
        <div className="max-w-[1200px] mx-auto px-6 py-8">
            {/* Header section */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-medium text-[#241c15]">Browse automation flows by goals</h1>
                <Link
                    href="/flow-templates"
                    className="text-[#007c89] hover:text-[#004e54] font-medium flex items-center transition-colors"
                >
                    See all flow templates
                  <GiSevenPointedStar />
                </Link>
            </div>

            {/* Notification banner */}
            <div className="bg-[#faf8f4] border-y border-[#e6e6e6] p-4 mb-6 flex items-center">
                <div className="text-[#241c15] mr-2">
                    <svg width="22" height="22" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0L10.1 4.8L15.5 5.6L11.7 9.3L12.5 14.7L8 12.1L3.5 14.7L4.3 9.3L0.5 5.6L5.9 4.8L8 0Z" fill="#FFD74F" />
                    </svg>
                </div>
                <p className="text-lg text-[#241c15]">
                    You are on the Free Plan. Enjoy a preview of Pre-Built Customer Journeys, then{' '}
                    <Link href="/upgrade" className="text-[#007c89] hover:underline font-medium">
                        upgrade
                    </Link>{' '}
                    to launch them.
                </p>
            </div>

            {/* Grid of automation categories */}
            <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
                {automationCategories.map((category) => (
                    <div
                        key={category.id}
                        className="bg-white border border-zinc-300 hover:border-zinc-700 rounded-lg flex hover:shadow-sm transition-shadow"
                    >
                        {/* Left side - Image */}
                        <div className="w-44 bg-[#f8fafb] h-44 mr-4 flex-shrink-0">
                            <div className="relative w-full h-full">
                                <img
                                    src={category.imageUrl}
                                    alt={category.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div className="flex flex-col py-5 justify-between">
                            <div>
                                <h3 className="text-lg font-medium text-[#241c15] mb-1">
                                    {category.title}
                                </h3>
                                <p className="text-[14px] text-[#60676c] mb-4">
                                    {category.description}
                                </p>
                            </div>

                            <Link
                                href={`/automation-flows/${category.id}`}
                                className="text-[#007c89] hover:text-[#004e54] font-medium transition-colors"
                            >
                                See {category.flowCount} automation flows
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
