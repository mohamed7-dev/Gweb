import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";

type DockButtonProps = React.ComponentProps<typeof Button> & { appId?: string };
export function DockButton(props: DockButtonProps) {
  const { appId, className, children, ...rest } = props;
  const {
    windows,
    appearanceSettings: { getActiveAccentColor },
  } = useGlobalStoreContext((state) => state);
  const isAppActive = windows.find((w) => w.app.id === appId);
  return (
    <Button
      variant={"shell"}
      className={cn(
        "w-full h-12 rounded-sm cursor-pointer relative",
        className
      )}
      {...rest}
    >
      <span
        className={cn(
          "block size-2 rounded-full absolute top-1/2 -translate-y-1/2 -left-[1px]",
          isAppActive && "bg-primary"
        )}
        style={{
          backgroundColor: isAppActive
            ? getActiveAccentColor().code
            : undefined,
        }}
      />
      {children}
    </Button>
  );
}
