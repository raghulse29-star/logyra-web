'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import OpenChannelPopup from '@/components/ui/OpenChannelPopup';

type Ctx = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const OpenChannelContext = createContext<Ctx | null>(null);

export function useOpenChannel(): Ctx {
  const ctx = useContext(OpenChannelContext);
  if (!ctx) {
    throw new Error('useOpenChannel must be used inside <OpenChannelProvider>');
  }
  return ctx;
}

const AUTO_DELAY_MS = 15_000;
const SESSION_FLAG = 'logyra_oc_popup_shown';
const PERSIST_FLAG = 'logyra_open_channel_joined';

export default function OpenChannelProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // First-visit auto-trigger after 15s — skipped if user already joined or already saw it this session
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let joined = false;
    let shown = false;
    try {
      joined = localStorage.getItem(PERSIST_FLAG) === '1';
      shown = sessionStorage.getItem(SESSION_FLAG) === '1';
    } catch {
      // Private mode / quota exceeded — fall through to showing the popup
    }

    if (joined || shown) return;

    const t = setTimeout(() => {
      setIsOpen(true);
      try {
        sessionStorage.setItem(SESSION_FLAG, '1');
      } catch {
        /* ignore */
      }
    }, AUTO_DELAY_MS);

    return () => clearTimeout(t);
  }, []);

  return (
    <OpenChannelContext.Provider value={{ open, close, isOpen }}>
      {children}
      <OpenChannelPopup isOpen={isOpen} onClose={close} />
    </OpenChannelContext.Provider>
  );
}
