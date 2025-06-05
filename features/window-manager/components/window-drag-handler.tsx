import React from "react";

type WindowDragHandlerProps = {
  title: string;
};
export const WindowDragHandler = React.forwardRef<
  HTMLDivElement,
  WindowDragHandlerProps
>(function WindowDragHandler(props, ref) {
  const { title } = props;

  return (
    <div
      ref={ref}
      className="window-drag-handler bg-black w-[34em] h-[50em] rounded-xl overflow-hidden border-neutral-700 border-[1.5px] pointer-events-auto"
    >
      {title}
    </div>
  );
});
