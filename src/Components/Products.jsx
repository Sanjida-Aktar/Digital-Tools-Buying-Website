import React, { useState } from "react";
import { FaCheck, FaIcons } from "react-icons/fa";


const Products = ({ tools, carts, setCarts }) => {

  
  const [isbuying , setIsBuying] = useState(false);

  const handleBuyNow = () => {
    setIsBuying(true);
    setCarts([...carts, tools]);
 
   }
  // console.log(tools);
  let tagcolors ="" ;
  {
  if(tools.tagType === "new"){
    tagcolors="bg-green-100 text-green-800 rounded-full"
  }
    else if(tools.tagType === "popular"){
    tagcolors="bg-purple-100 text-purple-800 rounded-full"
  }
  else {
    tagcolors="bg-yellow-100 text-yellow-800 rounded-full"
  }

}

  return (
    <div className="card w-96 bg-base-100 shadow-sm border p-6 ">
      <div className="pb-7 ">
        <img src={tools.image} alt={tools.name} />
      </div>
      <button className={tagcolors + " text-sm font-semibold px-3 py-1 absolute top-4 right-4"}>
        {tools.tagType}
      </button>

      <h1 className="text-3xl font-bold pb-3">{tools.name}</h1>
      <p className="text-lg text-gray-700 mb-4">{tools.description}</p>
      <p className="text-2xl font-bold pb-3">${tools.price.toFixed(2)}<span className="text-sm font-normal text-gray-500">/{tools.period}</span></p>
      <div>
        {tools.features.map((feature) => (
          <p key={feature}>
            <FaCheck className="inline-block text-green-600 mr-2" />
            {feature}
          </p>
        ))}
      </div>
      <button onClick={handleBuyNow} className="btn bg-gradient-to-r from-blue-600 to-purple-500 text-white mt-4 w-full rounded-full">
        {isbuying ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default Products;
