import { Button } from "@/components/ui/button";
import { AppMainContent } from "@/features/apps-manager/components/app-main-content";
import { AppMainContentHeader } from "@/features/apps-manager/components/app-main-content/app-main-content-header";
import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { SettingsAppHeader } from "../settings-app-header";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";
import { FullWindowInfo } from "@/features/window-manager/lib/window-manager.slice";
import { SettingsAppContentWrapper } from "../settings-app-content-wrapper";

type ModifierKeyScreenProps = {
  window: FullWindowInfo;
};
export function ModifierKeyScreen({ window }: ModifierKeyScreenProps) {
  const { getActiveScreen, changeScreen } = useGlobalStoreContext(
    (state) => state
  );
  const activeScreen = getActiveScreen();

  return (
    <AppMainContent className="flex-1">
      <AppMainContentHeader className="flex items-center" windowInfo={window}>
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => changeScreen(activeScreen.parentId as string)}
        >
          <ChevronLeftIcon />
        </Button>
        <SettingsAppHeader title={activeScreen.title} />
      </AppMainContentHeader>
      <SettingsAppContentWrapper>
        <p>Modifier Key Screen</p>
      </SettingsAppContentWrapper>
    </AppMainContent>
  );
}
