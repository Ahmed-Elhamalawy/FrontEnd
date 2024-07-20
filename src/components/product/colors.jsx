import { useState } from "react";

const Colors = () => {
  const [currentColor, setCurrentColor] = useState();

  return (
    <div id="colorsDiv" className="flex gap-1 w-auto bg-[#f7f8fb]">
      <div
        onClick={() => setCurrentColor("red")}
        className={` bg-white rounded-full flex items-center justify-center p-1 border-2 border-black border-opacity-0 ${
          currentColor === "red"
            ? "rounded-full bg-white border-2 border-black border-opacity-20 shadow-lg  flex items-center justify-center"
            : ""
        }
        `}
      >
        <button className={`size-4   bg-red rounded-full`}></button>
      </div>

      <div
        onClick={() => setCurrentColor("black")}
        className={` bg-white rounded-full flex items-center justify-center p-1 border-2 border-black border-opacity-0 ${
          currentColor === "black"
            ? "rounded-full bg-white border-2 border-black border-opacity-20 shadow-lg  flex items-center justify-center"
            : ""
        }
        `}
      >
        <button className={`size-4   bg-black rounded-full`}></button>
      </div>

      <div
        onClick={() => setCurrentColor("green")}
        className={`cursor-pointer bg-white rounded-full flex items-center justify-center p-1 border-2 border-black border-opacity-0 ${
          currentColor === "green"
            ? "rounded-full bg-white border-2 border-black border-opacity-20 shadow-lg  flex items-center justify-center"
            : ""
        }
        `}
      >
        <button className={`size-4   bg-green rounded-full`}></button>
      </div>
    </div>
  );
};

export default Colors;
