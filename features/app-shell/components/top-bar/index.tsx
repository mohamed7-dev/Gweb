import React from "react";
import { OverviewButton } from "./overview-button";
import { NotificationsCenter } from "./notifications-center";
import { ControlCenter } from "./control-center";

export function TopBar() {
  return (
    <header className="dark bg-shell text-shell-foreground w-full h-8 flex items-center justify-between">
      <div className="w-full my-2 flex items-center justify-between">
        <OverviewButton />
        <NotificationsCenter />
        <ControlCenter />
      </div>
    </header>
  );
}
