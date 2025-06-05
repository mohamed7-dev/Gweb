import path from "path";
import fs from "fs";

export const getAllWallpapers = () => {
  const wallpapersDir = path.join(process.cwd(), "public", "wallpapers");
  const files = fs.readdirSync(wallpapersDir);
  return files
    .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
    .map((file) => ({
      name: file,
      path: `/wallpapers/${file}`,
    }));
};

export type WallpapersMetadata = ReturnType<typeof getAllWallpapers>;
