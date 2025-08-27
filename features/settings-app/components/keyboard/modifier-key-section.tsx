import React from "react";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";
import { SETTINGS_APP_SCREENS_IDS } from "../../lib/data";
import { buttonVariants } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScreenSection } from "../screen-section";

export function ModifierKeySection() {
  const { changeScreen } = useGlobalStoreContext((state) => state);

  return (
    <ScreenSection
      sectionTitle="Key modifiers"
      containerProps={{ className: "rounded-md p-0" }}
    >
      <button
        className="w-full p-4 rounded-[inherit] flex items-center justify-between"
        onClick={() => changeScreen(SETTINGS_APP_SCREENS_IDS.keyModifier)}
      >
        <h3>Shortcuts modifier key</h3>
        <div className="flex items-center gap-2">
          <p>Default</p>
          <div
            className={cn(buttonVariants({ size: "icon", variant: "ghost" }))}
          >
            <ChevronRightIcon />
          </div>
        </div>
      </button>
    </ScreenSection>
  );
}
