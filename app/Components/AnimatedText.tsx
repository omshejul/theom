"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;

    if (!textElement) return;

    // Set initial state - invisible, blurred, and moved down
    gsap.set(textElement, {
      opacity: 0,
      filter: "blur(250px)",
      y: 300, // Move down 30px initially
    });

    // Animate to visible, clear, and original position
    gsap.to(textElement, {
      opacity: 1,
      filter: "blur(0px)",
      y: 0, // Move back to original position
      duration: 1,
      delay,
      ease: "power3.out",
    });
  }, [delay]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedText;
