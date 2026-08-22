import DetailsCard from '@/components/Card/DetailsCard';
import {  getFriendById } from '@/lib/data';
import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const FriendDetailsPage = async({params}) => {
    const {id} = await params;
    const friend = await getFriendById(id);
   
     if (!friend) {
    return <div>Friend not found</div>;
  }
    return (
        <div className='bg-[#F8FAFC] md:py-20 py-8 md:px-60 px-6'>
          <div className='container mx-auto'>
            <DetailsCard friend={friend}></DetailsCard>
        </div>  
        </div>
    );
};

export default FriendDetailsPage;