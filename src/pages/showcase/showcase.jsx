import React from "react";
import Description from "../../components/showcase/description/description";
import CenterFooter from "../../components/layout/footer/centerfooter";
import Project from "../../components/showcase/dribbble/dribbble";

export default function Showcase() {
  return (
    <div className="showcase">
      <Description />
      <Project />
      <CenterFooter />
    </div>
  );
}
