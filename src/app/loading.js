import { Spinner } from '@heroui/react';
import React from 'react';



const Loading = () => {
    return (
       <div className="flex justify-center items-center min-h-screen">
            <Spinner className="text-success" size="lg" />
        </div>
    );
};

export default Loading;