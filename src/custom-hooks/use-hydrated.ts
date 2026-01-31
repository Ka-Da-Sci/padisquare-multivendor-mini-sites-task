// src/hooks/use-hydrated.ts
"use client";

import { useSyncExternalStore } from "react";

export function useHydrated() {
  return useSyncExternalStore(
    // subscribe (no-op)
    () => () => {},
    // getSnapshot (client)
    () => true,
    // getServerSnapshot (server)
    () => false,
  );
}
