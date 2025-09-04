import React from "react";
import { CircleDotIcon, DotIcon } from "lucide-react";
import { TriggerButton } from "./trigger-button";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";

export function OverviewButton() {
  const { activateOverview, isOverviewActive, deactivateOverview } =
    useGlobalStoreContext((state) => state);
  const activeWorkspaces = useGlobalStoreContext(
    (state) => state.activeWorkspaces
  );
  const activeWorkspace = useGlobalStoreContext(
    (state) => state.activeWorkspace
  );
  return (
    <TriggerButton
      className="gap-[1px]"
      isActive={isOverviewActive}
      onClick={() =>
        isOverviewActive
          ? deactivateOverview()
          : activateOverview("WithoutAppsGrid")
      }
    >
      {activeWorkspaces.map((w) => {
        if (w.id === activeWorkspace.id) {
          return <CircleDotIcon key={w.id} />;
        }
        return <DotIcon key={w.id} />;
      })}
    </TriggerButton>
  );
}
