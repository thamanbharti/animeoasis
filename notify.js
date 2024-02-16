import React, { useEffect, useState } from 'react';
import './notify.css';

export default function Notify() {
  

  // useEffect(() => {
   
  //   console.log(visb);
  //   const timeoutId = setTimeout(() => {
  //     setVisible(false);
  //   }, 3000);
  //   console.log(visb)
  //   // Cleanup the timeout to avoid memory leaks
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [visible]);

  return (
    <div className='bar' >
      <div className='line'></div>
      @Anime-oasis
      <div className='text'>&#x1F389; Congratulations! Your order is placed</div>
    </div>
  );
}
