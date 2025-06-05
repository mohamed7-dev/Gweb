import { SystemApp } from "@/features/apps-manager/lib/system-apps";
import { getDockItems } from "@/features/apps-manager/lib/utils";
import { StateCreator } from "zustand";

export interface DockSlice {
  dockApps: SystemApp[];
}
const initState = {
  dockApps: getDockItems(),
};

export const dockSlice: StateCreator<DockSlice, [], [], DockSlice> = () => ({
  ...initState,
});
