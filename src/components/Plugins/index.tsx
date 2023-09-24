"use client";
import AOS from "aos";
import { useEffect } from "react";

const PluginsComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);
  return <></>;
};

export default PluginsComponent;
