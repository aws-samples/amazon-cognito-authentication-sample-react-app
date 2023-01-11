import Home from "Home";
import SignIn from "auth/SignIn";
import SignUp from "auth/SignUp";
import ConfirmSignUp from "auth/ConfirmSignUp";
import ResetPassword from "auth/ResetPassword";
import ConfirmResetPassword from "auth/ConfirmResetPassword";

const routes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "confirm-signup",
    element: <ConfirmSignUp />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
  },
  {
    path: "confirm-reset-password",
    element: <ConfirmResetPassword />,
  },
];

export default routes;
