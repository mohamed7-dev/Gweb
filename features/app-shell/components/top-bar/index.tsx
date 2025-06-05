"use client";
import React from "react";
import { OverviewButton } from "./overview-button";
import { NotificationsCenter } from "./notifications-center";
import { ControlCenter } from "./control-center";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";
import { cn } from "@/lib/utils";

export function TopBar() {
  const { topBarHeight } = useGlobalStoreContext(
    (state) => state.appShellSettings
  );
  const isOverviewActive = useGlobalStoreContext(
    (state) => state.isOverviewActive
  );
  return (
    <header
      className={cn(
        "dark bg-shell text-shell-foreground w-full flex items-center justify-between",
        isOverviewActive && "bg-black/30"
      )}
      style={{
        height: topBarHeight,
      }}
    >
      <div className="w-full my-2 flex items-center justify-between">
        <OverviewButton />
        <NotificationsCenter />
        <ControlCenter />
      </div>
    </header>
  );
}
