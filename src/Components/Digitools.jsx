import React, { use, useState} from "react";
import Products from "./Products";
import Carts from "./Carts";


const Digitools = ({ modelPromise }) => {
  console.log(modelPromise);
  const tools = use(modelPromise);
//   console.log(tools);
const [activeTab, setActiveTab] = useState("products");
const [carts, setCarts] = useState([]); 

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
          aria-label="Products"
            onClick={() => setActiveTab("products")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 "
          aria-label="Cart"
          //   aria-label={`Cart (${carts.length})`}
            onClick={() => setActiveTab("cart")}
        />
      </div>

       {activeTab === "products" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
          {tools.map((tool) => (
            <Products key={tool.id} tools={tool} carts={carts} setCarts={setCarts} />
          ))}
        </div>
      )}
      
        { activeTab === "cart" && ( <div carts={carts} > <Carts /></div>
          
      )} 
    </div>
  );
};

export default Digitools;
