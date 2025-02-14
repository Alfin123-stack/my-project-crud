function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          404
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="text-blue-500 hover:text-blue-700 text-lg font-semibold">
          Go back to homepage
        </a>
      </div>
    </div>
  );
}

export default NotFound;
