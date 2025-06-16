import { FullWindowInfo } from "@/features/window-manager/lib/window-manager.slice";
import dynamic from "next/dynamic";

export type SystemApp = {
  id: string;
  title: string;
  slug: string;
  version: string;
  addToDock?: boolean;
  App: React.ComponentType<{ windowInfo: FullWindowInfo }>;
  icon: {
    "24@2x": string;
    "48@2x": string;
    "256@2x": string;
  };
};

const SYSTEM_APPS: SystemApp[] = [
  // Settings App
  {
    id: "gweb.app.settings",
    title: "Settings",
    slug: "settings",
    version: "1.0.0",
    addToDock: true,
    App: dynamic(() =>
      import("@/features/settings-app/components/settings-app").then(
        (mod) => mod.SettingsApp
      )
    ),
    icon: {
      "24@2x": "/apps/24x24@2x/settings-app.png",
      "256@2x": "/apps/256x256@2x/settings-app.png",
      "48@2x": "/apps/48x48@2x/settings-app.png",
    },
  },
];
export default SYSTEM_APPS;
