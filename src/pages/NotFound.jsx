import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      
      {/* Lottie Animation */}
      <div className="w-full sm:w-80 md:w-96 lg:w-[900px]">
        <DotLottieReact
          src="/404 Error.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "auto" }}
        />
      </div>

     
      <Link to="/" className="mt-6 px-6 py-3 bg-[#3B4953] text-white rounded hover:bg-gray-700 transition">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;




