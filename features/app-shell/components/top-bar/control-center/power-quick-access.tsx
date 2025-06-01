import { Button } from "@/components/ui/button";
import { PowerIcon } from "lucide-react";
import React from "react";

export function PowerQuickAccess() {
  // TODO: use dropdown menu instead
  return (
    <Button variant={"muted"} size={"icon"} className="dark">
      <PowerIcon />
    </Button>
  );
}
