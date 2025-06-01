import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { TriggerButton } from "./trigger-button";

export function NotificationsCenter() {
  const now = new Date();

  const formattedDate = format(now, "MMM d");

  const formattedTime = format(now, "h:mm a");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <TriggerButton>
          <span>{formattedDate}</span>
          <span>{formattedTime}</span>
        </TriggerButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={10}
        className="dark bg-shell text-shell-foreground h-[30rem] w-[44rem] grid grid-cols-2 gap-8"
      >
        <div>notifications go here</div>
        <div className="flex items-center">
          <Separator orientation="vertical" />
          <Calendar className="flex-1 w-full h-full bg-red-500" />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
