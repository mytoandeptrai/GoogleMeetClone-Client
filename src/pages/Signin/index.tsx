import React from 'react';
import { FcGoogle, FcVideoCall } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import useStore from '../../zustand';
import useSearchParam from '../../hooks/useSearchParam';
import { Navigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvier } from '../../utils/Firebsae';
const SignIn = () => {
   const { currentUser } = useStore();
   const searchParam = useSearchParam();

   const handleLogin = (provider: any) => {
      signInWithPopup(auth, provider);
   };

   if (currentUser) {
      return <Navigate to={searchParam.get('redirect') || '/'} />;
   }

   return (
      <div className='h-screen flex flex-col items-center justify-center px-4'>
         <div className='max-w full w-[400px]'>
            <button
               className='mb-5 px-4 py-2 shadow-md rounded-md w-full flex items-center'
               onClick={() => handleLogin(googleProvier)}
            >
               <FcGoogle className='w-8 h-8 mr-2' />
               Đăng nhập với Google
            </button>
         </div>
      </div>
   );
};

export default SignIn;
