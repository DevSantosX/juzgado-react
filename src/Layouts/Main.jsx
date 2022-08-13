import React from "react";
import { Outlet } from "react-router-dom";
import AsideLeft from "../Components/AsideLeft";
import NavBar from "../Components/NavBar";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <NavBar/>
      <div className="main">
        <AsideLeft />
        <Outlet />
      </div>
    </>
  );
};

export default Main;
