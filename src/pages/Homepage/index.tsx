import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import useStore from '../../zustand';

const HomePage = () => {
   const { currentUser } = useStore();
   const navigate = useNavigate();
   const [input, setInput] = useState('');
   return (
      <div>
         <Header />
         <div className='container flex items-center justify-between h-[calc(100vh-72px)]'>
            <div className='mx-auto w-[700px] max-w-full flex flex-col items-center justify-center'>
               <h1 className='text-center text-xl font-bold mb-5'>
                  Tạo cuộc họp mới miễn phí với GoogleMeet
               </h1>

               <div
                  className='max-w-full 
                  w-[330px]
                  aspect-full
                  '
               >
                  <img
                     src='https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg'
                     alt='pic'
                  />
               </div>

               <div className='mt-5 flex md:flex-row flex-col'>
                  <button
                     onClick={() => navigate(`/${currentUser?.uid}`)}
                     className='px-3 py-2 rounded-md bg-blue-500 font-semibold md:mr-5 mr-0 text-white mb-5 md:mb-0'
                  >
                     Tạo cuộc họp mới
                  </button>
                  <form
                     onSubmit={(e) => {
                        e.preventDefault();
                        navigate(`/${input}`);
                     }}
                  >
                     <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='px-4 py-2 bg-gray-600 rounded-md outline-none text-white'
                        placeholder='Nhập mã mời....'
                     />
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomePage;
