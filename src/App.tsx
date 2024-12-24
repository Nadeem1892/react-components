import "./App.css";
import ATMFlipCard from "./components/cards/ATMFlipCard";

function App() {
  const handleAddToCart = () => {
    alert("Added to cart!");
  };

  return (
    <>
      <ATMFlipCard
        frontSide={{
          productName: "Nike Air Max 97",
          productPrice: "17999",
          specialEdition: "Special Edition",
          productImage: "https://static01.nyt.com/images/2021/03/30/multimedia/28xp-shoes-09/28xp-shoes-09-mobileMasterAt3x.jpg?quality=75&auto=webp&disable=upscale&width=600",
        }}
        backSide={{
          buttonText: "Add to Cart",
          onClick: handleAddToCart, // Pass the click handler
        }}
        description="This interactive flip card uses React, TypeScript, and Tailwind CSS. Hover to flip and reveal content, simulating an ATM with front and back designs."
        cardBgColor="#67e1ff"
        hoverBgColor="#6797ff"
      />
    </>
  );
}

export default App;
