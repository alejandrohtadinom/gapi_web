import React from "react";
import ProfileCard from "./ui/profile-card";

const About = () => {
  return (
    <section id="about" className="flex flex-col min-w-full min-h-screen">
      <ProfileCard
        title="psicologo clinico"
        name="Mariana Ojeda"
        description="Lorem ipsum dolor sit amet"
        side="left"
      />
      <ProfileCard
        title="psicologo clinico"
        name="Carlos Espinoza"
        description="Lorem ipsum dolor sit amet"
        side=""
      />
    </section>
  );
};

export default About;
