"use client";

import LightRays from "@/components/LightRays";
import { NavBar } from "@/components/NavBar";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { ThemeContext } from "@/providers/ThemeProvider";
import { useContext, useEffect, useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { useThemeTimeout } from "@/components/hooks/useThemeTimeout";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const background = useThemeTimeout(theme, 300)
  return (
    <div className="relative h-500">
      <NavBar />
      {background === "dark" ? (
        <LightRays
          raysOrigin="top-center"
          raysColor="#fc1414"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={10}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.3}
          distortion={0.05}
          className="-z-10 absolute top-0 left-0"
        />
      ) : (
        <BackgroundRippleEffect rows={15} />
      )}
      <Hero />
      <Projects />
    </div>
  );
}
