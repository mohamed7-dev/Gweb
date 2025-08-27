import { AppMainContent } from "@/features/apps-manager/components/app-main-content";
import { AppMainContentHeader } from "@/features/apps-manager/components/app-main-content/app-main-content-header";
import React from "react";
import { SettingsAppHeader } from "../settings-app-header";
import { ModifierKeySection } from "./modifier-key-section";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";
import { FullWindowInfo } from "@/features/window-manager/lib/window-manager.slice";
import { SettingsAppContentWrapper } from "../settings-app-content-wrapper";

export function KeyboardScreen({ window }: { window: FullWindowInfo }) {
  const { getActiveScreen } = useGlobalStoreContext((state) => state);
  const activeScreen = getActiveScreen();

  return (
    <AppMainContent className="flex-1">
      <AppMainContentHeader windowInfo={window}>
        <SettingsAppHeader title={activeScreen.title} />
      </AppMainContentHeader>
      <SettingsAppContentWrapper>
        <ModifierKeySection />
      </SettingsAppContentWrapper>
    </AppMainContent>
  );
}
