import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Pages/RootLayout';
import ServiceProvidersHome from './Pages/Service Providers/ServiceProvidersHome';
import { Typography, Box, Button } from '@mui/material';

import React from 'react';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: 'service-providers-home',
          element: React.createElement(
            'h1',
            { style: { color: 'red' } },
            'Hello'
          )
        }
      ]
    }
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
