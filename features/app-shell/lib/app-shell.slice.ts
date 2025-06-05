import { StateCreator } from "zustand";

type OverviewVariants =
  | "WithAppsGrid"
  | "WithoutAppsGrid"
  | "AppWindows"
  | "SearchResults";

export interface AppShellSlice {
  activeOverviewVariant: OverviewVariants | null;
  isOverviewActive: boolean;
  activateOverview: (variant: OverviewVariants) => void;
  deactivateOverview: () => void;
}

const initState = {
  activeOverviewVariant: "WithoutAppsGrid" as const,
  isOverviewActive: true,
};

export const appShellSlice: StateCreator<
  AppShellSlice,
  [],
  [],
  AppShellSlice
> = (set) => ({
  ...initState,
  activateOverview: (variant) =>
    set((state) => ({
      ...state,
      activeOverviewVariant: variant,
      isOverviewActive: true,
    })),
  deactivateOverview: () =>
    set((state) => ({
      ...state,
      activeOverviewVariant: null,
      isOverviewActive: false,
    })),
});
