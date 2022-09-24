import React from "react";
import Introduction from "../../components/home/introduction/introduction";
import Project from "../../components/home/project/project";
import CenterFooter from "../../components/layout/footer/centerfooter";

export default function Home() {
  return (
    <div className="home">
      <Introduction />
      <hr />
      <Project />
      <CenterFooter />
    </div>
  );
}
