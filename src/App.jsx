import { Routes, Route, Router } from 'react-router-dom';

import OutlinedCard from './components/Card';
import ActionAreaCard from './components/ServiceProvider';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <OutlinedCard />
      <ActionAreaCard />
      <Footer/>
    </div>
  );
};

export default App;
