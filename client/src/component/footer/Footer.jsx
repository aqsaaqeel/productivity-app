import React from "react";

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center text-center text-black bg-blue-500">
      <div className="container p-6 m-auto">
        <div className="">
          <p className="flex justify-center items-center">
            <span className="mr-4">Register for free</span>
            <button
              type="button"
              className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Sign up!
            </button>
          </p>
        </div>
      </div>
      <div className="text-center p-4 bg-blue-600">© 2022 Copyright:</div>
    </footer>
  );
};
