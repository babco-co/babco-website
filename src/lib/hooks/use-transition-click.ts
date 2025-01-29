import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useTransition } from "@/components/page-transition";

type ClickHandler = (e?: React.MouseEvent) => void;

export const useTransitionClick = (route: string, onClick?: ClickHandler) => {
  const router = useRouter();
  const { startTransition, endTransition } = useTransition();

  const handleClick = useCallback(async (e?: React.MouseEvent) => {
    try {
      // Call original onClick if provided
      if (onClick) {
        onClick(e);
      }
      
      // Start transition and navigate
      await startTransition();
      await router.push(route);
      endTransition();
    } catch (error) {
      console.error("Navigation failed:", error);
      endTransition();
    }
  }, [route, router, startTransition, endTransition, onClick]);

  return handleClick;
};