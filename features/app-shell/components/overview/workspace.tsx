import React from "react";
import { cn } from "@/lib/utils";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";
import Image from "next/image";
import { WorkSpaceInstance } from "../../lib/workspace.slice";
import { FloatingWindow } from "@/features/window-manager/components/floating-window";

type WorkspaceProps = {
  containerProps?: React.ComponentProps<"div">;
  workspaceInfo: WorkSpaceInstance;
};
export function Workspace(props: WorkspaceProps) {
  const { containerProps, workspaceInfo } = props;
  const { deactivateOverview, isOverviewActive } = useGlobalStoreContext(
    (state) => state
  );
  const getWindowInfo = useGlobalStoreContext((state) => state.getWindowInfo);
  const activeWallpaper = useGlobalStoreContext(
    (state) => state.appearanceSettings.activeWallpaper
  );
  const windows = workspaceInfo.windows.map((w) => getWindowInfo(w.id));
  // TODO: get workspace windows and render them based on the active overview variant
  // if it's not active, then render the FloatingWindows. else if "withoutAppsGrid", then
  // render the OverviewWindows
  return (
    <div
      className={cn(
        "dark bg-secondary w-full h-full relative shadow-lg",
        isOverviewActive && "rounded-xl",
        containerProps?.className
      )}
      onClick={() => deactivateOverview()}
      {...containerProps}
    >
      {windows.map((w) => (
        <FloatingWindow key={w.id} windowInfo={w}>
          <p>app content goes here</p>
        </FloatingWindow>
      ))}
      <Image
        src={activeWallpaper}
        alt="wallpaper"
        quality={100}
        fill
        sizes="100vw"
        priority
        className="object-cover rounded-[inherit]"
      />
    </div>
  );
}
