"use client";
import React from "react";
import { QuickAccessButton } from "./quick-access-button";
import { useTheme } from "next-themes";
import { SunMoonIcon } from "lucide-react";

export function DarkModeQuickAccess() {
  const { theme, setTheme } = useTheme();
  const handleDarkModeSwitching = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <QuickAccessButton
      onClick={handleDarkModeSwitching}
      active={theme === "dark"}
    >
      <SunMoonIcon />
      <span>Dark Mode</span>
    </QuickAccessButton>
  );
}
