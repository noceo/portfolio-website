"use client";

import SplashScreen from "./SplashScreen";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import React from "react";

export const SplashScreenContext = React.createContext();

export default function PageWrapper({ children }) {
  const [isSplashScreenLoading, setSplashScreenLoading] = useState(true);

  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <>
      <SplashScreenContext.Provider value={{ isSplashScreenLoading, setSplashScreenLoading }}>
        <SplashScreen />
        {children}
      </SplashScreenContext.Provider>
      <div className="circle-bg" />
      <div className="noise" />
      <Footer />
    </>
  );
}
