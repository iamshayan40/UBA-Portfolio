'use client';

export function ClientProvider({ children }: { children: React.ReactNode }) {
  // Always render children, do not block SSR or hydration
  return <>{children}</>;
}