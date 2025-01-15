"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="relative w-[200px]">
      <p className="text-xs font-medium text-black/40 dark:text-white/40 mb-2.5">
        Interface Theme
      </p>

      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="w-full flex flex-row items-center justify-center appearance-none bg-transparent text-foreground px-4 py-2 pr-8 border-b border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-pink"
      >
        <option className="text-xs" value="light">
          Light
        </option>
        <option className="text-xs" value="dark">
          Dark
        </option>
        <option className="text-xs" value="system">
          System Preference
        </option>
      </select>

      <div className="absolute right-3 top-10  pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M5.99999 8.40031C5.64999 8.40031 5.29999 8.26531 5.03499 8.00031L1.77499 4.74031C1.62999 4.59531 1.62999 4.35531 1.77499 4.21031C1.91999 4.06531 2.15999 4.06531 2.30499 4.21031L5.56499 7.47031C5.80499 7.71031 6.19499 7.71031 6.43499 7.47031L9.69499 4.21031C9.83999 4.06531 10.08 4.06531 10.225 4.21031C10.37 4.35531 10.37 4.59531 10.225 4.74031L6.96499 8.00031C6.69999 8.26531 6.34999 8.40031 5.99999 8.40031Z"
            fill="#6E6E6E"
          />
        </svg>
      </div>
    </div>
  );
}
