import React from "react";
import { TopBar } from "../top-bar";
import { Dock } from "../dock";

type AppShellViewProps = {
  children: React.ReactNode;
};
export function AppShellView({ children }: AppShellViewProps) {
  return (
    <div className="w-screen h-screen max-h-screen relative bg-blue-500">
      <TopBar />
      <Dock />
      {children}
    </div>
  );
}
