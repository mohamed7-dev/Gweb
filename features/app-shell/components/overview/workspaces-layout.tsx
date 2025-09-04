import React from "react";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";
import { Workspace } from "./workspace";
import { cn } from "@/lib/utils";
import { useObserveWorkspace } from "@/hooks/use-observe-workspace";

type WorkspacesLayoutProps = {
  containerProps: React.ComponentProps<"div">;
};
export function WorkspacesLayout({
  containerProps: { className, ...rest },
}: WorkspacesLayoutProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { activeOverviewVariant, isOverviewActive } = useGlobalStoreContext(
    (state) => state
  );
  const isDesktopWorkspace = !isOverviewActive;
  const isOverviewWorkspace =
    activeOverviewVariant === "WithoutAppsGrid" ||
    activeOverviewVariant === "AppWindows";
  const isThumbnailWorkspace = activeOverviewVariant === "WithAppsGrid";

  const activeWorkspaces = useGlobalStoreContext(
    (state) => state.activeWorkspaces
  );
  const activeWorkspace = useGlobalStoreContext(
    (state) => state.activeWorkspace
  );

  const isActiveWorkspace = (id: string) => activeWorkspace.id === id;

  const width = isThumbnailWorkspace
    ? 90
    : (isOverviewWorkspace ? 90 : 100) * activeWorkspaces.length;

  useObserveWorkspace({ containerRef });

  return (
    <div
      className={cn(
        "size-full",
        isThumbnailWorkspace && "max-h-[15rem]",
        (isDesktopWorkspace || isOverviewWorkspace) &&
          "overflow-x-auto no-scrollbar snap-x snap-mandatory",
        className
      )}
      ref={containerRef}
      {...rest}
    >
      <ul
        className={cn(
          "h-full flex items-center",
          isThumbnailWorkspace && "gap-4 justify-center"
        )}
        style={{
          width: `${width}%`,
          marginInlineStart: isOverviewActive ? "5%" : undefined,
          marginInlineEnd: isOverviewActive ? "5%" : undefined,
          gap: isOverviewWorkspace ? "2.5rem" : undefined,
        }}
      >
        {activeWorkspaces.map((w) => (
          <li
            key={w.id}
            className={cn(
              "flex-1 snap-center snap-normal transition-transform duration-200",
              isThumbnailWorkspace && "max-w-[20rem]",
              isActiveWorkspace(w.id) && isOverviewActive && "scale-103",
              !isActiveWorkspace(w.id) && isOverviewActive && "scale-97"
            )}
            data-workspace-id={w.id}
            style={{
              height: isOverviewWorkspace
                ? "90%"
                : isThumbnailWorkspace
                  ? "10rem"
                  : "100%",
              width:
                isOverviewWorkspace || isDesktopWorkspace
                  ? `${width / activeWorkspaces.length}%`
                  : `${width}%`,
            }}
          >
            <Workspace workspaceInfo={w} />
          </li>
        ))}
      </ul>
    </div>
  );
}
