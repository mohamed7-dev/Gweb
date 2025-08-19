import React from "react";
import { cn } from "@/lib/utils";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";
import Image from "next/image";
import { WorkSpaceInstance } from "../../lib/workspace.slice";
import { FloatingWindow } from "@/features/window-manager/components/floating-window";
import { AppContent } from "@/features/apps-manager/components/app-content";
import { OverviewWindow } from "@/features/window-manager/components/overview-window";

type WorkspaceProps = {
  containerProps?: React.ComponentProps<"div">;
  workspaceInfo: WorkSpaceInstance;
};
export function Workspace(props: WorkspaceProps) {
  const { containerProps, workspaceInfo } = props;
  const { deactivateOverview, isOverviewActive, activeOverviewVariant } =
    useGlobalStoreContext((state) => state);
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
        "bg-secondary w-full h-full relative shadow-lg",
        isOverviewActive && "rounded-xl",
        isOverviewActive && "dark",
        containerProps?.className
      )}
      onClick={() => deactivateOverview()}
      {...containerProps}
    >
      {activeOverviewVariant === "WithoutAppsGrid" && (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(40rem,1fr))] gap-4 size-full absolute z-30">
          {windows.map((w) => (
            <OverviewWindow
              key={w.id}
              windowInfo={w}
              workspaceWindowsCount={windows.length}
            >
              <AppContent windowInfo={w} />
            </OverviewWindow>
          ))}
        </div>
      )}
      {!isOverviewActive &&
        windows.map((w) => (
          <FloatingWindow key={w.id} windowInfo={w}>
            <AppContent windowInfo={w} />
          </FloatingWindow>
        ))}
      <Image
        src={activeWallpaper}
        alt="wallpaper"
        quality={100}
        fill
        sizes="100vw"
        priority
        className="object-cover rounded-[inherit] z-20"
      />
    </div>
  );
}
