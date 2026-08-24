'use client'
import Filter from '@/components/Card/Filter';
import TimelineCard from '@/components/Card/TimelineCard';
import { getAllTimeline } from '@/utils/localDB';
import React, { useEffect, useState } from 'react';
import { HiOutlineArchiveBoxXMark } from 'react-icons/hi2';

const TimeLinePage = () => {

    const [timeline, setTimeline] = useState([]);

    useEffect(() =>{
        setTimeline(getAllTimeline());
    } , [])

    if (timeline.length === 0){
        return(
            <div className='lg:py-20 py-8 lg:px-60 px-6 bg-[#F8FAFC]'>
                <div className='container mx-auto bg-gray-100 flex flex-col gap-5 py-8 px-4 items-center justify-center shadow'>
                    <HiOutlineArchiveBoxXMark className='text-5xl text-red-500'/>
                    <h2 className='font-bold text-3xl'>No interactions yet</h2>
                    <p className='text-gray-500'>Your interaction history will appear here.</p>
                </div>
            </div>
        );
    };
    
    console.log(timeline)
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
                    {timeline.map((timelines, index) => <TimelineCard key={index} timelines={timelines}></TimelineCard>)}
                </div>
            </div>
        </div>
    );
};

export default TimeLinePage;