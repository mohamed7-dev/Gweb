import React from "react";
import { FullWindowInfo } from "@/features/window-manager/lib/window-manager.slice";
import { AppSidebar } from "@/features/apps-manager/components/app-sidebar";
import { AppSidebarHeader } from "@/features/apps-manager/components/app-sidebar/app-sidebar-header";
import { SETTINGS_APP_SCREENS_IDS, SIDEBAR_ITEMS } from "../lib/data";
import { AppSidebarButton } from "@/features/apps-manager/components/app-sidebar/app-sidebar-button";
import { AppSidebarContent } from "@/features/apps-manager/components/app-sidebar/app-sidebar-content";
import { cn } from "@/lib/utils";
import { AppearanceScreen } from "./appearance";
import { AppWrapper } from "@/features/apps-manager/components/app-wrapper";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";
import { KeyboardScreen } from "./keyboard";
import { ModifierKeyScreen } from "./keyboard/modifier-key-screen";

type SettingsAppProps = {
  windowInfo: FullWindowInfo;
};
export function SettingsApp({ windowInfo }: SettingsAppProps) {
  const { getActiveScreen, changeScreen } = useGlobalStoreContext(
    (state) => state
  );
  const activeScreen = getActiveScreen();
  return (
    <AppWrapper>
      <AppSidebar>
        <AppSidebarHeader appTitle={windowInfo.app.title} />
        <AppSidebarContent className="space-y-1">
          {Object.values(SIDEBAR_ITEMS).map((item) => (
            <AppSidebarButton
              key={item.id}
              buttonTitle={item.sidebarTitle}
              iconPath={item.icon}
              className={cn(getActiveScreen().id === item.id && "bg-accent")}
              onClick={() => changeScreen(item.id)}
            />
          ))}
        </AppSidebarContent>
      </AppSidebar>
      {activeScreen.id === SETTINGS_APP_SCREENS_IDS.appearance && (
        <AppearanceScreen window={windowInfo} />
      )}
      {activeScreen.id === SETTINGS_APP_SCREENS_IDS.keyboard && (
        <KeyboardScreen window={windowInfo} />
      )}
      {activeScreen.id === SETTINGS_APP_SCREENS_IDS.keyModifier && (
        <ModifierKeyScreen window={windowInfo} />
      )}
    </AppWrapper>
  );
}
