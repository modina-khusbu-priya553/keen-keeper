// src/app/not-found.jsx
import Link from 'next/link';
import React from 'react';
import { TbFriendsOff } from 'react-icons/tb';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center gap-6 px-6 text-center">
            
            <TbFriendsOff className="text-[120px] text-[#244D3F] opacity-20" />

            <div className="space-y-2">
                <h1 className="text-8xl font-bold text-[#244D3F]">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800">Page not found</h2>
                <p className="text-[#64748B] max-w-md">
                    Looks like this connection doesn't exist. The page you're looking for may have been moved or deleted.
                </p>
            </div>

            <Link
                href="/"
                className="bg-[#244D3F] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;