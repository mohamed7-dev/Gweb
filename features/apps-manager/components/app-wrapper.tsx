import React from "react";

type AppWrapperProps = {
  children: React.ReactNode;
};
export function AppWrapper({ children }: AppWrapperProps) {
  return <div className="rounded-xl flex h-full">{children}</div>;
}
