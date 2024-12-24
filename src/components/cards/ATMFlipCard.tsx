import React from "react";

// Define prop types for the component
interface ATMFlipCardProps {
  frontSide: {
    productName: string;
    productPrice: string;
    specialEdition?: string; // Optional special edition
    productImage: string;
  };
  backSide: {
    buttonText: string; // Text for the button on the back side
    onClick: () => void; // onClick function for the button
  };
  bgGradient?: string; // Optional background gradient
  cardBgColor?: string; // Optional card background color
  hoverBgColor?: string; // Optional hover background color
  description: string;
}

const ATMFlipCard: React.FC<ATMFlipCardProps> = ({
  frontSide,
  backSide,
  bgGradient = "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500",
  cardBgColor = "#67e1ff",
  hoverBgColor = "#6797ff",
  description,
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center h-screen w-full ${bgGradient} text-white`}
    >
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8">ATM Flip Card Animation</h1>

      {/* Card Container */}
      <div
        className={`card group w-[190px] h-[254px] transition-all duration-400 rounded-[10px] shadow-lg shadow-[rgba(0,0,0,0.705)] hover:scale-[1.2] hover:rounded-[15px]`}
        style={{ backgroundColor: cardBgColor }}
      >
        {/* Front Content */}
        <div className="first-content h-full text-[1.8rem] w-full opacity-100 transition-all duration-500 flex justify-center items-center rounded-[15px] group-hover:h-0 group-hover:opacity-0">
          <div className="flex flex-col justify-center">
            <img
              src={frontSide.productImage}
              alt={frontSide.productName}
              className="mb-4 rounded-md w-40 h-32"
            />
            <span className="font-bold text-[20px]">{frontSide.productName}</span>
            <p className="text-sm mt-2">₹ {frontSide.productPrice}</p>
            {frontSide.specialEdition && (
              <p className="text-sm mt-2 text-gray-400">{frontSide.specialEdition}</p>
            )}
          </div>
        </div>

        {/* Back Content */}
        <div className="second-content h-0 w-full opacity-0 text-[0px] transition-all duration-500 flex justify-center items-center rounded-[15px] rotate-90 group-hover:opacity-100 group-hover:h-full group-hover:text-[1.8rem] group-hover:rotate-0">
          <div className="flex flex-col justify-center items-center text-center">
            <button
              onClick={backSide.onClick} // Trigger onClick event
              className="bg-red-400 text-[15px] text-white py-1 px-4 rounded-lg hover:bg-red-600"
            >
              {backSide.buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mt-8 text-lg text-center max-w-md">{description}</p>
    </div>
  );
};

export default ATMFlipCard;
