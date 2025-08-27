import { cn } from "@/lib/utils";
import React from "react";

type ScreenSectionProps = {
  sectionTitle: string;
  sectionDescription?: string;
  children: React.ReactNode;
  containerProps?: Omit<React.ComponentProps<"div">, "children">;
};

export function ScreenSection({
  sectionTitle,
  sectionDescription,
  children,
  containerProps,
}: ScreenSectionProps) {
  const { className, ...props } = containerProps ?? {
    className: "",
  };
  if (containerProps && "children" in containerProps) {
    delete containerProps.children;
  }
  return (
    <section className="space-y-4">
      <h2 className="font-bold text-sm">{sectionTitle}</h2>
      {sectionDescription && (
        <p className="text-foreground">{sectionDescription}</p>
      )}
      <div
        className={cn(
          "flex flex-wrap justify-center items-center bg-accent rounded-xl p-4",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </section>
  );
}
