import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Volume2Icon } from "lucide-react";
import React from "react";

export function VolumeQuickAccess() {
  return (
    <div className="flex items-center gap-2">
      <Button size={"icon"} variant={"ghost"} className="dark">
        <Volume2Icon />
      </Button>
      <Slider className="dark" />
    </div>
  );
}
