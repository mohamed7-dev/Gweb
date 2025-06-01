import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PowerOffIcon, Volume1Icon } from "lucide-react";
import { SettingsQuickAccess } from "./settings-quick-access";
import { PowerQuickAccess } from "./power-quick-access";
import { VolumeQuickAccess } from "./volume-quick-access";
import { DarkModeQuickAccess } from "./dark-mode-quick-access";
import { TriggerButton } from "../trigger-button";
import { FullScreenQuickAccess } from "./full-screen-quick-access";

export function ControlCenter() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <TriggerButton>
          <Volume1Icon />
          <PowerOffIcon />
        </TriggerButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={10}
        align="end"
        className="dark w-[22rem] bg-shell text-shell-foreground space-y-2"
      >
        <div className="flex items-center justify-between">
          <SettingsQuickAccess />
          <PowerQuickAccess />
        </div>
        <VolumeQuickAccess />
        <div className="grid grid-cols-2 gap-4">
          <DarkModeQuickAccess />
          <FullScreenQuickAccess />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
