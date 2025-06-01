import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

type TriggerButtonProps = React.ComponentProps<typeof Button> & {
  //   isActive: boolean;
};
export function TriggerButton({ className, ...rest }: TriggerButtonProps) {
  return (
    <Button
      variant={"shell"}
      size={"shell"}
      className={cn("data-[state=open]:bg-muted/80", className)}
      {...rest}
    />
  );
}
