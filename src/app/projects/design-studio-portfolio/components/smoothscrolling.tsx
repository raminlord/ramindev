// test10/src/app/projects/design-studio-portfolio/components/smoothscrolling.tsx
'use client';
import { ReactNode, useEffect } from 'react';

interface SmoothScrollingProps {
  children: ReactNode;
}

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
  useEffect(() => {
    // Smooth scroll polyfill for Safari
    const smoothScroll = () => {
      const currentScroll = window.pageYOffset;
      const targetScroll = currentScroll + (0 - currentScroll) * 0.1;
      
      window.scrollTo(0, targetScroll);
      if (Math.abs(targetScroll) > 0.5) {
        requestAnimationFrame(smoothScroll);
      }
    };

    // Add smooth scroll behavior
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.slice(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          const targetPosition = targetElement.offsetTop;
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 1000;
          let start: number | null = null;
          
          const animation = (currentTime: number) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
          };
          
          const ease = (t: number, b: number, c: number, d: number) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
          };
          
          requestAnimationFrame(animation);
        }
      }
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return <>{children}</>;
}