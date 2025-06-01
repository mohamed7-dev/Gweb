import { Button } from "@/components/ui/button";
import { Settings2Icon } from "lucide-react";
import React from "react";

export function SettingsQuickAccess() {
  return (
    <Button variant={"muted"} size={"icon"} className="dark">
      <Settings2Icon />
    </Button>
  );
}
