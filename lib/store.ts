import {
  SettingsSlice,
  settingsSlice,
} from "@/features/settings-app/lib/settings.slice";
import {
  appShellSlice,
  AppShellSlice,
} from "@/features/app-shell/lib/app-shell.slice";
// import {
//   shellSlice,
//   ShellSlice,
// } from "@/features/app-shell/lib/app-shell-slice";
// import { DockSlice, dockSlice } from "@/features/app-shell/lib/dock-slice";
// import {
//   AppsGridSlice,
//   appsGridSlice,
// } from "@/features/apps-grid/lib/apps-grid-slice";
// import { appsSlice, AppsSlice } from "@/features/apps/lib/apps-slice";
// import {
//   windowManagerSlice,
//   WindowManagerSlice,
// } from "@/features/window-manager/lib/window-manager-slice";
// import {
//   WorkspaceSlice,
//   workspaceSlice,
// } from "@/features/workspaces/lib/workspace-slice";
import { createStore } from "zustand";
import {
  workspaceSlice,
  WorkspaceSlice,
} from "@/features/app-shell/lib/workspace.slice";
import { WallpapersMetadata } from "@/features/settings-app/lib/utils";
import {
  appsManagerSlice,
  AppsManagerSlice,
} from "@/features/apps-manager/lib/apps-manager.slice";
import {
  windowManagerSlice,
  WindowManagerSlice,
} from "@/features/window-manager/lib/window-manager.slice";
import { dockSlice, DockSlice } from "@/features/app-shell/lib/dock.slice";
import { AccentColorMetadata } from "@/features/settings-app/lib/data";

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

export interface GlobalStoreProps {
  wallpapers: WallpapersMetadata[];
  accentColors: AccentColorMetadata[];
}

export interface GlobalStoreState
  extends GlobalStoreProps,
    SettingsSlice,
    AppShellSlice,
    WorkspaceSlice,
    AppsManagerSlice,
    WindowManagerSlice,
    DockSlice {
  // ShellSlice,
  // WindowManagerSlice,
  // DockSlice,
  // AppsSlice,
  // AppsGridSlice,
  // WorkspaceSlice
}

export const createGlobalStore = (initProps: GlobalStoreProps) => {
  return createStore<GlobalStoreState>()((...a) => ({
    ...initProps,
    ...settingsSlice(...a),
    ...appShellSlice(...a),
    ...workspaceSlice(...a),
    ...appsManagerSlice(...a),
    ...windowManagerSlice(...a),
    ...dockSlice(...a),
    // ...shellSlice(...a),
    // ...appsGridSlice(...a),
    // ...windowManagerSlice(...a),
    // ...appsSlice(...a),
    // ...dockSlice(...a),
    // ...workspaceSlice(...a),
  }));
};
export type GlobalStore = ReturnType<typeof createGlobalStore>;
