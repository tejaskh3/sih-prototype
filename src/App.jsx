import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ServiceProviderRegisterForm from "./components/ServiceProviderRegisterForm.component";
import ServiceProviderSignInForm from "./components/ServiceProviderSignIn.component";
import UserSignUpForm from "./components/UserSignUpForm.component";
import { UserProvider } from "./context/User.Context";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import ServiceProvidersHome from "./pages/service-providers/ServiceProvidersHome";
import UserSignInForm from "./components/UserSignInForm.component";
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
          index: true,
          element: <HomePage />,
        },
        {
          path: "service-providers-home",
          element: <ServiceProvidersHome />,
        },
        { path: "auth", element: <ServiceProviderSignInForm /> },
        { path: "auth/sign-up", element: <ServiceProviderRegisterForm /> },
        { path: "auth/user", element: <UserSignInForm /> },
        { path: "auth/user/sign-up", element: <UserSignUpForm /> },
      ],
    },
  ]);

  return (
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  );
};

export default App;
