import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useTransition } from "@/components/page-transition";

type ClickHandler = (e?: React.MouseEvent) => void;

export const useTransitionClick = (route: string, onClick?: ClickHandler) => {
  const router = useRouter();
  const { startTransition } = useTransition();

  const handleClick = useCallback((e?: React.MouseEvent) => {
    // Prevent default if it's a link
    if (e) {
      e.preventDefault();
    }

    // Call original onClick if provided
    if (onClick) {
      onClick(e);
    }
    
    // Start transition animation
    startTransition();
    
    // Navigate after animation starts
    setTimeout(() => {
      router.push(route);
    }, 500);
  }, [route, router, startTransition, onClick]);

  return handleClick;
};