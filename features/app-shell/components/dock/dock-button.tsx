import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DockButtonProps = React.ComponentProps<typeof Button>;
export function DockButton(props: DockButtonProps) {
  const { className, ...rest } = props;
  return (
    <Button
      variant={"shell"}
      className={cn("w-full h-12 rounded-sm cursor-pointer", className)}
      {...rest}
    />
  );
}
