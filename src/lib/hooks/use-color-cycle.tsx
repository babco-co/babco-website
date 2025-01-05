import { useState, useEffect } from 'react';

// Shared state outside of the hook
let globalColorIndex = 0;
const colors = ["#F571B7", "#FF4365", "#9574E1", "#0FE4FF"];
const subscribers = new Set<(color: string) => void>();
let intervalId: NodeJS.Timeout | null = null;

const startColorCycle = (interval: number) => {
  if (intervalId) return; // Prevent multiple intervals

  intervalId = setInterval(() => {
    globalColorIndex = (globalColorIndex + 1) % colors.length;
    // Notify all subscribers of the color change
    subscribers.forEach(callback => callback(colors[globalColorIndex]));
  }, interval);
};

const stopColorCycle = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

export const useColorCycle = (interval = 2000) => {
  const [color, setColor] = useState(colors[globalColorIndex]);

  useEffect(() => {
    // Add this component's setColor function to subscribers
    subscribers.add(setColor);
    
    // Start the interval if it's not already running
    startColorCycle(interval);

    // Cleanup: remove this component's subscriber and stop interval if no subscribers left
    return () => {
      subscribers.delete(setColor);
      if (subscribers.size === 0) {
        stopColorCycle();
      }
    };
  }, [interval]);

  return color;
};