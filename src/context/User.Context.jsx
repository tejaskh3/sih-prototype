import { createContext, useEffect, useState } from "react";
// import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  currentUser: {
    name: null,
    accessToken: null
  },
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: null,
    accessToken: null,
  });

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     setCurrentUser(user);
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>
      {children}
    </UserContext.Provider>
  );
};
