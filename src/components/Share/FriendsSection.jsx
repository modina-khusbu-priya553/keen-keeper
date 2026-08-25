import { friendsData } from '@/lib/data';
import React from 'react';
import FriendsCard from '../Card/FriendsCard';

const FriendsSection = async() => {
    const friends = await friendsData();
    
    return (
        <div className="bg-[#F8FAFC]">
            <div className="lg:px-60 px-6 lg:py-20 py-3 container mx-auto pb-15">
                <div className='space-y-4'>
                    <h2 className='font-semibold text-2xl'>Your Friends</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4 justify-center md:gap-x-6 gap-y-6 lg:gap-6'>
                        {friends.map(friend => <FriendsCard key={friend.id} friend={friend}></FriendsCard>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsSection;