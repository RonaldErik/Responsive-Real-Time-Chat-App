import React from 'react';
import Lottie from 'react-lottie';
import { animationDefaultOptions } from '@/lib/utils';

const EmptyChatContainer = () => {
  return (
    <div className='flex flex-1 flex-col items-center justify-center bg-[#1c1d25] h-full w-full p-4 border-2 border-green-500'> {/* Debugging border */}
      {/* Lottie Animation Container */}
      <div className='max-w-[400px] w-full aspect-square mb-8'>
        <Lottie
          options={animationDefaultOptions}
          isClickToPauseDisabled
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Welcome Text */}
      <div className="text-center space-y-4 max-w-2xl">
        <h3 className='text-2xl md:text-4xl font-medium text-white/90'>
          Hi<span className='text-purple-500'>!</span> Welcome to {' '}
          <span className='text-purple-500'>Syncronus</span> Chat App
          <span className='text-purple-500'>.</span>
        </h3>
        <p className='text-white/60 text-sm md:text-base'>
          Start a new conversation or select an existing chat from your list
        </p>
      </div>
    </div>
  );
}

export default EmptyChatContainer;