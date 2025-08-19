import React from "react";
import { SettingsAppHeader } from "./settings-app-header";
import { FullWindowInfo } from "@/features/window-manager/lib/window-manager.slice";
import { AppSidebar } from "@/features/apps-manager/components/app-sidebar";
import { AppSidebarHeader } from "@/features/apps-manager/components/app-sidebar/app-sidebar-header";
import { AppMainContent } from "@/features/apps-manager/components/app-main-content";
import { AppMainContentHeader } from "@/features/apps-manager/components/app-main-content/app-main-content-header";
import { SIDEBAR_ITEMS } from "../lib/data";
import { AppSidebarButton } from "@/features/apps-manager/components/app-sidebar/app-sidebar-button";
import { AppSidebarContent } from "@/features/apps-manager/components/app-sidebar/app-sidebar-content";
import { cn } from "@/lib/utils";

type SettingsAppProps = {
  windowInfo: FullWindowInfo;
};
export function SettingsApp({ windowInfo }: SettingsAppProps) {
  const [activePage, setActivePage] = React.useState(SIDEBAR_ITEMS.appearance);
  // TODO: get active sidebar item and render the main content title accordingly

  return (
    <div className="rounded-[inherit] flex h-full">
      <AppSidebar>
        <AppSidebarHeader appTitle={windowInfo.app.title} />
        <AppSidebarContent className="space-y-1">
          {Object.values(SIDEBAR_ITEMS).map((item) => (
            <AppSidebarButton
              key={item.id}
              buttonTitle={item.sidebarTitle}
              iconPath={item.icon}
              className={cn(activePage.id === item.id && "bg-accent")}
              onClick={() => setActivePage(item)}
            />
          ))}
        </AppSidebarContent>
      </AppSidebar>
      <AppMainContent className="flex-1">
        <AppMainContentHeader windowInfo={windowInfo}>
          <SettingsAppHeader title={activePage.pageTitle} />
        </AppMainContentHeader>
      </AppMainContent>
    </div>
  );
}
