import { cn } from "@/lib/utils";
import React from "react";

type LazyLoaderWrapperProps = React.ComponentProps<"div">;
export function LazyLoaderWrapper({
  className,
  children,
  ...rest
}: LazyLoaderWrapperProps) {
  return (
    <div
      className={cn("size-full flex items-center justify-center", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
