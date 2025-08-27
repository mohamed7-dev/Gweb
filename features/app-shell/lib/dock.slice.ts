import { SystemApp } from "@/features/apps-manager/lib/system-apps";
import { getDockItems } from "@/features/apps-manager/lib/utils";
import { StateCreator } from "zustand";

export interface DockSlice {
  dockApps: SystemApp[];
  startHereIconPath: string;
}
const initState = {
  dockApps: getDockItems(),
  startHereIconPath: "/scalable/start-here-symbolic.svg",
};

export const dockSlice: StateCreator<DockSlice, [], [], DockSlice> = () => ({
  ...initState,
});
