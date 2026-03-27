import React from 'react';

const NoSelectedCard = () => {
    return (
        <div className='text-center bg-blue-200 space-y-5 py-10'>
            <h2 className='text-4xl font-bold'>No Players Selected Yet</h2>
            <p className='text-2xl font-semibold'>Go to Available Tab to Select Players</p>
        </div>
    );
};

export default NoSelectedCard;