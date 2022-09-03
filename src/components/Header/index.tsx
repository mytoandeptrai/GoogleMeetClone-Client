import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useStore from '../../zustand';
import { FcVideoCall } from 'react-icons/fc';
import { AiOutlineLogout, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/Firebsae';

const Header = () => {
   const { currentUser } = useStore();
   const [showMenu, setShowMenu] = useState(false);

   const userInformationList = [
      {
         icon: <AiOutlineUser className='w-6 h-6 mr-2' />,
         content: `${currentUser?.displayName}`,
         onClick: () => {
            return;
         },
      },
      {
         icon: <AiOutlineMail className='w-6 h-6 mr-2' />,
         content: `${currentUser?.email}`,
         onClick: () => {
            return;
         },
      },
      {
         icon: <AiOutlineMail className='w-6 h-6 mr-2' />,
         content: `Đăng Xuất`,
         onClick: () => signOut(auth),
      },
   ];

   useEffect(() => {
      window.addEventListener('click', () => setShowMenu(false));

      return () => {
         window.removeEventListener('click', () => setShowMenu(false));
      };
   }, [showMenu]);

   return (
      <div className='p-4 flex items-center justify-between relative'>
         <Link to='/' className='flex items-center'>
            <FcVideoCall className='w8 h-8 mr-1' />
            <span className='text-lg font-semibold text-yellow-500'>
               Google
            </span>
            <span className='text-lg font-semibold text-red-500'>Meet</span>
         </Link>

         <div
            onClick={(e) => {
               e.stopPropagation();
               setShowMenu(!showMenu);
            }}
            className='w-8 h-8 rounded-full overflow-hidden cursor-pointer transition-all'
         >
            <img
               src={currentUser?.photoURL || ''}
               alt={currentUser?.displayName || ''}
            />
         </div>

         {showMenu && (
            <ul className='absolute right-0 bg-[#fff] top-0 mt-[50px] shadow-md py-4 rounded-md fade'>
               {userInformationList.map((el) => (
                  <li
                     className={`flex items-center px-4 text-sm font-medium mb-5 cursor-pointer last:mb-0`}
                  >
                     {el.icon}
                     {el.content}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};

export default Header;
