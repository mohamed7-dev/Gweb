"use client";
import React from "react";
import { QuickAccessButton } from "./quick-access-button";
import { FullscreenIcon } from "lucide-react";

export function FullScreenQuickAccess() {
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const handleFullScreenToggling = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };
  return (
    <QuickAccessButton onClick={handleFullScreenToggling} active={isFullscreen}>
      <FullscreenIcon />
      <span>Full Screen</span>
    </QuickAccessButton>
  );
}
