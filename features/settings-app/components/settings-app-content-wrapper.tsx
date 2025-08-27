import { cn } from "@/lib/utils";
import React from "react";

type SettingsAppContentWrapperProps = React.ComponentProps<"div">;
export function SettingsAppContentWrapper({
  className,
  ...props
}: SettingsAppContentWrapperProps) {
  return (
    <div
      className={cn("max-w-xl mx-auto overflow-y-auto", className)}
      {...props}
    />
  );
}
