"use client";
import React from "react";
import {
  createGlobalStore,
  GlobalStore,
  GlobalStoreProps,
  GlobalStoreState,
} from "@/lib/store";
import { useStore } from "zustand";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GlobalStoreContext extends GlobalStore {}

const GlobalStoreContext = React.createContext<GlobalStoreContext | null>(null);

type GlobalStoreProviderProps = GlobalStoreProps & {
  children: React.ReactNode;
};
export function GlobalStoreProvider(props: GlobalStoreProviderProps) {
  const { children, ...rest } = props;
  const storeRef = React.useRef<GlobalStore>(null);
  if (!storeRef.current) {
    storeRef.current = createGlobalStore(rest);
  }
  return (
    <GlobalStoreContext.Provider value={storeRef.current}>
      {children}
    </GlobalStoreContext.Provider>
  );
}

export function useGlobalStoreContext<T>(
  selector: (state: GlobalStoreState) => T
): T {
  const ctx = React.useContext(GlobalStoreContext);
  if (!ctx) {
    throw new Error("Make sure to wrap the component in AppConfigProvider!");
  }
  return useStore(ctx, selector);
}
