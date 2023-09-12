import { Routes, Route, Router } from 'react-router-dom';

import OutlinedCard from './components/Card';
import ActionAreaCard from './components/ServiceProvider';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Advocates from './components/Advocates.component';

const App = () => {
  return (
    <>
      <OutlinedCard />
      <ActionAreaCard />
      <Testimonials/>
      <Footer/>
      {/* <Advocates/> */}
    </>

  );
};

export default App;
