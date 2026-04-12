import React from "react";

const Hero = () => {
  const videoLink =
    "https://www.herlan.com/wp-content/uploads/2025/10/Web-Dynamic-3sec-.mp4";

  return (
    <section className="relative w-full h-[475px] overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://www.herlan.com/wp-content/uploads/2025/10/Web-Dynamic-3sec-.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
};

export default Hero;
