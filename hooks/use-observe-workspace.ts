import { useGlobalStoreContext } from "@/components/providers/global-store-provider";
import React from "react";

type UseObserveWorkspaceProps = {
  containerRef: React.RefObject<HTMLElement | null>;
};
export function useObserveWorkspace({
  containerRef,
}: UseObserveWorkspaceProps) {
  const workspaceRef = React.useRef<{ _handleClick: () => void }>(null);
  const setActiveWorkspace = useGlobalStoreContext(
    (state) => state.setActiveWorkspace
  );
  const activeOverviewVariant = useGlobalStoreContext(
    (state) => state.activeOverviewVariant
  );
  const deactivateOverview = useGlobalStoreContext(
    (state) => state.deactivateOverview
  );

  const isManualActivation = useGlobalStoreContext(
    (state) => state.isManualActivation
  );

  const toggleManualActivation = useGlobalStoreContext(
    (state) => state.toggleManualActivation
  );
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const workspaces = container.querySelectorAll("[data-workspace-id]");
    if (!workspaces.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-workspace-id") || "";
            if (
              (!isManualActivation &&
                activeOverviewVariant === "WithoutAppsGrid") ||
              activeOverviewVariant === "AppWindows" ||
              !activeOverviewVariant
            ) {
              setActiveWorkspace(id);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.6, // ≥ 60% of workspace in view = active
      }
    );

    workspaces.forEach((ws) => {
      observer.observe(ws);

      // Click-based activation
      const handleClick = () => {
        toggleManualActivation(true);
        const id = ws.getAttribute("data-workspace-id") ?? "";
        setActiveWorkspace(id);
        // Bug: deactivating overview causes workspace to switch automatically
        // deactivateOverview();
        ws.scrollIntoView({
          behavior: "smooth", // smooth scrolling
          block: "nearest", // keep it inside the container
          inline: "nearest",
        });
      };

      ws.addEventListener("click", handleClick);
      workspaceRef.current = { _handleClick: handleClick }; // save ref for cleanup
    });

    return () => {
      observer.disconnect();
      workspaces.forEach((ws) => {
        const handleClick = workspaceRef.current?._handleClick;
        if (handleClick) ws.removeEventListener("click", handleClick);
      });
    };
  }, [
    containerRef,
    activeOverviewVariant,
    deactivateOverview,
    setActiveWorkspace,
    isManualActivation,
    toggleManualActivation,
  ]);
}
