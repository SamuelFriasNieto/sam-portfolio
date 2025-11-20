"use client";

import LightRays from "@/components/LightRays";
import { NavBar } from "@/components/NavBar";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { ThemeContext } from "@/providers/ThemeProvider";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const [background, setBackground] = useState<string>("dark");
  useEffect(() => {
    setTimeout(() => {
      setBackground(theme);
    }, 300);
  }, [theme]);
  return (
    <div className="relative h-screen">
      <NavBar />
      {background === "dark" ? (
        <LightRays
          raysOrigin="top-center"
          raysColor="#c92020"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.3}
          distortion={0.05}
          className="-z-10 absolute top-0 left-0"
        />
      ) : (
        <BackgroundRippleEffect rows={15} />
      )}
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold z-10">Hola soy Samuel el developeador de stack completo</h1>
      </div>
    </div>
  );
}
