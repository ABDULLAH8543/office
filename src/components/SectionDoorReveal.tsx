"use client";

import { useEffect, useRef, useState } from "react";

type SectionDoorRevealProps = {
  children: React.ReactNode;
};

export default function SectionDoorReveal({ children }: SectionDoorRevealProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

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
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [hasStarted]);

  return (
    <div ref={rootRef} className="relative overflow-hidden">
      <div className="relative z-10">{children}</div>

      <span
        aria-hidden="true"
        className={`absolute inset-y-0 left-0 z-20 w-1/2 bg-gradient-to-r from-rose-700 to-rose-500 transition-transform duration-1000 ease-out ${
          hasStarted ? "-translate-x-full" : "translate-x-0"
        }`}
      />
      <span
        aria-hidden="true"
        className={`absolute inset-y-0 right-0 z-20 w-1/2 bg-gradient-to-l from-blue-800 to-blue-600 transition-transform duration-1000 ease-out ${
          hasStarted ? "translate-x-full" : "translate-x-0"
        }`}
      />
    </div>
  );
}
