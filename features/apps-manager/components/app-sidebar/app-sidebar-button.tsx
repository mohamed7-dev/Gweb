import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type AppSidebarButtonProps = {
  iconPath: string;
  title: string;
};
export function AppSidebarButton({ title, iconPath }: AppSidebarButtonProps) {
  return (
    <Button
      variant={"ghost"}
      size={"lg"}
      className="w-full rounded-md p-4 justify-start cursor-pointer"
    >
      <div className="size-6 relative">
        <Image
          src={iconPath}
          alt={title}
          fill
          sizes="40px"
          className="size-full object-contain"
        />
      </div>
      <span>{title}</span>
    </Button>
  );
}
