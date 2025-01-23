"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "motion/react";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

interface RiveWrapperProps {
  src: string;
  stateMachines?: string;
  autoplay?: boolean;
  playOnView?: boolean;
  fit?: Fit;
  alignment?: Alignment;
  containerClassName?: string;
  width?: number;
  height?: number;
  loadingComponent?: React.ReactNode;
}

const RiveWrapper = ({
  src,
  stateMachines = "State Machine 1",
  autoplay = false,
  playOnView = true,
  fit = Fit.FitWidth,
  alignment = Alignment.Center,
  containerClassName = "",
  width,
  height,
  loadingComponent,
}: RiveWrapperProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5 });
  const [retryCount, setRetryCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const maxRetries = 3;

  const { rive, RiveComponent } = useRive({
    src,
    stateMachines,
    autoplay,
    layout: new Layout({
      fit,
      alignment,
    }),
    onLoad: () => {
      setIsLoading(false);
    },
    onLoadError: () => {
      if (retryCount < maxRetries) {
        setTimeout(() => {
          setRetryCount((prev) => prev + 1);
        }, 1000);
      }
    },
  });

  useEffect(() => {
    if (playOnView && isInView && rive) {
      rive.play();
    }
  }, [isInView, rive, playOnView, retryCount]);

  return (
    <div
      ref={containerRef}
      className={containerClassName}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        maxWidth: "100%",
      }}
    >
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
          {loadingComponent}
        </div>
      )}
      <RiveComponent />
    </div>
  );
};

export default RiveWrapper;