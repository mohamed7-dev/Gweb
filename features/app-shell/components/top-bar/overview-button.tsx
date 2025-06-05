import React from "react";
import { CircleDotIcon, DotIcon } from "lucide-react";
import { TriggerButton } from "./trigger-button";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";

export function OverviewButton() {
  const { activateOverview, isOverviewActive } = useGlobalStoreContext(
    (state) => state
  );

  return (
    <TriggerButton
      className="gap-[1px]"
      isActive={isOverviewActive}
      onClick={() => activateOverview("WithoutAppsGrid")}
    >
      <DotIcon />
      <DotIcon />
      <CircleDotIcon />
      <DotIcon />
    </TriggerButton>
  );
}
