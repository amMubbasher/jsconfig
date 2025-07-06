"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PopupFormsSection() {
  // Template data with images from the provided URLs
  const templateOptions = [
    {
      id: "discount",
      title: "Discount popup",
      description: "Offer a discount to new subscribers",
      imageUrl: "https://forms.admin.mailchimp.com/api/images/getTemplateScreenshot?templateId=557&templateVariationId=4080&width=1280&height=960",
      linkText: "See discount templates",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.9 2 2 2.9 2 4V11C2 11.55 2.22 12.05 2.59 12.42L11.59 21.42C11.95 21.78 12.45 22 13 22C13.55 22 14.05 21.78 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.45 21.77 11.94 21.41 11.58ZM5.5 7C4.67 7 4 6.33 4 5.5C4 4.67 4.67 4 5.5 4C6.33 4 7 4.67 7 5.5C7 6.33 6.33 7 5.5 7Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: "newsletter",
      title: "Newsletter popup",
      description: "Stay in the know",
      imageUrl: "https://forms.admin.mailchimp.com/api/images/getTemplateScreenshot?templateId=728&templateVariationId=5524&width=1280&height=960",
      linkText: "See newsletter templates",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2C9.34784 2 6.8043 3.05357 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34784 22 12 22ZM4 12C4 10.45 4.45 9.01 5.2 7.8L16.2 18.8C14.99 19.56 13.56 20 12 20C8.7 20 6 17.3 6 14V12.5C6 12.22 5.78 12 5.5 12H4.5C4.22 12 4 12.22 4 12.5V12ZM18.8 16.2L7.8 5.2C9.01 4.45 10.45 4 12 4C15.3 4 18 6.7 18 10V11.5C18 11.78 18.22 12 18.5 12H19.5C19.78 12 20 11.78 20 11.5V12C20 13.54 19.56 14.97 18.8 16.2Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: "free-content",
      title: "Free content popup",
      description: "Download an e-book or guide",
      imageUrl: "https://forms.admin.mailchimp.com/api/images/getTemplateScreenshot?templateId=684&templateVariationId=5659&width=1280&height=960",
      linkText: "See free content templates",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14 17H7V15H14V17ZM17 13H7V11H17V13ZM17 9H7V7H17V9Z" fill="currentColor"/>
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-8 mt-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h2 className="text-2xl text-[#241c15] font-medium mr-2">
            Grow your audience with custom popup forms
          </h2>
          <span className="bg-[#f9f0ff] text-[#704295] text-xs font-medium py-0.5 px-2 rounded">
            Beta
          </span>
        </div>
        <Link href="/popup-forms" className="text-[#007c89] font-medium flex items-center hover:underline">
          View all popup forms
          <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="currentColor"/>
          </svg>
        </Link>
      </div>

      <p className="text-[#241c15] text-base mb-6">
        Popups with incentives convert best. Choose the incentive you want to offer people who sign up through your form.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {templateOptions.map(template => (
          <div key={template.id} className="border border-[#e5e5e5] rounded-lg overflow-hidden bg-white">
            <div className="h-[200px] overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('${template.imageUrl}')`,
                  backgroundSize: 'cover'
                }}
              ></div>
            </div>
            <div className="p-5">
              <div className="flex items-start">
                <div className="text-[#241c15] mr-3">
                  {template.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#241c15] mb-1">{template.title}</h3>
                  <p className="text-[#6b6b6b] text-sm mb-3">{template.description}</p>
                  <Link href={`/templates/${template.id}`} className="text-[#007c89] text-sm font-medium hover:underline">
                    {template.linkText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
