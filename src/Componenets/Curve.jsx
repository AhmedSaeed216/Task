
import React from 'react';

const CurveDivider = () => {
  return (
    <div className="relative w-full  h-28 overflow-hidden -mt-10 ">
      {/* Blue glowing blurred background */}
      
      {/* <div className="absolute top-10  left-1/2 transform -translate-x-1/2 w-1/3 h-20 bg-blue-900 blur-xl opacity-45 z-0"></div> */}
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-20 bg-gradient-to-t from-blue-900 via-blue-600 to-blue-900 blur-xl opacity-45 z-0"></div>

      {/* Red curve line on top */}
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full h-[60px] relative z-10"
      >
        <defs>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6b81" />
            <stop offset="50%" stopColor="#e50914" />
            <stop offset="100%" stopColor="#ff6b81" />
          </linearGradient>
        </defs>
        <path
          d="M0,100 C480,60 960,60 1440,100"
          fill="none"
          stroke="url(#redGradient)"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
};

export default CurveDivider;
