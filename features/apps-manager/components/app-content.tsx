import React from "react";
import { FullWindowInfo } from "@/features/window-manager/lib/window-manager.slice";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";

type AppsContentProps = {
  windowInfo: FullWindowInfo;
};

export function AppContent({ windowInfo }: AppsContentProps) {
  const systemApps = useGlobalStoreContext((state) => state.systemApps);

  const appConfig = systemApps?.find((app) => app.id === windowInfo.app.id);

  if (!appConfig) {
    return <div>App configuration not found.</div>;
  }

  const Component = appConfig.App;
  if (!Component) {
    return (
      <div>Component for {appConfig.id} not found in AppComponents map.</div>
    );
  }

  return (
    <React.Suspense fallback={<div>Loading app...</div>}>
      <Component windowInfo={windowInfo} />
    </React.Suspense>
  );
}
