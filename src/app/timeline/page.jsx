
import Filter from '@/components/Card/Filter';
import React from 'react';

const TimeLinePage = () => {
    return (
        <div className='bg-[#F8FAFC] lg:py-20 py-8 lg:px-60 px-6'>
            <div className='container mx-auto'>
                {/* upper */}
                <div className='space-y-6'>
                    <h2 className='font-bold md:text-2xl lg:text-5xl text-lg'>Timeline</h2>
                    <Filter></Filter>
                </div>

                {/* lower */}
                <div>

                </div>
            </div>
        </div>
    );
};

export default TimeLinePage;