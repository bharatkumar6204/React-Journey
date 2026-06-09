import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-indigo-900 to-black text-white relative overflow-hidden">

      {/* Floating circles background */}
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse bottom-10 right-10"></div>

      {/* Main content */}
      <div className="text-center z-10 px-6">

        <h1 className="text-[120px] md:text-[160px] font-extrabold tracking-widest animate-bounce">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          Page Not Found
        </h2>

        <p className="text-gray-300 mt-4">
          Oops! The page you are looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition duration-300 shadow-lg"
        >
          Go Back Home
        </Link>
      </div>

      {/* Floating dots animation */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
      <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
      <div className="absolute top-1/2 right-10 w-2 h-2 bg-white rounded-full animate-ping"></div>

    </div>
  );
};

export default NotFound;