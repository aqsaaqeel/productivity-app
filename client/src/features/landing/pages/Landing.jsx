import React from "react";
import {Link} from "react-router-dom"
import {useDocumentTitle} from "../../../hooks/useTitle"
export const Landing = () => {
  useDocumentTitle("Landing")
  return (
    <div>
      <div className="text-center bg-gray-50 text-gray-800 py-24 px-6">
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
          One stop to organising your <br />
          <span className="text-blue-600">day to day tasks</span>
        </h1>
        <Link
          to="/home"
          className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="#!"
          role="button"
        >
          Get started
        </Link>
        <a
          className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="#!"
          role="button"
        >
          Learn more
        </a>
      </div>
      <div className="flex justify-center pb-10">
        <img
          src="https://i.ibb.co/Lp0Qptn/hero-image.jpg"
          className="max-w-full h-auto"
          alt="..."
        />
      </div>
    </div>
  );
};
