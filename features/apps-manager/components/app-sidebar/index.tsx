import { cn } from "@/lib/utils";
import React from "react";

type AppSidebarProps = React.ComponentProps<"div">;
export function AppSidebar({ className, ...rest }: AppSidebarProps) {
  return (
    <div
      className={cn(
        "w-60 h-full bg-sidebar rounded-tl-[inherit] rounded-bl-[inherit] border-r-2 border-sidebar-border",
        className
      )}
      {...rest}
    />
  );
}
