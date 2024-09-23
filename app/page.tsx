import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/AboutUs";

const Home = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Hero />
      <About />
    </main>
  );
};

export default Home;
