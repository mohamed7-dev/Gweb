import React from "react";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";
import { Workspace } from "./workspace";
import { cn } from "@/lib/utils";

type WorkspacesLayoutProps = {
  containerProps: React.ComponentProps<"div">;
};
export function WorkspacesLayout({
  containerProps: { className, ...rest },
}: WorkspacesLayoutProps) {
  const { activeOverviewVariant } = useGlobalStoreContext((state) => state);
  const activeWorkspaces = useGlobalStoreContext(
    (state) => state.activeWorkspaces
  );
  const width =
    (activeOverviewVariant === "WithoutAppsGrid" ? 90 : 100) *
    activeWorkspaces.length;
  return (
    <div
      className={cn(
        "w-full h-full overflow-x-auto no-scrollbar snap-x snap-mandatory",
        className
      )}
      {...rest}
    >
      <ul
        className={cn("h-full flex items-center")}
        style={{
          width: `${width}%`,
          marginInlineStart:
            activeOverviewVariant === "WithoutAppsGrid" ? "5%" : undefined,
          marginInlineEnd:
            activeOverviewVariant === "WithoutAppsGrid" ? "5%" : undefined,
          gap:
            activeOverviewVariant === "WithoutAppsGrid" ? "2.5rem" : undefined,
        }}
      >
        {activeWorkspaces.map((w) => (
          <li
            key={w.id}
            className="flex-1 snap-center snap-normal"
            style={{
              height:
                activeOverviewVariant === "WithoutAppsGrid" ? "90%" : "100%",
              width:
                activeOverviewVariant === "WithoutAppsGrid"
                  ? `${width / activeWorkspaces.length}%`
                  : "100%",
            }}
          >
            <Workspace workspaceInfo={w} />
          </li>
        ))}
      </ul>
    </div>
  );
}
