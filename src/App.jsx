import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RootLayout from './pages/RootLayout';
import ServiceProvidersHome from './pages/service-providers/ServiceProvidersHome';
import Footer from './Components/Footer';
import ServiceProviderSignInForm from './Components/ServiceProviderSignIn.component.jsx';
import ServiceProviderRegisterForm from './Components/ServiceProviderRegisterForm.component';
import UserSignInForm from './Components/UserSignInForm.component';
UserSignInForm;

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'service-providers-home',
          element: <ServiceProvidersHome />
        },
        { path: 'auth', element: <ServiceProviderSignInForm/> },
        { path: 'auth/user', element: <UserSignInForm/> }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>;
      {/* <Footer /> */}
    </>
  );
};

export default App;
