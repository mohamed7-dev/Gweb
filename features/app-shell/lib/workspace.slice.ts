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
  activeWorkspace: WorkSpaceInstance;
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
}

const DEFAULT_WORKSPACE_ID = uuid();
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
    windows: [],
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
    const filtered = get().activeWorkspaces.filter(
      (w) => w.id !== info.workspaceId
    );
    const workspace = get().activeWorkspaces.find(
      (w) => w.id === info.workspaceId
    );
    if (!workspace) {
      throw new Error("Workspace not found");
    }
    const updatedWorkspace = {
      ...workspace,
      windows: [...workspace.windows, { id: info.windowId }],
    };
    set((state) => ({
      ...state,
      activeWorkspaces: [...filtered, { ...updatedWorkspace }],
    }));
  },
  removeWindowFromWorkspace: (info) => {
    const filtered = get().activeWorkspaces.filter(
      (w) => w.id !== info.workspaceId
    );
    const workspace = get().activeWorkspaces.find(
      (w) => w.id === info.workspaceId
    );
    if (!workspace) {
      throw new Error("Workspace not found");
    }
    const filteredWindows = workspace.windows.filter(
      (w) => w.id !== info.windowId
    );
    const updatedWorkspace = {
      ...workspace,
      windows: filteredWindows,
    };
    set((state) => ({
      ...state,
      activeWorkspaces: [...filtered, { ...updatedWorkspace }],
    }));
  },
});
