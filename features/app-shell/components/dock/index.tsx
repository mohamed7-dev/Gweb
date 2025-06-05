"use client";
import React from "react";
import { DockButton } from "./dock-button";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";
import { cn } from "@/lib/utils";
import { AppWindowMacIcon } from "lucide-react";
import Image from "next/image";
import { TooltipWrapper } from "@/components/overlays/tooltip-wrapper";

export function Dock() {
  const { dockWidth, topBarHeight } = useGlobalStoreContext(
    (state) => state.appShellSettings
  );
  const isOverviewActive = useGlobalStoreContext(
    (state) => state.isOverviewActive
  );
  const dockApps = useGlobalStoreContext((state) => state.dockApps);
  const openWindow = useGlobalStoreContext((state) => state.openWindow);
  const activeWorkspace = useGlobalStoreContext(
    (state) => state.activeWorkspace
  );
  return (
    <div
      className={cn(
        "dark bg-shell/50 text-shell-foreground fixed z-50 left-0 p-1 flex flex-col justify-between",
        isOverviewActive && "bg-black/30"
      )}
      style={{
        width: dockWidth,
        height: `calc(100vh - ${topBarHeight}px)`,
        top: topBarHeight,
      }}
    >
      {/* Pinned Apps Goes Here  */}
      <section
        aria-label="pinned apps"
        className="flex flex-col gap-1 items-center"
      >
        {dockApps?.map((app) => (
          <TooltipWrapper
            key={app.id}
            label={app.title}
            side="right"
            sideOffset={10}
          >
            <DockButton
              className="relative"
              onClick={() =>
                openWindow({ appId: app.id, workspaceId: activeWorkspace.id })
              }
            >
              <Image
                src={app.icon["48@2x"]}
                alt={app.title}
                fill
                sizes="96px"
                className="object-contain p-1"
              />
            </DockButton>
          </TooltipWrapper>
        ))}
      </section>

      {/* Open Windows Goes Here */}

      {/* Dock Launcher goes Here  */}
      <DockButton>
        <AppWindowMacIcon />
      </DockButton>
    </div>
  );
}
