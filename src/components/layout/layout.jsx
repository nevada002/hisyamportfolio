import React, { Fragment } from "react";
import Header from "./header/header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Fragment>
      <div className="layout">
        <Header />
        <Outlet className="body" />
      </div>
    </Fragment>
  );
}
