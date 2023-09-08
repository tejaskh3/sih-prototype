import { Routes, Route, Router } from 'react-router-dom';

import OutlinedCard from './components/Card';
import ActionAreaCard from './components/ServiceProvider';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <>
      <OutlinedCard />
      <ActionAreaCard />
      <Testimonials/>
      <Footer/>
    </>

  );
};

export default App;
