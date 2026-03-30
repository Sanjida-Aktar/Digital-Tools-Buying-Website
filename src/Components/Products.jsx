import React from "react";
import { FaCheck, FaIcons } from "react-icons/fa";

const Products = ({ tools }) => {
  // console.log(tools);
  return (
    <div className="card w-96 bg-base-100 shadow-sm border p-4 ">
      <img src="" alt="" />

      <h1 className="text-3xl font-bold pb-3">{tools.name}</h1>
      <p className="text-lg text-gray-700 mb-4">{tools.description}</p>
      <p className="text-2xl font-bold pb-3">${tools.price.toFixed(2)}</p>
      <div>
        {tools.features.map((feature) => (
          <p key={feature}>
            <FaCheck className="inline-block text-green-600 mr-2" />
            {feature}
          </p>
        ))}
      </div>
      <button className="btn bg-gradient-to-r from-blue-600 to-purple-500 text-white mt-4 w-full rounded-full">
        Buy Now
      </button>
    </div>
  );
};

export default Products;
