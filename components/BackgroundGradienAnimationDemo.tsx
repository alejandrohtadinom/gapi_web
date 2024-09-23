import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-center">
        <h1 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-3xl md:text-4xl lg:text-7xl">
          GAPI
        </h1>
        <p>Grupo de Atencion Psicologica Integral</p>
        <div className="m-20 flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span>Contactos</span>
          </HoverBorderGradient>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
