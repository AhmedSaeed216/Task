
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex   items-center justify-between px-4 sm:px-10 md:px-20 py-4 bg-transparent absolute w-full z-30">
      <h1 className="text-3xl sm:text-4xl font-bold text-red-600">NETFLIX</h1>
      <button className="mt-2 sm:mt-0 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
