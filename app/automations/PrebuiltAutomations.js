"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function PrebuiltAutomations() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All journeys' },
    { id: 'welcome', name: 'Welcome' },
    { id: 'abandoned', name: 'Abandoned cart' },
    { id: 'purchase', name: 'Purchase follow-up' },
    { id: 'retargeting', name: 'Retargeting' },
    { id: 'birthday', name: 'Birthday' }
  ];
  
  const automations = [
    {
      id: 'welcome-series',
      title: 'Welcome series',
      description: 'Introduce yourself to new contacts',
      category: 'welcome',
      image: '/automation-welcome.svg',
      complexity: 'medium',
      emails: 3
    },
    {
      id: 'abandoned-cart',
      title: 'Abandoned cart',
      description: 'Remind customers about items left in their cart',
      category: 'abandoned',
      image: '/automation-cart.svg',
      complexity: 'medium',
      emails: 3
    },
    {
      id: 'customer-re-engagement',
      title: 'Customer re-engagement',
      description: 'Reconnect with customers who haven\'t purchased recently',
      category: 'retargeting',
      image: '/automation-retarget.svg',
      complexity: 'complex',
      emails: 4
    },
    {
      id: 'order-notification',
      title: 'Order notification',
      description: 'Keep customers informed about their purchases',
      category: 'purchase',
      image: '/automation-order.svg',
      complexity: 'simple',
      emails: 1
    },
    {
      id: 'birthday-celebration',
      title: 'Birthday celebration',
      description: 'Celebrate your customers\' birthdays',
      category: 'birthday',
      image: '/automation-birthday.svg',
      complexity: 'simple',
      emails: 1
    },
    {
      id: 'product-recommendations',
      title: 'Product recommendations',
      description: 'Suggest products based on purchase history',
      category: 'purchase',
      image: '/automation-recommendations.svg',
      complexity: 'complex',
      emails: 3
    }
  ];
  
  const filteredAutomations = selectedCategory === 'all' 
    ? automations 
    : automations.filter(automation => automation.category === selectedCategory);
    
  // Helper function to get complexity indicator
  const ComplexityIndicator = ({ level }) => {
    const dots = [];
    const total = level === 'simple' ? 1 : level === 'medium' ? 2 : 3;
    
    for (let i = 0; i < 3; i++) {
      dots.push(
        <div key={i} 
          className={`w-2 h-2 rounded-full ${i < total ? 'bg-[#007C89]' : 'bg-[#E2E6E8]'}`} 
        />
      );
    }
    
    return (
      <div className="flex items-center gap-1">
        {dots}
      </div>
    );
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-[28px] font-semibold text-[#241C15] mb-2">
          Get started with prebuilt journeys
        </h1>
        <p className="text-[16px] text-[#4A4A4A]">
          Save time with our prebuilt marketing automations. Choose a template and customize it to fit your needs.
        </p>
      </div>
      
      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === category.id 
                ? 'bg-[#F9F9F9] text-[#007C89] border border-[#E6E6E6]' 
                : 'bg-white text-[#4A4A4A] border border-transparent hover:bg-[#F9F9F9]'}`
            }
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Automation cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredAutomations.map(automation => (
          <div
            key={automation.id}
            className="bg-white border border-[#E6E6E6] rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* Card top - Flow visualization */}
            <div className="h-[160px] bg-[#F0F5F7] p-4 flex items-center justify-center">
              {/* This would be a proper SVG in a real implementation */}
              <div className="w-full h-full rounded flex items-center justify-center text-[#007C89] text-center p-4">
                <div className="flex flex-col items-center justify-center">
                  <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="15" width="20" height="30" rx="2" fill="#007C89" />
                    <rect x="40" y="15" width="20" height="30" rx="2" fill="#007C89" opacity="0.7" />
                    <rect x="75" y="15" width="20" height="30" rx="2" fill="#007C89" opacity="0.4" />
                    <path d="M25 30L40 30" stroke="#007C89" strokeWidth="2" />
                    <path d="M60 30L75 30" stroke="#007C89" strokeWidth="2" />
                  </svg>
                  <span className="text-xs mt-2">{automation.emails} Emails</span>
                </div>
              </div>
            </div>
            
            {/* Card content */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-[18px] font-medium text-[#241C15] mb-1">
                    {automation.title}
                  </h3>
                  <p className="text-[14px] text-[#5A5A5A]">
                    {automation.description}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xs text-[#5A5A5A] mr-2">Complexity:</span>
                  <ComplexityIndicator level={automation.complexity} />
                </div>
                <button
                  className="text-sm text-[#007C89] font-medium hover:underline"
                >
                  Preview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
