import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <h1 className="gradient-text">DigiTools</h1>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Priceing</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className='flex items-center gap-3'>
            <button><FaCartPlus /></button>
        <a href="#login">Login</a>
        <a className="btn bg-purple-500 rounded-full text-white">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;