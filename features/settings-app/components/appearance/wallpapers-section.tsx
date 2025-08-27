import { useGlobalStoreContext } from "@/components/providers/global-store-provider";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { ScreenSection } from "../screen-section";

export function WallpapersSection() {
  const {
    wallpapers,
    appearanceSettings: { changeWallpaper, getActiveWallpaper },
  } = useGlobalStoreContext((state) => state);

  const handleChangeWallpaper = (id: string) => {
    changeWallpaper(id);
  };
  return (
    <ScreenSection
      sectionTitle="Background"
      containerProps={{ className: "py-4 px-8 gap-4 justify-start" }}
    >
      {wallpapers?.map((wallpaper) => (
        <button
          key={wallpaper.id}
          onClick={() => handleChangeWallpaper(wallpaper.id)}
          className="relative h-28 w-36 rounded-xl bg-secondary"
        >
          <Image
            src={wallpaper.path}
            alt={wallpaper.name}
            fill
            sizes="15rem"
            className="size-full object-fill rounded-xl"
          />
          <div
            className={cn(
              "bg-primary rounded-full absolute bottom-2 right-2",
              getActiveWallpaper().id === wallpaper.id ? "block" : "hidden"
            )}
          >
            <CheckIcon className="stroke-primary-foreground" />
          </div>
        </button>
      ))}
    </ScreenSection>
  );
}
