import { StateCreator } from "zustand";

// App Shell Settings
type AppShellSettings = {
  dockWidth: number;
  topBarHeight: number;
};

// Appearance Settings
interface AppearanceSettings {
  activeWallpaper: string;
}

// All
export interface SettingsSlice {
  appShellSettings: AppShellSettings;
  appearanceSettings: AppearanceSettings;
}
const initState = {
  appShellSettings: {
    dockWidth: 50,
    topBarHeight: 32,
  },
  appearanceSettings: {
    activeWallpaper: "/wallpapers/Atlantic_wave_by_gulfie.jpg",
  },
};

export const settingsSlice: StateCreator<
  SettingsSlice,
  [],
  [],
  SettingsSlice
> = () => ({
  ...initState,
});
