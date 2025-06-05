import { AppConfigSchema } from "@/app-config";
import { WorkSpaceInstance } from "@/features/app-shell/lib/workspace.slice";
import { GlobalStoreState } from "@/lib/store";
import { StateCreator } from "zustand";
import { v4 as uuid } from "uuid";

type WindowState = "Open" | "Closed" | "Maximized" | "Minimized";
interface ActiveWindow {
  id: string;
  state?: WindowState;
  app: {
    id: string;
  };
  workspace: {
    id: string;
  };
  dimensions?: {
    width: number;
    height: number;
  };
  position?: {
    x: number;
    y: number;
  };
}

export interface FullWindowInfo extends ActiveWindow {
  app: AppConfigSchema;
  workspace: Pick<WorkSpaceInstance, "id" | "index">;
}

export interface WindowManagerSlice {
  windows: ActiveWindow[];
  activeWindow: ActiveWindow | null;
  openWindow: ({
    appId,
    workspaceId,
  }: {
    appId: string;
    workspaceId: string;
  }) => FullWindowInfo;
  closeWindow: (windowId: string) => void;
  minimizeWindow: (windowId: string) => void;
  maximizeWindow: (windowId: string) => void;
  updateActiveWindow: (id: string) => void;
  getWindowInfo: (id: string) => FullWindowInfo;
}

const initState = {
  windows: [],
  activeWindow: null,
};

export const windowManagerSlice: StateCreator<
  WindowManagerSlice & GlobalStoreState,
  [],
  [],
  WindowManagerSlice
> = (set, get) => ({
  ...initState,
  openWindow: (info) => {
    const newWindow = {
      id: uuid(),
      app: { id: info.appId },
      workspace: { id: info.workspaceId },
      state: "Open",
      dimensions: {
        width: 1024,
        height: 720,
      },
      position: {
        x: window.innerWidth / 2 - 1024 / 2,
        y: window.innerHeight / 2 - 720 / 2,
      },
    } satisfies ActiveWindow;
    set((state) => ({
      ...state,
      windows: [...state.windows, newWindow],
      activeWindow: newWindow,
    }));
    get().addWindowToWorkspace({
      windowId: newWindow.id,
      workspaceId: info.workspaceId,
    });
    const appInfo = get().systemApps?.find((app) => app.id === info.appId);
    const workspaceInfo = get().activeWorkspaces.find(
      (w) => w.id === info.workspaceId
    );
    if (!appInfo || !workspaceInfo) {
      throw new Error("App not found");
    }
    return {
      ...newWindow,
      app: appInfo,
      workspace: workspaceInfo,
    };
  },
  closeWindow: (id) => {
    const filtered = get().windows.filter((w) => w.id !== id);
    set((state) => ({ ...state, windows: filtered, activeWindow: null }));
  },
  minimizeWindow: (id) => {
    const window = get().windows.find((w) => w.id === id);
    if (!window) {
      throw new Error("Window not found!");
    }
    set((state) => ({
      ...state,
      windows: [...state.windows, { ...window, state: "Minimized" }],
      activeWindow: null,
    }));
  },
  maximizeWindow: (id) => {
    const window = get().windows.find((w) => w.id === id);
    if (!window) {
      throw new Error("Window not found!");
    }
    set((state) => ({
      ...state,
      windows: [...state.windows, { ...window, state: "Maximized" }],
      activeWindow: window,
    }));
  },
  updateActiveWindow: (id) => {
    const window = get().windows.find((w) => w.id === id);
    if (!window) {
      throw new Error("Window not found!");
    }
    set((state) => ({ ...state, activeWindow: window }));
  },
  getWindowInfo: (id) => {
    const window = get().windows.find((w) => w.id === id);
    if (!window) {
      throw new Error("Window not found!");
    }
    const appInfo = get().systemApps?.find((app) => app.id === window.app.id);
    const workspaceInfo = get().activeWorkspaces.find(
      (w) => w.id === window.workspace.id
    );
    if (!appInfo || !workspaceInfo) {
      throw new Error("App not found");
    }
    return {
      ...window,
      app: appInfo,
      workspace: workspaceInfo,
    };
  },
});
