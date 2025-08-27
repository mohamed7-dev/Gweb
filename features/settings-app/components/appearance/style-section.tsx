import { useGlobalStoreContext } from "@/components/providers/global-store-provider";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { APPEARANCE_STYLES } from "../../lib/data";
import { ScreenSection } from "../screen-section";

export function StyleSection() {
  const getActiveWallpaper = useGlobalStoreContext(
    (state) => state.appearanceSettings.getActiveWallpaper
  );
  const { theme, setTheme } = useTheme();
  const handleSettingTheme = (theme: string) => {
    setTheme(theme);
  };
  return (
    <ScreenSection sectionTitle="Style" containerProps={{ className: "gap-8" }}>
      {APPEARANCE_STYLES.map((style) => (
        <article key={style.title} className="flex flex-col items-center gap-4">
          <button
            className={cn(
              "relative w-46 h-34 rounded-xl",
              theme === style.themeName &&
                "outline-4 outline-primary outline-offset-2"
            )}
            onClick={() => handleSettingTheme(style.themeName)}
          >
            <Image
              src={getActiveWallpaper().path}
              alt={getActiveWallpaper().name}
              fill
              sizes="10rem"
              className="size-full object-cover rounded-[inherit]"
            />
            <div
              className={cn(
                "w-24 h-14 shadow-md rounded-md absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
                style.classNames
              )}
            ></div>
          </button>
          <h3>{style.title}</h3>
        </article>
      ))}
    </ScreenSection>
  );
}
