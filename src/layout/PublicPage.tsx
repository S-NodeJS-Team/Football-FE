import * as React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

interface IPublicPageProps {}

const PublicPage: React.FunctionComponent<IPublicPageProps> = (props) => {
  return (
    <>
      <NavBar />

      <Outlet />
    </>
  );
};

export default PublicPage;
