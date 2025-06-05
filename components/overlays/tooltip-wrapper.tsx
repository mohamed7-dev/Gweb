import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type TooltipContentProps = React.ComponentProps<typeof TooltipContent>;

export interface TooltipWrapperProps extends TooltipContentProps {
  label: string;
}
export function TooltipWrapper(props: TooltipWrapperProps) {
  const { children, side, align, sideOffset, alignOffset, label, ...rest } =
    props;

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          {...rest}
        >
          <p className="font-semibold capitalize">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
