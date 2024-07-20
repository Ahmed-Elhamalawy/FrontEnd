const Button = ({ variant, className, text }) => {
  return (
    <button
      className={`${
        variant === "contained"
          ? "bg-blue-600"
          : "bg-transparent border-2 border-solid border-gray-900 "
      } px-3 py-2 ${className}   `}
    >
      {text}
    </button>
  );
};

export default Button;
