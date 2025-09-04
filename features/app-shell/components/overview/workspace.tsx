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
  const { isOverviewActive, activeOverviewVariant } = useGlobalStoreContext(
    (state) => state
  );

  const getWindowInfo = useGlobalStoreContext((state) => state.getWindowInfo);
  const { getActiveWallpaper } = useGlobalStoreContext(
    (state) => state.appearanceSettings
  );
  const windows = workspaceInfo.windows.map((w) => getWindowInfo(w.id));

  return (
    <div
      className={cn(
        "bg-secondary size-full relative shadow-lg",
        isOverviewActive && "rounded-xl dark",
        containerProps?.className
      )}
      {...containerProps}
    >
      {(activeOverviewVariant === "WithoutAppsGrid" ||
        activeOverviewVariant === "WithAppsGrid") && (
        <div
          className={cn(
            "size-full grid absolute z-30",
            activeOverviewVariant === "WithoutAppsGrid" &&
              "grid-cols-[repeat(auto-fit,minmax(40rem,1fr))] gap-4",
            activeOverviewVariant === "WithAppsGrid" &&
              "p-2 grid-cols-[repeat(auto-fit,minmax(5rem,1fr))] gap-2"
          )}
        >
          {windows.map((w) => (
            <OverviewWindow
              key={w.id}
              windowInfo={w}
              workspaceWindowsCount={windows.length}
            >
              {/* <AppContent windowInfo={w} /> */}
              <p className="border-4 border-red-500 size-full">App</p>
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
        src={getActiveWallpaper().path}
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
