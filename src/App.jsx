import { Routes, Route, Router } from 'react-router-dom';
import { signInWithGooglePopup } from './utils/firebase/firebase';
const App = () => {
  return (
    <>
      <h1>Sih Prototpe</h1>
      <button onClick={signInWithGooglePopup}>sign in</button>
    </>
  );
};

export default App;
