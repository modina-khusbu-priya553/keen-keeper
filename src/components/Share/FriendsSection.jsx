import { friendsData } from '@/lib/data';
import React from 'react';
import FriendsCard from '../Card/FriendsCard';

const FriendsSection = async() => {
    const friends = await friendsData();
    
    return (
        <div className="bg-[#F8FAFC]">
            <div className="md:px-60 px-6 md:py-20 py-3 container mx-auto">
                <div className='space-y-4'>
                    <h2 className='font-semibold text-2xl'>Your Friends</h2>
                    <div className='grid md:grid-cols-4 items-center justify-center gap-6'>
                        {friends.map(friend => <FriendsCard key={friend.id} friend={friend}></FriendsCard>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsSection;