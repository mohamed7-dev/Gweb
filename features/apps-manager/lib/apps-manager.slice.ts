import { StateCreator } from "zustand";
import SYSTEM_APPS, { SystemApp } from "./system-apps";

export interface AppsManagerSlice {
  systemApps: SystemApp[];
  installApp: () => void;
  uninstallApp: () => void;
}

const initState = {
  systemApps: SYSTEM_APPS,
};

export const appsManagerSlice: StateCreator<
  AppsManagerSlice,
  [],
  [],
  AppsManagerSlice
> = () => ({
  ...initState,
  installApp: () => undefined,
  uninstallApp: () => undefined,
});
