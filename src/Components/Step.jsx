import React from "react";
import userimg from "../assets/user.png";
import packageImg from "../assets/package.png";
import rocketimg from "../assets/rocket.png";
const Step = () => {
  return (
    <div className="my-10 w-11/12 mx-auto p-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold pb-5">Get Started in 3 Steps</h1>
        <p className="text-lg pb-5 text-gray-500">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-2 justify-between mt-7">
        <div className="border border-gray-300 shadow-md text-center p-6 rounded-lg">
            <button className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4  ">
              01
            </button>
          <img
            src={userimg}s
            alt="User"
            className="w-20 h-20 rounded-full mx-auto mb-4 bg-purple-200 p-3"
          />
          <h3 className="text-2xl font-bold pb-5">Create Account</h3>
          <p className="text-gray-500">Sign up for a free account to get started.</p>
        </div>

        <div className="border border-gray-300 shadow-md text-center p-6 rounded-lg">
          <button className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4  ">
              02
            </button>
          <img
            src={packageImg}
            alt="User"
            className="w-20 h-20 rounded-full mx-auto mb-4 p-3 bg-purple-200"
          />
          <h3 className="text-2xl font-bold pb-5">Choose Tools</h3>
          <p className="text-gray-500">Select from a wide range of premium digital tools.</p>
        </div>

        <div className="border border-gray-300 shadow-md text-center p-6 px-5 rounded-lg">
          <button className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4  ">
              03
            </button>
          <img
            src={rocketimg}
            alt="User"
            className="w-20 h-20 rounded-full mx-auto mb-4 bg-purple-200 p-3"
          />
          <h3 className="text-2xl font-bold pb-5">Start Using</h3>
          <p className="text-gray-500">Begin working smarter in just minutes.</p>
        </div>
      </div>
    </div>
  );
};

export default Step;