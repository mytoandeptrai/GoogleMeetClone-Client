import React from 'react';
import { CircularProgress } from 'react-cssfx-loading';

const Loading = () => {
   return (
      <div className='fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center bg-[#333]'>
         <CircularProgress />
      </div>
   );
};

export default Loading;
