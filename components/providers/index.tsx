import React from "react";
import { ThemeProvider, ThemeProviderProps } from "./theme-provider";

type ProvidersProps = {
  themeProvider?: ThemeProviderProps;
  children: React.ReactNode;
};
export function Providers({ themeProvider, children }: ProvidersProps) {
  return <ThemeProvider {...themeProvider}>{children}</ThemeProvider>;
}
