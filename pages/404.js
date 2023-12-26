import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl font-medium text-gray-900 mb-8">
        Oops! Page not found
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 focus:bg-gray-800 focus:outline-none focus:shadow-outline"
      >
        Go back to homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
