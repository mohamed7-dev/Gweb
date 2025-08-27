import React from "react";
import { WallpapersSection } from "./wallpapers-section";
import { StyleSection } from "./style-section";
import { AccentColorsSection } from "./accent-colors-section";
import { AppMainContent } from "@/features/apps-manager/components/app-main-content";
import { AppMainContentHeader } from "@/features/apps-manager/components/app-main-content/app-main-content-header";
import { SettingsAppHeader } from "../settings-app-header";
import { FullWindowInfo } from "@/features/window-manager/lib/window-manager.slice";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";
import { SettingsAppContentWrapper } from "../settings-app-content-wrapper";

type AppearanceScreenProps = {
  window: FullWindowInfo;
};
export function AppearanceScreen({ window }: AppearanceScreenProps) {
  const { getActiveScreen } = useGlobalStoreContext((state) => state);
  const activeScreen = getActiveScreen();

  return (
    <AppMainContent className="flex-1">
      <AppMainContentHeader windowInfo={window}>
        <SettingsAppHeader title={activeScreen.title} />
      </AppMainContentHeader>
      <SettingsAppContentWrapper className="space-y-6">
        <StyleSection />
        <AccentColorsSection />
        <WallpapersSection />
      </SettingsAppContentWrapper>
    </AppMainContent>
  );
}
