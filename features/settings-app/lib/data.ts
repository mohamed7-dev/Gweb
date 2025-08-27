export const SETTINGS_APP_SCREENS_IDS = {
  keyModifier: "gweb.app.settings.keyboard.modifier-key",
  appearance: "gweb.app.settings.appearance",
  keyboard: "gweb.app.settings.keyboard",
};

export const SIDEBAR_ITEMS = {
  appearance: {
    id: SETTINGS_APP_SCREENS_IDS.appearance,
    sidebarTitle: "Appearance",
    icon: "/scalable/apps/settings/settings-appearance-symbolic.svg",
  },
  keyboard: {
    id: SETTINGS_APP_SCREENS_IDS.keyboard,
    sidebarTitle: "Keyboard",
    icon: "/scalable/apps/settings/settings-keyboard-symbolic.svg",
  },
};

export const SETTINGS_APP_SCREENS: SettingsAppScreen[] = [
  {
    id: SETTINGS_APP_SCREENS_IDS.keyModifier,
    title: "Modifier keys",
    description: "Modifier key will be used before shortcuts.",
    subCategory: "keyboard",
    parentId: SETTINGS_APP_SCREENS_IDS.keyboard,
  },
  {
    id: SETTINGS_APP_SCREENS_IDS.appearance,
    title: "Appearance",
    category: "appearance",
  },
  {
    id: SETTINGS_APP_SCREENS_IDS.keyboard,
    title: "Keyboard",
    category: "keyboard",
  },
];

export const DEFAULT_SETTINGS_SCREEN = SETTINGS_APP_SCREENS_IDS.appearance;

export type SettingsAppScreen = {
  id: string;
  title: string;
  description?: string;
  category?: string;
  subCategory?: string;
  parentId?: string;
};

export const APPEARANCE_STYLES = [
  {
    title: "Default",
    classNames: "bg-white",
    themeName: "light",
  },
  {
    title: "Dark",
    classNames: "bg-shell",
    themeName: "dark",
  },
];

export const ACCENT_COLORS: AccentColorMetadata[] = [
  {
    id: "gnome.accent.teal",
    name: "teal",
    code: "oklch(56% 0.08 192.88)",
  },
  {
    id: "gnome.accent.blue",
    name: "blue",
    code: "oklch(57% 0.19 255.91)",
  },
  {
    id: "gnome.accent.green",
    name: "green",
    code: "oklch(55% 0.16 133.24)",
  },
  {
    id: "gnome.accent.yellow",
    name: "yellow",
    code: "oklch(67% 0.14 75.64)",
  },
  {
    id: "gnome.accent.orange",
    name: "orange",
    code: "oklch(64% 0.19 37.76)",
  },
  {
    id: "gnome.accent.red",
    name: "red",
    code: "oklch(59% 0.20 17.04)",
  },
  {
    id: "gnome.accent.pink",
    name: "pink",
    code: "oklch(59% 0.18 327.59)",
  },
  {
    id: "gnome.accent.purple",
    name: "purple",
    code: "oklch(58% 0.17 287.34)",
  },
  {
    id: "gnome.accent.slate",
    name: "slate",
    code: "oklch(56% 0.04 150.35)",
  },
  {
    id: "gnome.accent.warty-brown",
    name: "warty-brown",
    code: "oklch(68% 0.07 70.81)",
  },
];

export const DEFAULT_ACCENT_COLOR = "gnome.accent.orange";

export type AccentColorMetadata = {
  id: string;
  name: string;
  code: string;
};
