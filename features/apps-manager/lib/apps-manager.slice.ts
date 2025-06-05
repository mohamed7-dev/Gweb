import { StateCreator } from "zustand";

export interface AppsManagerSlice {
  installApp: () => void;
  uninstallApp: () => void;
}

export const appsManagerSlice: StateCreator<
  AppsManagerSlice,
  [],
  [],
  AppsManagerSlice
> = () => ({
  installApp: () => undefined,
  uninstallApp: () => undefined,
});
