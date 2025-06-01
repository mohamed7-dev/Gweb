import { AppConfigSchema } from "@/app-config";
import {
  shellSlice,
  ShellSlice,
} from "@/features/app-shell/lib/app-shell-slice";
import { DockSlice, dockSlice } from "@/features/app-shell/lib/dock-slice";
import {
  AppsGridSlice,
  appsGridSlice,
} from "@/features/apps-grid/lib/apps-grid-slice";
import { appsSlice, AppsSlice } from "@/features/apps/lib/apps-slice";
import {
  windowManagerSlice,
  WindowManagerSlice,
} from "@/features/window-manager/lib/window-manager-slice";
import {
  WorkspaceSlice,
  workspaceSlice,
} from "@/features/workspaces/lib/workspace-slice";
import { create, createStore } from "zustand";
import { persist } from "zustand/middleware";

// export const useGlobalStoreContext = create<
//   ShellSlice &
//     AppsGridSlice &
//     WindowManagerSlice &
//     AppsSlice &
//     DockSlice &
//     WorkspaceSlice
// >()(
//   persist(
//     (...a) => ({
//       ...shellSlice(...a),
//       ...appsGridSlice(...a),
//       ...windowManagerSlice(...a),
//       ...appsSlice(...a),
//       ...dockSlice(...a),
//       ...workspaceSlice(...a),
//     }),
//     { name: "gnome-web-storage" }
//   )
// );

// export const useGlobalStoreContext = create<
//   ShellSlice &
//     AppsGridSlice &
//     WindowManagerSlice &
//     AppsSlice &
//     DockSlice &
//     WorkspaceSlice
// >()((...a) => ({
//   ...shellSlice(...a),
//   ...appsGridSlice(...a),
//   ...windowManagerSlice(...a),
//   ...appsSlice(...a),
//   ...dockSlice(...a),
//   ...workspaceSlice(...a),
// }));
export type DockItem = { id: string };

export interface GlobalStoreProps {
  systemApps?: AppConfigSchema[];
  dockItems?: DockItem[];
}

export interface GlobalStoreState
  extends GlobalStoreProps,
    ShellSlice,
    WindowManagerSlice,
    DockSlice,
    AppsSlice,
    AppsGridSlice,
    WorkspaceSlice {}

export const createGlobalStore = (initProps?: Partial<GlobalStoreProps>) => {
  return createStore<GlobalStoreState>()((...a) => ({
    ...initProps,
    ...shellSlice(...a),
    ...appsGridSlice(...a),
    ...windowManagerSlice(...a),
    ...appsSlice(...a),
    ...dockSlice(...a),
    ...workspaceSlice(...a),
  }));
};
export type GlobalStore = ReturnType<typeof createGlobalStore>;
