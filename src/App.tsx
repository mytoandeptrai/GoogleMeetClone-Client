import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading';
import PrivateRoute from './components/PrivateRoute';
import Error from './pages/Error';
import HomePage from './pages/Homepage';
import MeetEnded from './pages/MeetEnded';
import Room from './pages/Room';
import SignIn from './pages/Signin';
import { auth } from './utils/Firebsae';
import useStore from './zustand';

function App() {
   const { currentUser, setUser } = useStore();

   useEffect(() => {
      const unSub = onAuthStateChanged(auth, (user) => {
         if (user) {
            return setUser({
               displayName: user?.displayName,
               photoURL: user?.photoURL,
               uid: user?.uid,
               email: user?.email,
            });
         }

         // setUser(null);
      });

      return () => {
         unSub();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   if (typeof currentUser === 'undefined') {
      return <Loading />;
   }

   return (
      <Routes>
         <Route
            path='/'
            element={
               <PrivateRoute>
                  <HomePage />
               </PrivateRoute>
            }
         />
         <Route
            path='/:id'
            element={
               <PrivateRoute>
                  <Room />
               </PrivateRoute>
            }
         />
         <Route path='/sign-in' element={<SignIn />} />
         <Route path='/error' element={<Error />} />
         <Route path='/meet-ended' element={<MeetEnded />} />
      </Routes>
   );
}

export default App;
