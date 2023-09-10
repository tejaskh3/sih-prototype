import firebaseConfig from '../../firebasedetil';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithPhoneNumber,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc, // to be exact it is get doc data
  setDoc // to be exact it is set doc data
} from 'firebase/firestore';

const firebaseApp = initializeApp(firebaseConfig);

const Googleprovider = new GoogleAuthProvider();
Googleprovider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, Googleprovider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userDetails,
  additionalInformation = {}
) => {
  if (!userDetails) return;
  const userDocRef = doc(db, 'users', userDetails.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userDetails;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};
export const createUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password)
    return 'email and password not provided to the function';
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password)
    return 'email and password not provided to the function';
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth);
};
export const onAuthStateChangedListner = callback => {
  onAuthStateChanged(auth, callback);
};

// if !exist then creation of service-provider and returning refrence to service-providers
export const createServiceProviderDocumentFromAuth = async (
  userDetails, // Rename this parameter to match the function call
  otherDetails = {}
) => {
  const serviceProviderDocRef = doc(
    db,
    'service-providers',
    userDetails.uid // Use userDetails instead of serviceProviderDetails
  );
  const serviceProviderSnapShot = await getDoc(serviceProviderDocRef);
  if (!serviceProviderSnapShot.exists()) {
    const { displayName, email } = userDetails; // Use userDetails here
    const createdAt = new Date();

    try {
      await setDoc(serviceProviderDocRef, {
        displayName,
        email,
        createdAt,
        ...otherDetails // Spread otherDetails into the Firestore document
      });
    } catch (error) {
      console.log('Error creating the service provider', error.message);
    }
    return serviceProviderDocRef;
  }
};
export const createProviderFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserFromEmailAndPassword(email, password);
};
export const signInProviderWithEmailAndPassword = async (email, password) => {
  if (!email || !password)
    return 'email and password not provided to the function';
  return await signInUserWithEmailAndPassword(email, password);
};
