"use client";
import React from "react";
import { DockButton } from "./dock-button";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";

export function LauncherButton() {
  const activateOverview = useGlobalStoreContext(
    (state) => state.activateOverview
  );
  // TODO: configure this button to render the app logo
  return <DockButton onClick={() => activateOverview("WithAppsGrid")} />;
}
