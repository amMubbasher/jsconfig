"use client";

import React from 'react';
import Link from 'next/link';

export default function SignUpFormHero() {
    return (
        <div className="w-full bg-[#deeaf7] py-16 md:py-20">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                {/* Main heading */}
                <h1 className="text-[36px] md:text-[44px] font-bold text-[#241c15] leading-tight mb-6 max-w-[850px] mx-auto">
                    Transform site visitors<br className="hidden md:block" /> into email and SMS subscribers
                </h1>

                {/* Subheading */}
                <p className="text-[16px] md:text-[18px] text-[#4a4a4a] mb-6 max-w-[850px] mx-auto">
                    Grow your email and SMS audience with multiple, customizable forms while<br className="hidden md:block" /> gathering data to personalize your marketing.
                </p>

                {/* See Terms Link */}
                <div className="mb-10">
                    <Link href="/terms" className="text-sm font-medium text-[#241c15] hover:underline">
                        See Terms
                    </Link>
                </div>

                {/* Form Preview Card */}
               
                    <div className="flex flex-col justify-center relative md:flex-row">
                        {/* Left side - Image */}
                        <div className="w-full md:w-[50%] items-center absolute ">
                            <img
                                src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/forms-landing-pages/forms-dashboard/sign_up_form.png"
                                alt="Person using green exercise rope"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
               
            </div>
        </div>
    );
}
