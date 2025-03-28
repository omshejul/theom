import React from "react";
import Noise from "./Noise";
import Particles from "./Particles";

const Background = () => {
  return (
    <>
      <div className="w-screen h-screen top-0 left-0 absolute overflow-hidden -z-10">
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>
      <div className="w-screen h-screen top-0 left-0 absolute overflow-hidden -z-10">
        <Particles
          particleColors={[
            "#f8bbd0", // pastel pink
            "#e1bee7", // pastel purple
            "#d1c4e9", // pastel lavender
            "#bbdefb", // pastel blue
            "#b2ebf2", // pastel cyan
            "#b2dfdb", // pastel teal
            "#c8e6c9", // pastel green
            "#f0f4c3", // pastel yellow
            "#ffe0b2", // pastel orange
          ]}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
    </>
  );
};

export default Background;
