'use client';
import React, { useEffect } from 'react';

// error, reset은 기본적으로 제공
export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className='text-center mt-10'>
      <h1>Soemthing went wrong</h1>
      <button className='hover:text-amber-600' onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
