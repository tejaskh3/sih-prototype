import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RootLayout from './pages/RootLayout';
import ServiceProvidersHome from './pages/service-providers/ServiceProvidersHome';
import ServiceProviderSignInForm from './Components/ServiceProviderSignIn.component';
import ServiceProviderRegisterForm from './Components/ServiceProviderRegisterForm.component';
import UserSignInForm from './Components/UserSignInForm.component';
import Advocates from './components/Advocates.component';
import Mediators from './components/Mediators.component';
import Notary from './components/Notary.component';
import Startup from './components/Startup.component';
import Property from './components/Property.component';
// UserSignInForm;

const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <RootLayout />,
  //     children: [
  //       {
  //         index: true,
  //         element: <HomePage />
  //       },
  //       {
  //         index: true,
  //         element: <HomePage />
  //       },
  //       {
  //         path: 'service-providers-home',
  //         element: <ServiceProvidersHome />
  //       },
  //       { path: 'auth', element: <ServiceProviderSignInForm/> },
  //       { path: 'auth/sign-up', element: <ServiceProviderRegisterForm/> },
  //       { path: 'auth/user', element: <UserSignInForm/> }
  //     ]
  //   }
  // ]);

  // return (
  //   <>
  //     <RouterProvider router={router}></RouterProvider>;
  //   </>
  // );
  return(
    <>
    {/* <Advocates/> */}
    {/* <Mediators/> */}
    {/* <Notary/> */}
    {/* <Startup/> */}
    <Property/>
    </>

  )
};

export default App;
