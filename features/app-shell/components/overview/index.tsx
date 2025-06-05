"use client";
import React from "react";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";
import { cn } from "@/lib/utils";
import { WorkspacesLayout } from "./workspaces-layout";
import { OverviewSearchBox } from "@/features/search/components/overview-search-box";

export function Overview() {
  const {
    appShellSettings: { topBarHeight, dockWidth },
    activeOverviewVariant,
    isOverviewActive,
  } = useGlobalStoreContext((state) => state);

  return (
    <div
      className={cn(
        "bg-shell text-shell-foreground overflow-hidden",
        isOverviewActive && "flex flex-col"
      )}
      style={{
        height: `calc(100vh - ${topBarHeight}px)`,
        marginInlineStart:
          activeOverviewVariant === "WithoutAppsGrid" ? dockWidth : undefined,
        gap: "1%",
      }}
    >
      {isOverviewActive && (
        <div className="w-full h-[4rem] flex items-center justify-center mx-auto">
          <OverviewSearchBox />
        </div>
      )}
      <WorkspacesLayout containerProps={{ className: "flex-1" }} />
    </div>
  );
}
