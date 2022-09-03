import * as React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useStore from '../../zustand';

export interface IPrivateRouteProps {
   children: React.ReactNode;
}

export default function PrivateRoute({ children }: IPrivateRouteProps) {
   const { currentUser } = useStore();
   const location = useLocation();

   if (!currentUser) {
      return (
         <Navigate
            to={`/sign-in?redirect=${encodeURIComponent(location.pathname)}`}
         />
      );
   }

   return <>{children}</>;
}
