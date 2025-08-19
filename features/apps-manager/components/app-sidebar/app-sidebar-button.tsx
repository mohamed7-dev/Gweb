import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

type AppSidebarButtonProps = {
  iconPath: string;
  buttonTitle: string;
} & Omit<React.ComponentProps<typeof Button>, "children">;
export function AppSidebarButton({
  buttonTitle,
  iconPath,
  className,
  ...props
}: AppSidebarButtonProps) {
  return (
    <Button
      variant={"ghost"}
      size={"lg"}
      className={cn(
        "w-full rounded-md p-4 justify-start cursor-pointer",
        className
      )}
      {...props}
    >
      <div className="size-6 relative">
        <Image
          src={iconPath}
          alt={buttonTitle}
          fill
          sizes="40px"
          className="size-full object-contain"
        />
      </div>
      <span>{buttonTitle}</span>
    </Button>
  );
}
