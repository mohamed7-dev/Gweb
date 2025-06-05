import SYSTEM_APPS from "./system-apps";

export const getDockItems = () => {
  const appsConfig = SYSTEM_APPS;
  const dockItems = appsConfig.filter((app) => app.addToDock);
  return dockItems;
};
