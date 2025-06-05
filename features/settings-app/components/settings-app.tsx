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

type SettingsAppProps = {
  windowInfo: FullWindowInfo;
};
export function SettingsApp({ windowInfo }: SettingsAppProps) {
  // TODO: get active sidebar item and render the main content title accordingly

  return (
    <div className="rounded-[inherit] flex h-full">
      <AppSidebar>
        <AppSidebarHeader appTitle={windowInfo.app.title} />
        <AppSidebarContent>
          <AppSidebarButton
            title={SIDEBAR_ITEMS.appearance.sidebarButton}
            iconPath={SIDEBAR_ITEMS.appearance.icon}
          />
        </AppSidebarContent>
      </AppSidebar>
      <AppMainContent className="flex-1">
        <AppMainContentHeader windowInfo={windowInfo}>
          <SettingsAppHeader title={SIDEBAR_ITEMS.appearance.subTitle} />
        </AppMainContentHeader>
      </AppMainContent>
    </div>
  );
}
