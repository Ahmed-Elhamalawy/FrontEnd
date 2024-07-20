import { FaChevronDown } from "react-icons/fa6";

const DropDown = ({ opened, setOpened, title, children }) => {
  return (
    <div className="relative z-50">
      <button
        onClick={() => setOpened((prev) => !prev)}
        className="flex items-center gap-2 font-semibold text-black border-none bg-none"
      >
        {title}
        <FaChevronDown className={`${opened && "rotate-180 duration-200"}`} />
      </button>

      {opened && <div className="absolute -bottom-24">{children}</div>}
    </div>
  );
};

export default DropDown;
