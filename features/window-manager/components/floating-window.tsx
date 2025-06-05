import React from "react";
import Draggable from "react-draggable";
import { WindowDragHandler } from "./window-drag-handler";
import { FullWindowInfo } from "../lib/window-manager.slice";

type FloatingWindowProps = {
  children: React.ReactNode;
  windowInfo: FullWindowInfo;
};
export function FloatingWindow({ children, windowInfo }: FloatingWindowProps) {
  const windowRef = React.useRef<HTMLDivElement>(null);
  // TODO: fix classname not found bug
  return (
    <div className="size-full pointer-events-none absolute">
      <Draggable
        handle=".window-drag-handler"
        nodeRef={windowRef as unknown as React.RefObject<HTMLDivElement>}
      >
        <WindowDragHandler ref={windowRef} title={windowInfo.app.title} />
        {children}
      </Draggable>
    </div>
  );
}
