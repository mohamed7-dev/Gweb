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
  const activeWorkspaces = useGlobalStoreContext(
    (state) => state.activeWorkspaces
  );
  const width =
    activeOverviewVariant === "WithAppsGrid"
      ? 100
      : (isOverviewActive ? 90 : 100) * activeWorkspaces.length;

  useObserveWorkspace({ containerRef });
  return (
    <div
      className={cn(
        "size-full",
        activeOverviewVariant === "WithAppsGrid" && "max-h-[15rem] bg-red-500",
        activeOverviewVariant !== "WithAppsGrid" &&
          "overflow-x-auto no-scrollbar snap-x snap-mandatory",
        className
      )}
      ref={containerRef}
      {...rest}
    >
      <ul
        className={cn("h-full flex items-center")}
        style={{
          width: `${width}%`,
          marginInlineStart: isOverviewActive ? "5%" : undefined,
          marginInlineEnd: isOverviewActive ? "5%" : undefined,
          gap:
            activeOverviewVariant === "WithoutAppsGrid" ? "2.5rem" : undefined,
        }}
      >
        {activeWorkspaces.map((w) => (
          <li
            key={w.id}
            className={cn(
              "flex-1 snap-center snap-normal",
              activeOverviewVariant === "WithAppsGrid" &&
                "flex items-center gap-10 max-w-[20rem]"
            )}
            data-workspace-id={w.id}
            style={{
              height:
                activeOverviewVariant === "WithoutAppsGrid"
                  ? "90%"
                  : activeOverviewVariant === "WithAppsGrid"
                    ? "10rem"
                    : "100%",
              width:
                activeOverviewVariant === "WithoutAppsGrid" || !isOverviewActive
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
