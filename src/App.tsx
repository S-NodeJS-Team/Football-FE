import React from "react";
import "./App.css";
import PublicPage from "./layout/PublicPage";
import { useRoutes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import BecomeOrganizerPage from "./pages/BecomeOrganizerPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import VerifyAccountPage from "./pages/VerifyAccountPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import UpdatePasswordPage from "./pages/UpdatePasswordPage";
import AccountSettings from "./pages/AccountSettings";

function App() {
  const homeRoutes = {
    path: "/",
    element: <PublicPage />,
    children: [
      {
        path: "home",
        element: <RegisterPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "become-organizer",
        element: <BecomeOrganizerPage />,
      },
      {
        path: "account-settings",
        element: <AccountSettings />,
      },
    ],
  };

  const publicRoutes = [
    {
      path: "auth/verify-account",
      element: <VerifyAccountPage />,
    },
    {
      path: "forgot-password",
      element: <ForgotPasswordPage />,
    },
    {
      path: "auth/reset-password",
      element: <UpdatePasswordPage />,
    },
  ];

  const routing = useRoutes([homeRoutes, ...publicRoutes]);
  return (
    <>
      {routing}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
