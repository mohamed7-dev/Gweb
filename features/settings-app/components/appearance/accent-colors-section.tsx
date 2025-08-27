import React from "react";
import { AccentColorMetadata } from "../../lib/data";
import { cn } from "@/lib/utils";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";
import { ScreenSection } from "../screen-section";

export function AccentColorsSection() {
  const {
    accentColors,
    appearanceSettings: { getActiveAccentColor, changeAccentColor },
  } = useGlobalStoreContext((state) => state);

  const handleChangingAccentColor = (color: AccentColorMetadata) => {
    const accentColorNames = accentColors.map((c) => c.name);
    const html = document.documentElement;
    html.classList.remove(...accentColorNames); // remove old theme
    html.classList.add(color.name);
    changeAccentColor(color.id);
  };

  return (
    <ScreenSection
      sectionTitle="Accent colors"
      containerProps={{ className: "gap-2" }}
    >
      {accentColors?.map((color) => (
        <button
          key={color.code}
          className={cn(
            "block size-8 rounded-full shadow-md",
            getActiveAccentColor().id === color.id &&
              "outline-2 outline-offset-4 outline-primary"
          )}
          style={{
            backgroundColor: color.code,
          }}
          onClick={() => handleChangingAccentColor(color)}
        >
          <span className="sr-only">{color.name}</span>
        </button>
      ))}
    </ScreenSection>
  );
}
