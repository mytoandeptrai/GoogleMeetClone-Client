import { IUser } from '../interfaces/IUser';
import create from 'zustand';

interface Stored {
   currentUser: IUser | undefined | null;
   setUser: (currentUser: IUser | null) => void;
}

const useStore = create<Stored>((set) => ({
   currentUser: {
      displayName: 'Toan',
      email: 'toan@gmail.com',
      photoURL: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
      uid: '123',
   },
   setUser: (currentUser: IUser | null) => {
      console.log(currentUser);
      return set(() => ({
         currentUser,
      }));
   },
}));

export default useStore;
