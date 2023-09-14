import { useContext, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ServiceProviderRegisterForm from "./components/ServiceProviderRegisterForm.component";
import ServiceProviderSignInForm from "./components/ServiceProviderSignIn.component";
import UserSignInForm from "./components/UserSignInForm.component";
import UserSignUpForm from "./components/UserSignUpForm.component";
import { UserContext, UserProvider } from "./context/User.Context";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import TalkToLawyer from "./pages/TalkToLawyer";
import ServiceProvidersHome from "./pages/service-providers/ServiceProvidersHome";
import UserHomePage, { userHomeLoader } from "./pages/users/UserHomePage";
import Startup from "./pages/Startup";
import Property from "./pages/Property";
const App = () => {
  // const [currentUser, setCurrentUser] = useContext(UserContext);

  // useEffect(() => {
  //   setCurrentUser((prevState) => ({
  //     ...prevState,
  //     accessToken: localStorage.getItem("accessToken"),
  //   }));
  // }, [setCurrentUser]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "service-providers-home", element: <ServiceProvidersHome /> },
        { path: "auth", element: <ServiceProviderSignInForm /> },
        { path: "auth/sign-up", element: <ServiceProviderRegisterForm /> },
        { path: "auth/user", element: <UserSignInForm /> },
        { path: "auth/user/sign-up", element: <UserSignUpForm /> },
        {
          path: "user/home",
          loader: userHomeLoader,
          element: <UserHomePage />,
        },
        { path: "talk-to-lawyer", element: <TalkToLawyer /> },
        { path: "startup", element: <Startup /> },
        { path: "property", element: <Property /> },
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
