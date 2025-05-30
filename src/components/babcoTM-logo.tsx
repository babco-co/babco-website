'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const BabcoTMLogo = ({
  width,
  height,
  className,
  useGradient = false,
  staticColor,
  isMenuOpen,
}: {
  width?: number | string;
  height?: number | string;
  className?: string;
  useGradient?: boolean;
  staticColor?: string;
  isMenuOpen?: boolean;
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const gradientFill = 'url(#logoGradient)';

  const getCurrentFill = () => {
    if (staticColor) return staticColor;
    if (!mounted) return 'transparent';
    if (useGradient && resolvedTheme === 'light') {
      return gradientFill;
    }
    return resolvedTheme === 'dark'
      ? isMenuOpen
        ? '#000000'
        : '#FFFFFF'
      : isMenuOpen
      ? '#FFFFFF'
      : '#000000';
  };

  const currentFill = getCurrentFill();

  // Calculate dimensions while maintaining aspect ratio
  const svgWidth = width || '100%';
  const svgHeight = height || '100%';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 109 21"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={{
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      {useGradient && (
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#FF4365' }} />
            <stop
              offset="50%"
              style={{ stopColor: 'rgba(255, 67, 101, 0.34)' }}
            />
            <stop offset="100%" style={{ stopColor: '#FF4365' }} />
          </linearGradient>
        </defs>
      )}
      <path
        d="M88.5075 0C80.8645 0 77.043 5.23557 77.043 10.4999C77.043 15.7355 80.8645 20.9998 88.5075 20.9998C96.1785 20.9998 100 15.7355 100 10.4999C100 5.23557 96.1785 0 88.5075 0ZM89.9301 20.3382C83.4029 20.3382 79.665 14.1533 79.665 8.71636C79.665 4.45887 81.9803 0.661639 87.0849 0.661639C93.6122 0.661639 97.3779 6.81775 97.3779 12.2547C97.3779 16.5122 95.0627 20.3382 89.9301 20.3382Z"
        fill={currentFill}
      />
      <path
        d="M69.3994 20.3384C62.8722 20.3384 59.1064 14.1536 59.1064 8.71662C59.1064 4.45912 61.4216 0.661889 66.5263 0.661889C67.7258 0.661889 70.4036 1.26599 70.4036 3.50981C70.4036 3.82625 70.3478 4.17145 70.2362 4.57419C71.4636 4.94816 72.4399 4.02761 72.4399 2.93447C72.4399 1.66873 71.1289 0.172852 67.3631 0.172852C61.5611 0.172852 56.4844 3.76871 56.4844 10.5002C56.4844 15.7357 60.3059 21.0001 67.9768 21.0001C72.3841 21.0001 74.5878 19.1878 76.0662 16.3111C74.5041 18.5837 72.3841 20.3384 69.3994 20.3384Z"
        fill={currentFill}
      />
      <path
        d="M47.894 20.5685C52.3013 20.5685 54.5049 17.8356 54.5049 15.1028C54.5049 12.6288 52.6918 10.1548 49.0934 9.72334C51.3808 8.86034 52.7755 6.87542 52.7755 4.94804C52.7755 2.64669 50.7392 0.431641 45.8298 0.431641H39.6094V20.1082V20.1501V20.5685H47.894ZM47.5871 10.0973C50.2371 10.0973 51.5481 12.6 51.5481 15.1028C51.5481 17.6055 50.2371 20.1082 47.5871 20.1082H42.1477V0.891912H45.6624C48.675 0.891912 50.1813 3.02066 50.1813 5.20694C50.1813 7.47953 48.5634 9.78088 45.3277 9.78088C44.5467 9.78088 43.6819 9.66581 42.7056 9.34938C44.0725 9.92471 45.3277 10.1836 46.4714 10.1836C46.8619 10.1836 47.2245 10.1548 47.5871 10.0973Z"
        fill={currentFill}
      />
      <path
        d="M27.0056 0.431641H26.5314L16.6289 20.5685H19.2789C19.2789 20.5685 19.2789 20.3671 19.1673 20.3383C18.9162 20.252 18.6373 19.7342 18.6373 18.8712C18.6373 18.0945 18.8605 17.0301 19.502 15.7069L25.583 3.30833L31.9429 16.2247C29.9624 14.0671 27.0056 12.4274 24.4672 12.4274C22.7657 12.4274 21.2594 13.1178 20.311 14.9014C21.3988 13.4055 22.8493 12.7726 24.3835 12.7726C27.675 12.7726 31.3571 15.5055 32.975 18.3246L34.0907 20.5685H36.9081L27.0056 0.431641Z"
        fill={currentFill}
      />
      <path
        d="M8.28461 20.5685C12.6919 20.5685 14.8956 17.8356 14.8956 15.1028C14.8956 12.6288 13.0824 10.1548 9.48406 9.72335C11.7714 8.86034 13.1661 6.87542 13.1661 4.94804C13.1661 2.64669 11.1298 0.431641 6.22043 0.431641H0V20.1082L-3.81078e-06 20.5685H8.28461ZM7.97777 10.0973C10.6277 10.0973 11.9388 12.6 11.9388 15.1028C11.9388 17.6055 10.6277 20.1082 7.97777 20.1082H2.53838V0.891912H6.05305C9.06564 0.891912 10.5719 3.02066 10.5719 5.20694C10.5719 7.47953 8.95407 9.78088 5.71833 9.78088C4.93729 9.78088 4.07256 9.66581 3.09626 9.34938C4.46308 9.92471 5.71832 10.1836 6.86199 10.1836C7.25251 10.1836 7.61514 10.1548 7.97777 10.0973Z"
        fill={currentFill}
      />
      <g clipPath="url(#clip0_2220_37183)">
        <path
          d="M107.942 18.5554L107.902 18.5494L106.812 20.9998H106.484L105.374 18.4682L105.334 18.4742V20.9998H104.98V17.8818H105.464L106.631 20.5065H106.671L107.851 17.8818H108.296V20.9998H107.942V18.5554ZM104.477 18.2127H103.458V20.9998H103.097V18.2127H102V17.8818H104.477V18.2127Z"
          fill={currentFill}
          fillOpacity="0.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_2220_37183">
          <rect
            width="6.29611"
            height="3.11793"
            fill={currentFill}
            transform="translate(102 17.8818)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BabcoTMLogo;
