"use client";

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

interface RiveWrapperProps {
  src: string;
  stateMachines?: string;
  autoplay?: boolean;
  playOnView?: boolean;
  fit?: Fit;
  alignment?: Alignment;
  containerClassName?: string;
}

const RiveWrapper = ({
  src,
  stateMachines = "State Machine 1",
  autoplay = false,
  playOnView = true,
  fit = Fit.FitWidth,
  alignment = Alignment.Center,
  containerClassName = "",
}: RiveWrapperProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5 });

  const { rive, RiveComponent } = useRive({
    src,
    stateMachines,
    autoplay,
    layout: new Layout({
      fit,
      alignment,
    }),
  });

  useEffect(() => {
    if (playOnView && isInView && rive) {
      rive.play();
    }
  }, [isInView, rive, playOnView]);

  return (
    <div ref={containerRef} className={containerClassName}>
      <RiveComponent />
    </div>
  );
};

export default RiveWrapper;
