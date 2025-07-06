"use client";

import React from 'react';
import Image from 'next/image';

export default function WonderTestimonial() {
    return (
        <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-16">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-16">
                {/* Left Column - Text Content */}
                <div className="md:max-w-[50%] flex-1">
                    {/* Wonder Logo */}
                    <div className="mb-1">
                        <img
                            src="https://cdn-images.mailchimp.com/automations/prebuilt-journeys/wonder_logo.svg"
                            alt="Wonder Logo"
                            className="h-14 w-auto"
                        />
                    </div>

                    {/* Testimonial Content */}
                    <div>
                        <p className="text-[#676767] text-lg ">From our customers</p>

                        <h2 className="text-[32px] md:text-[40px] font-medium text-[#241C15] leading-[2px] md:leading-[44px]">
                            One of the biggest victories for us is based on one of the flows. We had attendance of our special events increase by 32%.
                        </h2>

                        <p className="text-[#676767] text-lg">
                            Michael Paul, Head of Customer Experience at Wonder
                        </p>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="flex-1 w-full md:max-w-[55%]">
                    <div className="bg-[#eaeaea] h-full w-full">
                        <img
                            src="https://cdn-images.mailchimp.com/automations/prebuilt-journeys/wonder_dude.jpg"
                            alt="Michael Paul from Wonder"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
