// "use client";
// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';

// export default function EmailTemplateSlider() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [hoveredTemplate, setHoveredTemplate] = useState(null);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const sliderRef = useRef(null);
//   const totalPages = 3;

//   // Template data for all pages
//   const templates = [
//     // Page 1
//     [
//       {
//         id: "thanks-for-attending",
//         title: "Thanks for attending",
//         type: "email",
//         imageUrl: "https://storage.googleapis.com/ca-usercontent-prod.mailchimp.com/rendered-nuni-docs%2Fca4e_f482d722-76bb-4504-acb8-5a82037b2d34.png"
//       },
//       {
//         id: "become-a-member",
//         title: "Become a member",
//         type: "email",
//         premium: true,
//         imageUrl: "https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/template_images/email/thumbnails/20240514/588.jpg"
//       },
//       {
//         id: "sms-sign-up",
//         title: "SMS sign up",
//         type: "email",
//         imageUrl: "https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/ftu/guide-me/ai-pbjs/welcome-automation-no-text.png"
//       },
//       {
//         id: "services-sale",
//         title: "Services sale",
//         type: "email",
//         imageUrl: "https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/template_images/email/thumbnails/20240514/587.jpg"
//       },
//       {
//         id: "thank-you-promo",
//         title: "Thank you promo",
//         type: "email",
//         premium: true,
//         imageUrl: "https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/template_images/email/thumbnails/20240514/537.jpg"
//       }
//     ],
//     // Page 2
//     [
//       {
//         id: "services-sale-2",
//         title: "Services sale",
//         type: "email",
//         imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
//       },
//       {
//         id: "thank-you-promo-2",
//         title: "Thank you promo",
//         type: "email",
//         premium: true,
//         active: true,
//         imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
//       },
//       {
//         id: "new-brand-partnership",
//         title: "New brand partnership",
//         type: "email",
//         imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
//       },
//       {
//         id: "welcome-to-event",
//         title: "Welcome to event",
//         type: "email",
//         imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
//       },
//       {
//         id: "seasonal-products",
//         title: "Seasonal products",
//         type: "email",
//         imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
//       }
//     ],
//     // Page 3
//     [
//       {
//         id: "custom-email-designs",
//         title: "Custom email designs",
//         type: "made-for-you",
//         imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
//       },
//       {
//         id: "conference-invite",
//         title: "Conference invite",
//         type: "email",
//         imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
//       },
//       {
//         id: "welcome-new-contacts",
//         title: "Welcome new contacts",
//         type: "automation",
//         imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
//       },
//       {
//         id: "our-service-offerings",
//         title: "Our service offerings",
//         type: "email",
//         imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
//       },
//       {
//         id: "thanks-for-attending-2",
//         title: "Thanks for attending",
//         type: "email",
//         imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
//       }
//     ]
//   ];

//   // Handle page navigation with animation
//   const goToPage = (pageNumber) => {
//     if (pageNumber < 1 || pageNumber > totalPages || isAnimating) return;

//     setIsAnimating(true);
//     setCurrentPage(pageNumber);

//     // Reset animation state after transition completes
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 500);
//   };

//   return (
//     <div className="max-w-[1300px] border border-zinc-300 mx-auto p-6 bg-white rounded-xl mt-10 shadow-sm">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-medium text-[#333333]">Top templates for N/A</h2>
//         <Link
//           href="/email-templates"
//           className="text-[#007c89] hover:text-[#005d68] text-sm font-medium flex items-center transition-colors"
//         >
//           View all email templates
//           <svg className="ml-1.5 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </Link>
//       </div>

//       {/* Template Slider with Animation */}
//       <div className="relative overflow-hidden" style={{ width: '1200px' }}>
//   <div 
//     ref={sliderRef}
//     className="flex transition-transform duration-500 ease-in-out"
//     style={{ transform: `translateX(-${(currentPage - 1) * 1200}px)` }}
//   >
//     {/* Template Pages */}
//     {templates.map((page, pageIndex) => (
//       <div key={`page-${pageIndex}`} className="flex gap-5 min-w-[1000px] border">
//         {page.map((template) => (
//           <div
//             key={template.id}
//             className={`relative border rounded-lg w-[230px] flex-shrink-0 overflow-hidden 
//               ${template.active ? 'border-[#007c89]' : 'border-[#e5e5e5]'}
//               transition-all duration-300 hover:border-green-900 hover:border-3 hover:shadow-md`}
//             onMouseEnter={() => setHoveredTemplate(template.id)}
//             onMouseLeave={() => setHoveredTemplate(null)}
//           >
//             {/* Template Image */}
//             <div className="relative w-full h-[280px]">
//               <img 
//                 src={template.imageUrl}
//                 alt={template.title}
//                 className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//               />

//               {/* Overlay with buttons on hover */}
//               {(hoveredTemplate === template.id || template.active) && (
//                 <div className="absolute inset-0 bg-white bg-opacity-25 flex flex-col items-center justify-center transition-opacity duration-300">
//                   <button 
//                     className="bg-[#007c89] hover:bg-[#005d68] text-white py-2 px-4 rounded text-sm font-medium mb-2 transition-colors"
//                   >
//                     Upgrade to Use
//                   </button>
//                   <button 
//                     className="bg-white hover:bg-[#f5f5f5] text-[#333333] py-2 px-4 rounded text-sm font-medium transition-colors border border-[#e5e5e5] shadow-sm"
//                   >
//                     Preview
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Template Info */}
//             <div className="p-4">
//               {template.type === 'made-for-you' ? (
//                 <div className="flex items-center text-[#8755e9] text-xs mb-1">
//                   <svg className="w-3.5 h-3.5 mr-1 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M8 12.173l-4.702 2.632 1.05-4.5L.798 6.364l4.8-.41L8 2.192l2.402 3.762 4.8.41-3.55 3.94 1.05 4.5L8 12.173z"/>
//                   </svg>
//                   <span>Made for you</span>
//                 </div>
//               ) : (
//                 <div className={`flex items-center text-xs mb-1 ${template.type === 'automation' ? 'text-[#8755e9]' : 'text-[#666666]'}`}>
//                   {template.type === 'email' ? (
//                     <svg className="w-3.5 h-3.5 mr-1 stroke-current" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <rect x="1.5" y="2.5" width="13" height="11" rx="1" strokeWidth="1.25"/>
//                       <path d="M1.5 4L8 9L14.5 4" strokeWidth="1.25" strokeLinecap="round"/>
//                     </svg>
//                   ) : (
//                     <svg className="w-3.5 h-3.5 mr-1 stroke-current" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M8 4v4l2.5 2.5" strokeWidth="1.25" strokeLinecap="round"/>
//                       <circle cx="8" cy="8" r="6.5" strokeWidth="1.25"/>
//                     </svg>
//                   )}
//                   <span>{template.type === 'email' ? 'Email' : 'Automation'}</span>
//                 </div>
//               )}
//               <h3 className="text-[15px] font-medium text-[#333333]">{template.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     ))}
//   </div>

//   {/* Template preview indicators - Optional */}
//   <div className="absolute bottom-0 left-0 w-full flex justify-center mt-2 pb-2 hidden">
//     {[...Array(totalPages)].map((_, index) => (
//       <button
//         key={`indicator-${index}`}
//         className={`w-2 h-2 rounded-full mx-1 ${currentPage === index + 1 ? 'bg-[#007c89]' : 'bg-[#e5e5e5]'}`}
//         onClick={() => goToPage(index + 1)}
//         aria-label={`Go to page ${index + 1}`}
//       />
//     ))}
//   </div>
// </div>

//       {/* Footer Controls */}
//       <div className="flex justify-between items-center mt-8">
//         <button className="px-4 py-2 border border-[#e5e5e5] rounded text-[#333333] text-sm hover:bg-[#f8f8f8] transition-colors">
//           Start from scratch
//         </button>

//         <div className="flex items-center">
//           <button
//             onClick={() => goToPage(currentPage - 1)}
//             disabled={currentPage === 1 || isAnimating}
//             className={`w-10 h-10 flex items-center justify-center border rounded mr-2 
//               ${(currentPage === 1 || isAnimating) ? 'border-[#e5e5e5] text-[#cccccc] cursor-not-allowed' : 
//               'border-[#d5d5d5] text-[#666666] hover:bg-[#f8f8f8]'}`}
//             aria-label="Previous page"
//           >
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M10 12L6 8L10 4" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </button>

//           <span className="text-sm text-[#666666] mx-2">
//             {currentPage} of {totalPages}
//           </span>

//           <button
//             onClick={() => goToPage(currentPage + 1)}
//             disabled={currentPage === totalPages || isAnimating}
//             className={`w-10 h-10 flex items-center justify-center border rounded 
//               ${(currentPage === totalPages || isAnimating) ? 'border-[#e5e5e5] text-[#cccccc] cursor-not-allowed' : 
//               'border-[#d5d5d5] text-[#666666] hover:bg-[#f8f8f8]'}`}
//             aria-label="Next page"
//           >
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M6 12L10 8L6 4" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }





















































































"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function EmailTemplateSlider() {
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredTemplate, setHoveredTemplate] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  const totalPages = 3;

  // Template data for all pages
  const templates = [
    // Page 1
    [
      {
        id: "thanks-for-attending",
        title: "Thanks for attending",
        type: "email",
        imageUrl: "https://storage.googleapis.com/ca-usercontent-prod.mailchimp.com/rendered-nuni-docs%2Fca4e_f482d722-76bb-4504-acb8-5a82037b2d34.png"
      },
      {
        id: "become-a-member",
        title: "Become a member",
        type: "email",
        premium: true,
        imageUrl: "https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/template_images/email/thumbnails/20240514/588.jpg"
      },
      {
        id: "sms-sign-up",
        title: "SMS sign up",
        type: "email",
        imageUrl: "https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/ftu/guide-me/ai-pbjs/welcome-automation-no-text.png"
      },
      {
        id: "services-sale",
        title: "Services sale",
        type: "email",
        imageUrl: "https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/template_images/email/thumbnails/20240514/587.jpg"
      },
      {
        id: "thank-you-promo",
        title: "Thank you promo",
        type: "email",
        premium: true,
        imageUrl: "https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/template_images/email/thumbnails/20240514/537.jpg"
      }
    ],
    // Page 2
    [
      {
        id: "services-sale-2",
        title: "Services sale",
        type: "email",
        imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: "thank-you-promo-2",
        title: "Thank you promo",
        type: "email",
        premium: true,
        active: true,
        imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: "new-brand-partnership",
        title: "New brand partnership",
        type: "email",
        imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: "welcome-to-event",
        title: "Welcome to event",
        type: "email",
        imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: "seasonal-products",
        title: "Seasonal products",
        type: "email",
        imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
      }
    ],
    // Page 3
    [
      {
        id: "custom-email-designs",
        title: "Custom email designs",
        type: "made-for-you",
        imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: "conference-invite",
        title: "Conference invite",
        type: "email",
        imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: "welcome-new-contacts",
        title: "Welcome new contacts",
        type: "automation",
        imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: "our-service-offerings",
        title: "Our service offerings",
        type: "email",
        imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: "thanks-for-attending-2",
        title: "Thanks for attending",
        type: "email",
        imageUrl: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
      }
    ]
  ];

  // Handle page navigation with animation
  const goToPage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages || isAnimating) return;

    setIsAnimating(true);
    setCurrentPage(pageNumber);

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="max-w-[1100px] w-full mx-auto p-6 overflow-hidden mt-10">
      <div className='px-6 border border-zinc-300 p-4 rounded-xl'>
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium text-[#333333]">Top templates for N/A</h2>
          <Link
            href="/email-templates"
            className="text-[#007c89] hover:text-[#005d68] text-sm font-medium flex items-center transition-colors"
          >
            View all email templates
            <svg className="ml-1.5 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Template Slider with Animation */}
        <div className="relative overflow-hidden" style={{ width: '1000px' }}>
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentPage - 1) * 1000}px)` }}
          >
            {/* Template Pages */}
            {templates.map((page, pageIndex) => (
              <div key={`page-${pageIndex}`} className="flex gap-5 min-w-[1000px]">
                {page.map((template) => (
                  <div
                    key={template.id}
                    className={`relative border rounded-lg w-[230px] flex-shrink-0 overflow-hidden 
                    ${template.active ? 'border-[#007c89]' : 'border-[#e5e5e5]'}
                    transition-all duration-300 hover:border-green-900 hover:border-3 hover:shadow-md`}
                    onMouseEnter={() => setHoveredTemplate(template.id)}
                    onMouseLeave={() => setHoveredTemplate(null)}
                  >
                    {/* Template Image */}
                    <div className="relative w-full h-[280px]">
                      <img
                        src={template.imageUrl}
                        alt={template.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />

                      {/* Overlay with buttons on hover */}
                      {(hoveredTemplate === template.id || template.active) && (
                        <div className="absolute inset-0 bg-white bg-opacity-25 flex flex-col items-center justify-center transition-opacity duration-300">
                          <button
                            className="bg-[#007c89] hover:bg-[#005d68] text-white py-2 px-4 rounded text-sm font-medium mb-2 transition-colors"
                          >
                            Upgrade to Use
                          </button>
                          <button
                            className="bg-white hover:bg-[#f5f5f5] text-[#333333] py-2 px-4 rounded text-sm font-medium transition-colors border border-[#e5e5e5] shadow-sm"
                          >
                            Preview
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Template Info */}
                    <div className="p-4">
                      {template.type === 'made-for-you' ? (
                        <div className="flex items-center text-[#8755e9] text-xs mb-1">
                          <svg className="w-3.5 h-3.5 mr-1 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 12.173l-4.702 2.632 1.05-4.5L.798 6.364l4.8-.41L8 2.192l2.402 3.762 4.8.41-3.55 3.94 1.05 4.5L8 12.173z" />
                          </svg>
                          <span>Made for you</span>
                        </div>
                      ) : (
                        <div className={`flex items-center text-xs mb-1 ${template.type === 'automation' ? 'text-[#8755e9]' : 'text-[#666666]'}`}>
                          {template.type === 'email' ? (
                            <svg className="w-3.5 h-3.5 mr-1 stroke-current" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="1.5" y="2.5" width="13" height="11" rx="1" strokeWidth="1.25" />
                              <path d="M1.5 4L8 9L14.5 4" strokeWidth="1.25" strokeLinecap="round" />
                            </svg>
                          ) : (
                            <svg className="w-3.5 h-3.5 mr-1 stroke-current" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 4v4l2.5 2.5" strokeWidth="1.25" strokeLinecap="round" />
                              <circle cx="8" cy="8" r="6.5" strokeWidth="1.25" />
                            </svg>
                          )}
                          <span>{template.type === 'email' ? 'Email' : 'Automation'}</span>
                        </div>
                      )}
                      <h3 className="text-[15px] font-medium text-[#333333]">{template.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Template preview indicators - Optional */}
          <div className="absolute bottom-0 left-0 w-full flex justify-center mt-2 pb-2 hidden">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={`indicator-${index}`}
                className={`w-2 h-2 rounded-full mx-1 ${currentPage === index + 1 ? 'bg-[#007c89]' : 'bg-[#e5e5e5]'}`}
                onClick={() => goToPage(index + 1)}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Footer Controls */}
        <div className="flex justify-between items-center mt-8">
          <button className="px-4 py-2 border border-[#e5e5e5] rounded text-[#333333] text-sm hover:bg-[#f8f8f8] transition-colors">
            Start from scratch
          </button>

          <div className="flex items-center">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1 || isAnimating}
              className={`w-10 h-10 flex items-center justify-center border rounded mr-2 
              ${(currentPage === 1 || isAnimating) ? 'border-[#e5e5e5] text-[#cccccc] cursor-not-allowed' :
                  'border-[#d5d5d5] text-[#666666] hover:bg-[#f8f8f8]'}`}
              aria-label="Previous page"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 12L6 8L10 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <span className="text-sm text-[#666666] mx-2">
              {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages || isAnimating}
              className={`w-10 h-10 flex items-center justify-center border rounded 
              ${(currentPage === totalPages || isAnimating) ? 'border-[#e5e5e5] text-[#cccccc] cursor-not-allowed' :
                  'border-[#d5d5d5] text-[#666666] hover:bg-[#f8f8f8]'}`}
              aria-label="Next page"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 12L10 8L6 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}