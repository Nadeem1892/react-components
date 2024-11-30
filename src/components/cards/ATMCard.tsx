/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

type Props = {
  productName: string;
  productImage: string;
  productDescription: string;
  price: string;
  buyLink: string;
};

const ATMSpotifyCard = ({ productName, productImage, productDescription, price, buyLink }: Props) => {
  return (
    <div className='shadow-xl flex flex-col items-center justify-center w-full max-w-xs h-auto rounded-lg overflow-hidden bg-white p-4'>
      {/* Product Header */}
      <div className="mb-4">
        <p className="text-sm font-semibold text-green-500">NEW</p>
        <h1 className="text-2xl font-bold">{productName}</h1>
      </div>

      {/* Product Image and Details */}
      <div className="mb-4 w-full flex flex-col items-center">

        <div className="w-[60%] h-auto ">
          <img 
            src={productImage} 
            alt={`${productName} image`} 
            className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="text-gray-600 text-sm mt-2">{productDescription}</div>
      </div>

      {/* Price and Buy Section */}
      <div className="flex justify-between w-full items-center gap-10">
        <p className="text-lg font-semibold text-gray-800">{price}</p>
        <a 
          href={buyLink} 
          className="bg-blue-500 text-white rounded-lg py-2 px-4 w-full text-center hover:bg-blue-600 transition-all"
        >
          Buy
        </a>
      </div>
    </div>
  );
};

export default ATMSpotifyCard;
