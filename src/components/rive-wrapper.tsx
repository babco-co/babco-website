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
}: RiveWrapperProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5 });
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  const { rive, RiveComponent } = useRive({
    src,
    stateMachines,
    autoplay,
    layout: new Layout({
      fit,
      alignment,
    }),
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
      <RiveComponent />
    </div>
  );
};

export default RiveWrapper;
