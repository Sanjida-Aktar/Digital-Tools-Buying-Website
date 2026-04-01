import React from "react";
import { toast } from "react-toastify";



const Carts = ({ carts, setCarts }) => {
//   console.log(carts);

const handleRemove = (id) => {
    setCarts(carts.filter((cart) => cart.id !== id))
    toast.error("Item removed from cart!");
  }
const handleProced = () => {
    setCarts([]);
    toast.success("Thank you for your purchase! Your order has been processed successfully.");
}
  return (
    <div className="border border-gray-300 rounded-2xl mt-10 p-6">
      <h2 className="text-3xl pb-3 font-bold">Your Carts</h2>
      {carts.length === 0 ? (
        <p className="text-2xl text-gray-700 text-center ">
          Your cart is empty.
          
        </p>
      ) : (
        <ul>
          {carts.map((item) => (
            <li key={item.id}>
              <div className="flex items-center justify-between border-gray-400 rounded-2xl p-4 mb-4 shadow-sm">
                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-lg">${item.price.toFixed(2)}</p>
                </div>
                <button
                  className="btn rounded-full text-red-500"
                  onClick={() =>{handleRemove(item.id)}
                    
                  }
                >
                  Remove
                </button>
              </div>

              
            </li>
          ))}
        </ul>
      )}
      {carts.length > 0 && (
        <>
        <div className="flex justify-between gap-10  pt-4">
          <h1 className="text-2xl font-bold">Total : </h1>
          <p className="font-bold">${carts.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
        </div>

        <button onClick={handleProced} className="btn bg-blue-500 text-white hover:bg-blue-600 w-full mt-4 rounded-full">
               Proced to Checkout
              </button>
              </>
      )}
              
    </div>
  );
};

export default Carts;
