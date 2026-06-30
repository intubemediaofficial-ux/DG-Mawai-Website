"use client";

import { useSyncExternalStore, useCallback } from "react";
import { contentStorageKey, defaultContent, type SiteContent } from "./siteContent";

function safeParseContent(value: string | null): SiteContent {
  if (!value) return defaultContent;
  try {
    return { ...defaultContent, ...JSON.parse(value) } as SiteContent;
  } catch {
    return defaultContent;
  }
}

type Listener = () => void;
const listeners = new Set<Listener>();

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): SiteContent {
  if (typeof window === "undefined") return defaultContent;
  return safeParseContent(window.localStorage.getItem(contentStorageKey));
}

function getServerSnapshot(): SiteContent {
  return defaultContent;
}

function notifyAll() {
  for (const listener of listeners) listener();
}

export function useSiteContent() {
  const content = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setContent = useCallback((nextContent: SiteContent) => {
    window.localStorage.setItem(contentStorageKey, JSON.stringify(nextContent));
    notifyAll();
  }, []);

  const resetContent = useCallback(() => {
    window.localStorage.removeItem(contentStorageKey);
    notifyAll();
  }, []);

  return { content, setContent, resetContent };
}
