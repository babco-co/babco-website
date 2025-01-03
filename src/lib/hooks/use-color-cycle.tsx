// hooks/useColorCycle.ts
import { useState, useEffect } from 'react';

// Shared state outside of the hook
let globalColorIndex = 0;
const colors = ["white", "#F571B7", "#FF4365", "#9574E1", "#0FE4FF"];
const subscribers = new Set<(color: string) => void>();
let intervalId: NodeJS.Timeout | null = null;

// Animation timing (in milliseconds) - TO BE UPDATED with exact values from animator
const TIMINGS = {
  TOTAL_DURATION: 23000,    // Total duration of one complete cycle
  COLOR_DURATIONS: [       // Duration each color should show
    7000,  // white
    4000,  // pink
    4000,  // red
    4000,  // purple
    4000   // blue
  ]
};

const startColorCycle = () => {
  if (intervalId) return;

  let currentIndex = 0;
  
  const scheduleNextColor = () => {
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % colors.length;
      globalColorIndex = currentIndex;
      subscribers.forEach(callback => callback(colors[currentIndex]));
      scheduleNextColor();
    }, TIMINGS.COLOR_DURATIONS[currentIndex]);
  };

  // Start the cycle
  scheduleNextColor();
};

const stopColorCycle = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

export const useColorCycle = () => {
  const [color, setColor] = useState(colors[globalColorIndex]);

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

  return color;
};