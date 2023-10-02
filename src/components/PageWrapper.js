"use client";

import SplashScreen from "./SplashScreen";
import { useEffect, useState } from "react";
import React from "react";
import { usePreviousRoute } from "@/hooks/usePreviousRoute";
import CircleBackground from "./CircleBackground";

export const SplashScreenContext = React.createContext();
export const PreviousRouteContext = React.createContext();
export const PageTransitionContext = React.createContext();

export default function PageWrapper({ children, circleStyles }) {
  const [isSplashScreenLoading, setSplashScreenLoading] = useState(true);
  const [pageTransition, setPageTransition] = useState({
    isRunning: false,
    location: "/",
  });
  const prevRoute = usePreviousRoute();

  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <>
      <PageTransitionContext.Provider value={{ pageTransition, setPageTransition }}>
        <PreviousRouteContext.Provider value={prevRoute}>
          <SplashScreenContext.Provider value={{ isSplashScreenLoading, setSplashScreenLoading }}>
            <SplashScreen />
            {children}
          </SplashScreenContext.Provider>
        </PreviousRouteContext.Provider>
        <CircleBackground circleStyles={circleStyles} />
      </PageTransitionContext.Provider>
      <div className="noise" />
    </>
  );
}
