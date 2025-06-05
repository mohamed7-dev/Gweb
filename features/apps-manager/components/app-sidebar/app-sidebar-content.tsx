import { cn } from "@/lib/utils";
import React from "react";

type AppSidebarContentProps = React.ComponentProps<"div">;
export function AppSidebarContent({
  className,
  children,
  ...rest
}: AppSidebarContentProps) {
  return (
    <div className={cn("p-2 space-y-1", className)} {...rest}>
      {children}
    </div>
  );
}
