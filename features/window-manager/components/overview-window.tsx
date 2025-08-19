import React from "react";
import { FullWindowInfo } from "../lib/window-manager.slice";
import { cn } from "@/lib/utils";

type OverviewWindowProps = {
  children: React.ReactNode;
  windowInfo: FullWindowInfo;
  workspaceWindowsCount: number;
};
export function OverviewWindow({
  children,
  windowInfo,
  workspaceWindowsCount,
}: OverviewWindowProps) {
  const { dimensions, position } = windowInfo;
  const scalingFactor = 10 / 100 + workspaceWindowsCount;
  return (
    <div
      className={cn("relative w-full")}
      style={
        {
          // width: dimensions?.width ?? (0 / workspaceWindowsCount) * 0.1,
        }
      }
    >
      {children}
    </div>
  );
}
