'use client';

import { useEffect } from 'react';

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return <>{children}</>;
}