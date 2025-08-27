import { cn } from "@/lib/utils";
import React from "react";

type AppMainContentProps = React.ComponentProps<"div">;
export function AppMainContent({
  children,
  className,
  ...rest
}: AppMainContentProps) {
  return (
    <div
      className={cn(
        "space-y-4 rounded-tr-[inherit] rounded-br-[inherit] bg-secondary overflow-y-auto",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
