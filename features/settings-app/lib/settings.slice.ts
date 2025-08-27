import { GlobalStoreState } from "@/lib/store";
import { StateCreator } from "zustand";
import { WallpapersMetadata } from "./utils";
import {
  AccentColorMetadata,
  DEFAULT_ACCENT_COLOR,
  DEFAULT_SETTINGS_SCREEN,
  SETTINGS_APP_SCREENS,
  SettingsAppScreen,
} from "./data";

// App Shell Settings
type AppShellSettings = {
  dockWidth: number;
  topBarHeight: number;
};

// Appearance Settings
interface AppearanceSettings {
  activeWallpaperId: string;
  activeAccentColorId: string;
  changeWallpaper: (id: string) => void;
  getActiveWallpaper: () => WallpapersMetadata;
  changeAccentColor: (id: string) => void;
  getActiveAccentColor: () => AccentColorMetadata;
}

// All
export interface SettingsSlice {
  appShellSettings: AppShellSettings;
  appearanceSettings: AppearanceSettings;
  screens: SettingsAppScreen[];
  activeScreenId: string;
  changeScreen: (id: string) => void;
  getActiveScreen: () => SettingsAppScreen;
}
const initState = {
  appShellSettings: {
    dockWidth: 60,
    topBarHeight: 32,
  },
  screens: SETTINGS_APP_SCREENS,
  activeScreenId: DEFAULT_SETTINGS_SCREEN,
  appearanceSettings: {
    activeWallpaperId: "gnome.wallpaper.Atlantic_wave_by_gulfie.jpg",
    activeAccentColorId: DEFAULT_ACCENT_COLOR,
  },
};

export const settingsSlice: StateCreator<
  SettingsSlice & GlobalStoreState,
  [],
  [],
  SettingsSlice
> = (set, get) => ({
  appShellSettings: { ...initState.appShellSettings },
  screens: initState.screens,
  activeScreenId: initState.activeScreenId,
  appearanceSettings: {
    ...initState.appearanceSettings,
    changeWallpaper: (id) =>
      set((state) => ({
        ...state,
        appearanceSettings: {
          ...state.appearanceSettings,
          activeWallpaperId: id,
        },
      })),
    getActiveWallpaper: () => {
      const activeWallpaperId = get().appearanceSettings.activeWallpaperId;
      const foundWallpaper = get().wallpapers?.find(
        (w) => w.id === activeWallpaperId
      );
      if (!foundWallpaper) throw new Error("Wallpaper not found.");
      return foundWallpaper;
    },
    changeAccentColor: (id) =>
      set((state) => ({
        ...state,
        appearanceSettings: {
          ...state.appearanceSettings,
          activeAccentColorId: id,
        },
      })),
    getActiveAccentColor: () => {
      const activeAccentColor = get().appearanceSettings.activeAccentColorId;
      const foundAccentColor = get().accentColors?.find(
        (w) => w.id === activeAccentColor
      );
      if (!foundAccentColor) throw new Error("Accent color not found.");
      return foundAccentColor;
    },
  },
  changeScreen: (id) =>
    set((state) => ({
      ...state,
      activeScreenId: id,
    })),
  getActiveScreen: () => {
    const activeScreenId = get().activeScreenId;
    const foundScreen = get().screens.find(
      (screen) => screen.id === activeScreenId
    );

    if (!foundScreen) throw new Error("Screen not found.");
    return foundScreen;
  },
});
