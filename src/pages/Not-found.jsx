const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <p className="text-3xl font-semibold">Page Not Found</p>
        <p className="text-lg">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <a href="/" className="mt-10 text-lg font-semibold text-blue-500">
          Go back to homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
