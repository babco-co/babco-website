import { useState, useEffect } from "react";

export const useColorCycle = (initialColor = "#FFC0F1", interval = 2000) => {
  const [color, setColor] = useState(initialColor);

  useEffect(() => {
    const colors = ["#FFC0F1", "#CAF4CB", "#F7F272", "#83B2F0"];
    let colorIndex = colors.indexOf(initialColor);

    const timer = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
      setColor(colors[colorIndex]);
    }, interval);

    return () => clearInterval(timer);
  }, [initialColor, interval]);

  return color;
};
