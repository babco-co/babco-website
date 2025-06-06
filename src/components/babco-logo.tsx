"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const BabcoLogo = ({
  width,
  height,
  className,
  useGradient = false,
  staticColor,
}: {
  width?: number | string;
  height?: number | string;
  className?: string;
  useGradient?: boolean;
  staticColor?: string;
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const gradientFill = "url(#logoGradient)";

  const getCurrentFill = () => {
    if (staticColor) return staticColor;
    if (!mounted) return "transparent";
    if (useGradient && resolvedTheme === "light") {
      return gradientFill;
    }
    return resolvedTheme === "dark" ? "#FFFFFF" : "#000000";
  };

  const currentFill = getCurrentFill();

  // Calculate dimensions while maintaining aspect ratio
  const svgWidth = width || "100%";
  const svgHeight = height || "100%";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 1400 295"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={{
        opacity: mounted ? 1 : 0, // Hide the logo until mounted
        transition: "opacity 0.3s ease-in-out", // Smooth transition
      }}
    >
      {useGradient && (
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#FF4365" }} />
            <stop
              offset="50%"
              style={{ stopColor: "rgba(255, 67, 101, 0.34)" }}
            />
            <stop offset="100%" style={{ stopColor: "#FF4365" }} />
          </linearGradient>
        </defs>
      )}

      <path
        d="M113.85 294.626C175.655 294.626 206.558 256.277 206.558 217.928C206.558 183.212 181.132 148.496 130.67 142.441C162.747 130.331 182.305 102.478 182.305 75.4316C182.305 43.1378 153.75 12.0551 84.9031 12.0551L-2.32854 12.0551L-2.32854 288.167H-2.71973L-2.71973 294.626H113.85ZM109.547 147.689C146.708 147.689 165.094 182.808 165.094 217.928C165.094 253.047 146.708 288.167 109.547 288.167H33.2682L33.2682 18.5138H82.556C124.803 18.5138 145.926 48.3856 145.926 79.0647C145.926 110.955 123.238 143.249 77.862 143.249C66.9091 143.249 54.7827 141.634 41.0916 137.193C60.2591 145.267 77.8619 148.9 93.9 148.9C99.3764 148.9 104.462 148.496 109.547 147.689Z"
        fill={currentFill}
      />
      <path
        d="M376.342 12.0551H369.693L230.826 294.626H267.987C267.987 294.626 267.987 291.8 266.423 291.396C262.902 290.185 258.99 282.919 258.99 270.809C258.99 259.91 262.12 244.974 271.117 226.405L356.393 52.4223L445.58 233.671C417.807 203.396 376.342 180.386 340.746 180.386C316.884 180.386 295.761 190.074 282.461 215.102C297.717 194.111 318.058 185.23 339.572 185.23C385.731 185.23 437.365 223.579 460.053 263.139L475.7 294.626L515.209 294.626L376.342 12.0551Z"
        fill={currentFill}
      />
      <path
        d="M669.301 294.626C731.106 294.626 762.009 256.277 762.009 217.928C762.009 183.212 736.582 148.496 686.121 142.441C718.197 130.331 737.756 102.478 737.756 75.4316C737.756 43.1378 709.2 12.0551 640.354 12.0551L553.122 12.0551V288.167L553.122 288.756V294.626H669.301ZM664.998 147.689C702.159 147.689 720.544 182.808 720.544 217.928C720.544 253.047 702.159 288.167 664.998 288.167H588.719V18.5138L638.007 18.5138C680.253 18.5138 701.377 48.3856 701.377 79.0647C701.377 110.955 678.689 143.249 633.313 143.249C622.36 143.249 610.233 141.634 596.542 137.193C615.71 145.267 633.313 148.9 649.351 148.9C654.827 148.9 659.912 148.496 664.998 147.689Z"
        fill={currentFill}
      />
      <path
        d="M970.91 285.396C879.376 285.396 826.567 198.607 826.567 122.313C826.567 62.5692 859.035 9.28446 930.619 9.28446C947.44 9.28446 984.993 17.7616 984.993 49.248C984.993 53.6884 984.21 58.5325 982.646 64.1839C999.857 69.4316 1013.55 56.5141 1013.55 41.1746C1013.55 23.413 995.163 2.42203 942.355 2.42203C860.991 2.42203 789.797 52.881 789.797 147.34C789.797 220.809 843.388 294.681 950.961 294.681C1012.77 294.681 1043.67 269.249 1064.4 228.882C1042.49 260.772 1012.77 285.396 970.91 285.396Z"
        fill={currentFill}
      />
      <path
        d="M1238.84 0C1131.65 0 1078.06 73.4683 1078.06 147.34C1078.06 220.809 1131.65 294.681 1238.84 294.681C1346.41 294.681 1400 220.809 1400 147.34C1400 73.4683 1346.41 0 1238.84 0ZM1258.79 285.396C1167.25 285.396 1114.83 198.607 1114.83 122.313C1114.83 62.5692 1147.3 9.28446 1218.89 9.28446C1310.42 9.28446 1363.23 95.6703 1363.23 171.964C1363.23 231.708 1330.76 285.396 1258.79 285.396Z"
        fill={currentFill}
      />
    </svg>
  );
};

export default BabcoLogo;
