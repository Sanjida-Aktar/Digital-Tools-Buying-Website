import React from "react";
import img from "../assets/banner.png";
import { FaRegStopCircle } from "react-icons/fa";

const Bannar = () => {
  return (
    <div className="hero-content flex-col lg:flex-row-reverse justify-between">
  <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
  <div>
    <button className="bg-purple-100 text-purple-700 rounded-full p-1.5">
      New: AI-Powered Tools Available
    </button>
    <h1 className="text-5xl font-bold">
      Supercharge Your <br /> 
      <span className="gradient-text">Digital Workflow</span>
    </h1>
    <p className="py-6">
      Access premium AI tools, design assets, templates, and productivity <br />
      software—all in one place. Start creating faster today. Explore Products
    </p>
    <button className="btn bg-purple-500 hover:bg-purple-600 rounded-full mr-3 text-white">
      Explore Products
    </button>
    <button className="btn bg-transparent border border-purple-700 text-purple-700 hover:bg-purple-600 hover:text-white rounded-full">
      <FaRegStopCircle /> Watch Demo
    </button>
  </div>
</div>
  );
};

export default Bannar;
