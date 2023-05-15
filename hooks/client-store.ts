"use client";
import { useEffect, useSyncExternalStore } from "react";
import type { StoreValueSetter, Store } from "@/utils/data-source";

export function useClientHook<StoreValue>(
  store: Store<StoreValue>
): [StoreValue, StoreValueSetter<StoreValue>] {
  const state = useSyncExternalStore<StoreValue>(
    store.subscribe,
    store.get,
    store.get
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    store.set(window.__DATA_STORE_VALUE__)
  }, [typeof window.__DATA_STORE_VALUE__]);

  return [state, store.set];
}
