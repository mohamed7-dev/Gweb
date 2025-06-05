import React from "react";
import { cn } from "@/lib/utils";

type HeaderBarProps = React.ComponentProps<"div">;

export const HeaderBar = React.forwardRef<HTMLDivElement, HeaderBarProps>(
  function HeaderBar({ className, children, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "window-drag-handler w-full h-10 flex items-center justify-between p-2 pointer-events-auto overflow-hidden cursor-grab",
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
