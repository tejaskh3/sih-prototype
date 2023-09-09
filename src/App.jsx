import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import ServiceProvidersHome from "./pages/service-providers/ServiceProvidersHome";
import Footer from "./components/Footer";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "service-providers-home",
          element: <ServiceProvidersHome />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>;
      <Footer />
    </>
  );
};

export default App;
