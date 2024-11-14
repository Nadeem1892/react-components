import React, { useState } from "react";

const ATMFlipCard = () => {
  // Step 1: State to manage the hover state
  const [isHovered, setIsHovered] = useState(false);

  // Step 2: Handle mouse enter and leave
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-[300px] h-[200px] perspective-[1000px]"
      // Step 3: Attach mouse event listeners to the container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Step 4: Use inline style for conditional transform */}
      <div
        className="card-inner w-full h-full relative transform-style-[preserve-3d] transition-all duration-[999ms]"
        style={{
          transform: isHovered ? "rotateY(180deg) " : "rotateY(0deg) ",
        }}
      >
        {/* Front Side */}
        <div
          className="card-front absolute w-full h-full  bg-[#6A2C70] text-white flex items-center justify-center text-[24px] border-[10px] border-solid border-[#6A2C70] rounded-[10px]"
          style={{ backfaceVisibility: "hidden",}}
          
        >
          <p>Front Side</p>
        </div>

        {/* Back Side */}
        <div
          className="card-back absolute w-full h-full  bg-[#F08A5D] text-white flex items-center justify-center text-[24px] border-[10px] border-solid border-[#F08A5D] rounded-[10px]"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p>Back Side</p>
        </div>
      </div>
    </div>
  );
};

export default ATMFlipCard;
