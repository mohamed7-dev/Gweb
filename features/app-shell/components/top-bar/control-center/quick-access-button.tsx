import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";

type QuickAccessButtonProps = {
  showArrowDown?: boolean;
  DropdownMenuContent?: React.ReactNode;
  active: boolean;
} & React.ComponentProps<typeof Button>;

export function QuickAccessButton({
  showArrowDown = false,
  active,
  DropdownMenuContent,
  ...rest
}: QuickAccessButtonProps) {
  return (
    <div className="w-full flex items-center rounded-full">
      <Button
        variant={active ? "default" : "muted"}
        className={cn(
          "dark rounded-full w-full",
          showArrowDown && "rounded-e-none rounded-s-full"
        )}
        size={"lg"}
        {...rest}
      />
      {showArrowDown && (
        <>
          <Separator orientation="vertical" />
          <Button
            size={"icon"}
            variant={active ? "default" : "muted"}
            className="dark rounded-e-full rounded-s-none"
          >
            <ChevronRightIcon />
          </Button>
        </>
      )}
    </div>
  );
}
