import React from "react";
import { BasicWindowControls } from "@/features/window-manager/components/basic-window-controls";
import { HeaderBar } from "@/features/window-manager/components/header-bar";
import { cn } from "@/lib/utils";
import { FullWindowInfo } from "@/features/window-manager/lib/window-manager.slice";

type AppMainContentHeaderProps = {
  windowInfo: FullWindowInfo;
} & React.ComponentProps<typeof HeaderBar>;

export function AppMainContentHeader({
  children,
  windowInfo,
  className,
  ...rest
}: AppMainContentHeaderProps) {
  return (
    <HeaderBar className={cn("rounded-tr-[inherit]", className)} {...rest}>
      <BasicWindowControls windowInfo={windowInfo} />
      {children}
    </HeaderBar>
  );
}
