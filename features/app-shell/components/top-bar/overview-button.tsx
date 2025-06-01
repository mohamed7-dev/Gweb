import React from "react";
import { CircleDotIcon, DotIcon } from "lucide-react";
import { TriggerButton } from "./trigger-button";

export function OverviewButton() {
  return (
    <TriggerButton className="gap-[1px]">
      <DotIcon />
      <DotIcon />
      <CircleDotIcon />
      <DotIcon />
    </TriggerButton>
  );
}
