import { useGlobalStoreContext } from "@/components/providers/global-store-provider";
import React from "react";

type UseObserveWorkspaceProps = {
  containerRef: React.RefObject<HTMLElement | null>;
};
export function useObserveWorkspace({
  containerRef,
}: UseObserveWorkspaceProps) {
  const setActiveWorkspace = useGlobalStoreContext(
    (state) => state.setActiveWorkspace
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
            setActiveWorkspace(id);
          }
        });
      },
      {
        root: container,
        threshold: 0.6, // ≥ 60% of workspace in view = active
      }
    );

    workspaces.forEach((ws) => observer.observe(ws));

    return () => observer.disconnect();
  }, [containerRef, setActiveWorkspace]);
}
