"use client";

import { useEffect, useRef, useState } from "react";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  animation?: AnimationType;
}

export default function Reveal({
  children,
  delay = 0,
  animation = "fade-up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const animationClasses = {
    "fade-up": "translate-y-6",
    "fade-down": "-translate-y-6",
    "fade-left": "translate-x-6",
    "fade-right": "-translate-x-6",
    "zoom-in": "scale-95",
    "zoom-out": "scale-105",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform
        ${
          visible
            ? "opacity-100 translate-x-0 translate-y-0 scale-100"
            : `opacity-0 ${animationClasses[animation]}`
        }
      `}
    >
      {children}
    </div>
  );
}
