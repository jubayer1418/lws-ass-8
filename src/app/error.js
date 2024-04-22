
'use client'

import Link from "next/link";

const ErrorPage = ({ statusCode }) => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-600 mb-4">{statusCode ? `Error ${statusCode}` : 'An error occurred'}</h1>
      <p className="text-lg text-gray-700">Sorry, something went wrong.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back to Homepage
      </Link>
    </div>
    );
  };
  
  export default ErrorPage;
  