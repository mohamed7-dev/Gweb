import React from "react";
import { FullWindowInfo } from "../lib/window-manager.slice";
import { cn } from "@/lib/utils";

type OverviewWindowProps = {
  children: React.ReactNode;
  windowInfo: FullWindowInfo;
  workspaceWindowsCount: number;
};
export function OverviewWindow({ children }: OverviewWindowProps) {
  return <div className={cn("relative w-full")}>{children}</div>;
}
