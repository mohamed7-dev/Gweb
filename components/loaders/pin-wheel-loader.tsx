import { cn } from "@/lib/utils";
import { LoaderPinwheel, LucideIcon } from "lucide-react";
import React from "react";

type PinWheelLoaderProps = React.ComponentProps<LucideIcon>;
export function PinWheelLoader({ className, ...rest }: PinWheelLoaderProps) {
  return (
    <LoaderPinwheel
      className={cn("animate-spin size-10", className)}
      {...rest}
    />
  );
}
