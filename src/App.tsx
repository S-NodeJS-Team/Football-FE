import React from "react";
import "./App.css";
import PublicPage from "./layout/PublicPage";
import { useRoutes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import BecomeOrganizerPage from "./pages/BecomeOrganizerPage";

function App() {
  const mainRoutes = {
    path: "/",
    element: <PublicPage />,
    children: [
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "become-organizer",
        element: <BecomeOrganizerPage />,
      },
    ],
  };

  const routing = useRoutes([mainRoutes]);
  return <>{routing}</>;
}

export default App;
