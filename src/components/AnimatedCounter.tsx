"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  target: number;
  suffix?: string;
  durationMs?: number;
};

export default function AnimatedCounter({
  target,
  suffix = "",
  durationMs = 1400,
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const rootRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = rootRef.current;

    if (!node || hasStarted) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    let animationFrame = 0;
    const startedAt = performance.now();

    const tick = (time: number) => {
      const elapsed = time - startedAt;
      const progress = Math.min(elapsed / durationMs, 1);
      const nextValue = Math.round(target * progress);

      setValue(nextValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [durationMs, hasStarted, target]);

  return (
    <span ref={rootRef}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
