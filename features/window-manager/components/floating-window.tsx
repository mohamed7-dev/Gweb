import React from "react";
import Draggable from "react-draggable";
import { FullWindowInfo } from "../lib/window-manager.slice";

type FloatingWindowProps = {
  children: React.ReactNode;
  windowInfo: FullWindowInfo;
};
export function FloatingWindow({ children, windowInfo }: FloatingWindowProps) {
  const windowRef = React.useRef<HTMLDivElement>(null);
  return (
    <Draggable
      defaultPosition={{
        x: windowInfo.position?.x as number,
        y: windowInfo.position?.y as number,
      }}
      handle=".window-drag-handler"
      nodeRef={windowRef as unknown as React.RefObject<HTMLDivElement>}
    >
      <div
        ref={windowRef}
        className="absolute z-50 shadow bg-background text-foreground rounded-lg"
        style={{
          width: windowInfo.dimensions?.width,
          height: windowInfo.dimensions?.height,
        }}
      >
        {children}
      </div>
    </Draggable>
  );
}
