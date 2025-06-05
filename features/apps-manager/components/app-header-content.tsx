import React from "react";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";
import { FullWindowInfo } from "@/features/window-manager/lib/window-manager.slice";

type AppHeaderContentProps = {
  windowInfo: FullWindowInfo;
};

export function AppHeaderContent({ windowInfo }: AppHeaderContentProps) {
  const systemApps = useGlobalStoreContext((state) => state.systemApps);

  const appConfig = systemApps?.find((app) => app.id === windowInfo.app.id);

  if (!appConfig) {
    return <div>App configuration not found.</div>;
  }

  const Component = appConfig.HeaderBar;

  if (!Component) {
    return (
      <div>Header Component for {appConfig.id} not found in app config.</div>
    );
  }

  return (
    <React.Suspense fallback={<div>Loading app header...</div>}>
      <Component />
    </React.Suspense>
  );
}
