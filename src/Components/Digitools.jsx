import React, { use } from "react";
import Products from "./Products";

const Digitools = ({ modelPromise }) => {
  console.log(modelPromise);
  const tools = use(modelPromise);
//   console.log(tools);
  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-10">
        Premium Digital Tools
      </h1>
      <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
        Discover our collection of premium digital tools designed to boost your
        productivity and creativity.
      </p>

      <div className="tabs tabs-box justify-center bg-transparent mt-6">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 )"
          aria-label="Models"
          //   onClick={() => setActiveTab("model")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 "
          aria-label="Cart"
          //   aria-label={`Cart (${carts.length})`}
          //   onClick={() => setActiveTab("cart")}
        />
      </div>

       <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        {
            tools.map(tool=>(<Products key={tool.id} tools={tool}></Products>))
        }
       </div>
    </div>
  );
};

export default Digitools;
