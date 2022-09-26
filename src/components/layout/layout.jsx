import React, { Fragment } from "react";
import Header from "./header/header";
import { Outlet } from "react-router-dom";
import Watermark from "./watermark";

export default function Layout() {
  return (
    <Fragment>
      <div className="layout">
        <Header />
        <Outlet className="body" />
        <Watermark />
      </div>
    </Fragment>
  );
}
