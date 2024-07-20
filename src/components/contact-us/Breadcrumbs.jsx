const Breadcrumbs = ({ section1, section2, section3 }) => {
  return (
    <div className="text-sm breadcrumbs">
      <ul className="flex flex-row gap-3">
        <li className="flex">
          <a className="flex flex-row justify-center items-center">
            {section1}
          </a>
        </li>
        <li>
          <a className="flex flex-row justify-center items-center">
            {section2}
          </a>
        </li>
        <li className="flex flex-row justify-center items-center">
          {section3}
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
