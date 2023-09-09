import { createContext, useEffect, useState } from 'react';
import { onAuthStateChangedListner } from '../utils/firebase/firebase';
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});

export const UserProvider = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(()=>{
    onAuthStateChangedListner();
  },[])
};
