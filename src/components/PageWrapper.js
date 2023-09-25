"use client";

import SplashScreen from "./SplashScreen";
import Footer from "./Footer";
import { useEffect, useState, useRef } from "react";
import React from "react";
import { usePreviousRoute } from "@/hooks/usePreviousRoute";

export const SplashScreenContext = React.createContext();
export const PreviousRouteContext = React.createContext();

export default function PageWrapper({ children }) {
  const [isSplashScreenLoading, setSplashScreenLoading] = useState(true);
  const prevRoute = usePreviousRoute();

  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <>
      <PreviousRouteContext.Provider value={prevRoute}>
        <SplashScreenContext.Provider value={{ isSplashScreenLoading, setSplashScreenLoading }}>
          <SplashScreen />
          {children}
        </SplashScreenContext.Provider>
      </PreviousRouteContext.Provider>
      <div className="circle-bg" />
      <div className="noise" />
      <Footer />
    </>
  );
}
