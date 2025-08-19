import { v4 as uuid } from "uuid";
import { StateCreator } from "zustand";

type WorkspaceWindow = {
  id: string;
};

export type WorkSpaceInstance = {
  id: string;
  index: number;
  windows: WorkspaceWindow[];
};

export interface WorkspaceSlice {
  activeWorkspaces: WorkSpaceInstance[];
  activeWorkspace: Omit<WorkSpaceInstance, "windows">;
  addWindowToWorkspace: ({
    windowId,
    workspaceId,
  }: {
    windowId: string;
    workspaceId: string;
  }) => void;
  removeWindowFromWorkspace: ({
    windowId,
    workspaceId,
  }: {
    windowId: string;
    workspaceId: string;
  }) => void;
  setActiveWorkspace: (workspaceId: string) => void;
}

const DEFAULT_WORKSPACE_ID = uuid();
console.log({ DEFAULT_WORKSPACE_ID });
const initState = {
  activeWorkspaces: [
    {
      id: DEFAULT_WORKSPACE_ID,
      index: 0,
      windows: [],
    },
    {
      id: uuid(),
      index: 1,
      windows: [],
    },
  ],
  activeWorkspace: {
    id: DEFAULT_WORKSPACE_ID,
    index: 0,
  },
};

export const workspaceSlice: StateCreator<
  WorkspaceSlice,
  [],
  [],
  WorkspaceSlice
> = (set, get) => ({
  ...initState,
  addWindowToWorkspace: (info) => {
    const workspaces = get().activeWorkspaces.map((w) => {
      if (w.id === info.workspaceId) {
        return {
          ...w,
          windows: [...w.windows, { id: info.windowId }],
        };
      }
      return w;
    });
    set((state) => ({
      ...state,
      activeWorkspaces: [...workspaces],
    }));
  },
  removeWindowFromWorkspace: (info) => {
    const workspaces = get().activeWorkspaces.map((w) => {
      if (w.id === info.workspaceId) {
        return {
          ...w,
          windows: w.windows.filter((window) => window.id !== info.windowId),
        };
      }
      return w;
    });

    set((state) => ({
      ...state,
      activeWorkspaces: [...workspaces],
    }));
  },
  setActiveWorkspace: (workspaceId) => {
    const workspace = get().activeWorkspaces.find((w) => w.id === workspaceId);
    if (!workspace) {
      throw new Error("Workspace not found");
    }
    set((state) => ({
      ...state,
      activeWorkspace: {
        id: workspace?.id,
        index: workspace?.index,
      },
    }));
  },
});
