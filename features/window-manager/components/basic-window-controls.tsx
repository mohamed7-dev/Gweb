import React from "react";
import { useGlobalStoreContext } from "@/components/providers/global-store-provider";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { FullWindowInfo } from "../lib/window-manager.slice";

type BasicWindowControlsProps = {
  windowInfo: FullWindowInfo;
};
export function BasicWindowControls({
  windowInfo: { id },
}: BasicWindowControlsProps) {
  const closeWindow = useGlobalStoreContext((state) => state.closeWindow);
  return (
    <div className="absolute right-3 top-3">
      <Button
        variant={"muted"}
        size={"icon"}
        className="size-6 cursor-pointer"
        onClick={() => closeWindow(id)}
      >
        <XIcon />
      </Button>
    </div>
  );
}
