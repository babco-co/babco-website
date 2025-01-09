import { useState, useEffect } from 'react';

// Shared state outside of the hook
let globalColorIndex = 0;
const whiteColor = "white";
const rotatingColors = ["#F571B7", "#FF4365", "#9574E1", "#0FE4FF"];
const subscribers = new Set<(color: string) => void>();
let timeoutId: NodeJS.Timeout | null = null;
let isFirstCycle = true;

// Animation timing (in milliseconds)
const TIMINGS = {
  WHITE_DURATION: 8000,
  SECOND_CYCLE_INTERVAL: 3200,
};

const startSecondCycle = () => {
  timeoutId = setInterval(() => {
    globalColorIndex = (globalColorIndex + 1) % rotatingColors.length;
    subscribers.forEach(callback => callback(rotatingColors[globalColorIndex]));
  }, TIMINGS.SECOND_CYCLE_INTERVAL);
};

const startColorCycle = () => {
  if (timeoutId) return;

  if (isFirstCycle) {
    // Start with white color
    subscribers.forEach(callback => callback(whiteColor));
    
    // After WHITE_DURATION, switch to second cycle
    timeoutId = setTimeout(() => {
      isFirstCycle = false;
      globalColorIndex = 0;
      subscribers.forEach(callback => callback(rotatingColors[0]));
      startSecondCycle();
    }, TIMINGS.WHITE_DURATION);
  } else {
    // If not first cycle, start second cycle immediately
    globalColorIndex = 0;
    subscribers.forEach(callback => callback(rotatingColors[0]));
    startSecondCycle();
  }
};

const stopColorCycle = () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    clearInterval(timeoutId);
    timeoutId = null;
  }
};

const resetToFirstCycle = () => {
  stopColorCycle();
  isFirstCycle = true;
  globalColorIndex = 0;
  subscribers.forEach(callback => callback(whiteColor));
  startColorCycle();
};

export const useColorCycle = () => {
  const [color, setColor] = useState(whiteColor);

  useEffect(() => {
    subscribers.add(setColor);
    startColorCycle();

    return () => {
      subscribers.delete(setColor);
      if (subscribers.size === 0) {
        stopColorCycle();
      }
    };
  }, []);

  // Reset on route change
  useEffect(() => {
    const handleRouteChange = () => {
      resetToFirstCycle();
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return color;
};