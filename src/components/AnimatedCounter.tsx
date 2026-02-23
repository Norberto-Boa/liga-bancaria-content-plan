import {
  useInView,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  duration?: number;
}

export function AnimatedCounter({ value, duration = 0.5 }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useMotionValueEvent(spring, "change", (latest) => {
    setDisplayValue(Math.floor(latest));
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref} className="text-2xl font-bold text-primary">
      {displayValue}
    </span>
  );
}
