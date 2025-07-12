"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieBar = () => {
    const [showCookieBar, setShowCookieBar] = useState(false);

    useEffect(() => {
        const cookieAccepted = localStorage.getItem('cookieAccepted');
        if (!cookieAccepted) {
            const timer = setTimeout(() => {
                setShowCookieBar(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);
    const handleAccept = () => {
        localStorage.setItem('cookieAccepted', 'true');
        setShowCookieBar(false);
    };

    if (!showCookieBar) return null;

    return (
        <div className='fixed bottom-2 left-0 right-0 z-50 max-w-5xl mx-auto bg-gray-950 text-white backdrop-blur-sm p-4 flex flex-col lg:flex-row gap-5 justify-between items-center'>
            <p>We use cookies to improve your experience.</p>
            <div className='flex items-center gap-4'>
                <Link href="/" className='text-sm text-gray-300 hover:text-white duration-300'>Learn more</Link>
                <button 
                    onClick={handleAccept}
                    className="border border-[#d8d1e2] text-white hover:bg-[#5d5b5f] hover:text-white duration-300 px-5 py-2 rounded font-bold"
                >
                    Accept
                </button>
            </div>
        </div>
    );
};

export default CookieBar;