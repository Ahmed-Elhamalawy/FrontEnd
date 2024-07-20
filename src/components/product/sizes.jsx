import { useState } from "react";

const Sizes = () => {
  const [currentSize, setCurrentSize] = useState(null);

  console.log(currentSize);
  return (
    <div className="flex gap-3">
      <button
        onClick={() => setCurrentSize("XS")}
        className={`${
          currentSize === "XS"
            ? "bg-red text-white border-red"
            : "bg-white text-black"
        } p-2  size-10  border-black border-2 border-opacity-30 `}
      >
        XS
      </button>
      <button
        onClick={() => setCurrentSize("S")}
        className={`${
          currentSize === "S"
            ? "bg-red text-white border-red"
            : "bg-white text-black"
        } p-2 size-10 border-black border-2 border-opacity-30`}
      >
        S
      </button>
      <button
        onClick={() => setCurrentSize("M")}
        className={`${
          currentSize === "M"
            ? "bg-red text-white border-red"
            : "bg-white text-black"
        } p-2  size-10  border-black border-2 border-opacity-30 `}
      >
        M
      </button>
      <button
        onClick={() => setCurrentSize("L")}
        className={`${
          currentSize === "L"
            ? "bg-red text-white border-red"
            : "bg-white text-black"
        } p-2  size-10  border-black border-2 border-opacity-30 `}
      >
        L
      </button>
      <button
        onClick={() => setCurrentSize("XL")}
        className={`${
          currentSize === "XL"
            ? "bg-red text-white border-red"
            : "bg-white text-black"
        } p-2  size-10  border-black border-2 border-opacity-30 `}
      >
        XL
      </button>
    </div>
  );
};

export default Sizes;
