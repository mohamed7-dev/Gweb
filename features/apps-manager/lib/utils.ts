import fs from "fs";
import path from "path";

export const getAppsConfig = () => {
  const baseDir = path.join(process.cwd(), "features");
  const featureDirs = fs.readdirSync(baseDir);
  const config = featureDirs
    .map((dir) => {
      const filePath = path.join(baseDir, dir, "__app__.json");
      if (fs.existsSync(filePath)) {
        const json = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(json);
      }
      return null;
    })
    .filter(Boolean);
  return config;
};
