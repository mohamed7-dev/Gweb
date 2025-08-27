import React from "react";
import { HeaderBar } from "@/features/window-manager/components/header-bar";
import { cn } from "@/lib/utils";

type AppSidebarHeaderProps = React.ComponentProps<typeof HeaderBar> & {
  appTitle: string;
};
export function AppSidebarHeader({
  className,
  appTitle,
  ...rest
}: AppSidebarHeaderProps) {
  return (
    <HeaderBar
      className={cn("rounded-tl-[inherit] flex items-center", className)}
      {...rest}
    >
      <h1 className="flex-1 text-sm font-semibold text-center">{appTitle}</h1>
    </HeaderBar>
  );
}
