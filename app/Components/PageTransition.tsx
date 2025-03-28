"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;

    if (!overlay || !content) return;

    // Create a timeline for the animations
    const tl = gsap.timeline();

    // Initial states
    gsap.set(overlay, {
      opacity: 1,
      backdropFilter: "blur(20px)",
    });

    gsap.set(content, {
      y: 15, // Subtle initial position offset
    });

    // Animate overlay from blur to clear
    tl.to(overlay, {
      backdropFilter: "blur(0px)",
      duration: 1.2,
      ease: "power2.out",
    })
      .to(
        overlay,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            // Remove the overlay from the DOM after animation
            if (overlay.parentNode) {
              overlay.style.display = "none";
            }
          },
        },
        "-=0.3"
      ) // Slightly overlap these animations
      .to(
        content,
        {
          y: 0, // Move to final position
          duration: 1.5,
          ease: "power2.out",
        },
        "-=1.5"
      ); // Start at the same time as the first animation
  }, []);

  return (
    <>
      <div ref={contentRef}>{children}</div>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/10 z-50 pointer-events-none"
        style={{ backdropFilter: "blur(20px)" }}
      />
    </>
  );
};

export default PageTransition;
