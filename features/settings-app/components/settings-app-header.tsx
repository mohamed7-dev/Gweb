import React from "react";

type SettingsAppHeaderProps = {
  title: string;
};
export function SettingsAppHeader({ title }: SettingsAppHeaderProps) {
  return <h2 className="flex-1 text-center text-md font-semibold">{title}</h2>;
}
