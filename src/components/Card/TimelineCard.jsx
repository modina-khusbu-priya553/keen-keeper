import { Card } from '@heroui/react';
import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoMdVideocam } from 'react-icons/io';
import { LuMessageSquareText } from 'react-icons/lu';

const TimelineCard = ({timelines}) => {
    const getIcon = (type) => {
    if (type === 'Call') return <FiPhoneCall className="text-[#244D3F] text-xl" />;
    if (type === 'Text') return <LuMessageSquareText className="text-[#244D3F] text-xl" />;
    if (type === 'Video') return <IoMdVideocam className="text-[#244D3F] text-xl" />;
}
    return (
        <div>
            <Card className='rounded-lg p-4 border border-[#E9E9E9] flex gap-4'>
                  {/* Icon */}
            <div>
                {getIcon(timelines.type)}
            </div>
                <div>
                    <h2 className='text-[#244D3F] font-medium'>{timelines.type} <span className='text-[#64748B] text-sm'>{`with ${timelines.name}`}</span></h2>
                    <h2 className='text-[#64748B] text-sm font-medium'>{new Date(timelines.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h2>
                </div>

            </Card>
        </div>
    );
};

export default TimelineCard;