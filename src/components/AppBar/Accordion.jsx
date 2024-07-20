import { NavLink } from "react-router-dom";

const Accordion = () => {
  return (
    <div className="join join-vertical w-full ">
      <div className="collapse collapse-arrow join-item ">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-sm  font-medium">HOME</div>
        <div className="collapse-content flex flex-col gap-1">
          <p>Fashion 1</p>
          <p>Fashion 2</p>
          <p>Furniture 1</p>
          <p>Furniture 2</p>
          <p>Electronics 1</p>
          <p>Electronics 1</p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item ">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-sm  font-medium">PAGES</div>
        <div className="collapse-content">
          <p>About us</p>
          <p> Contact us</p>
          <p>Faq</p>
          <p>404 Error page</p>
          <p> Login</p>
          <p> Register</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item ">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-sm  font-medium">PRODUCTS</div>
        <div className="collapse-content">
          <p className="font-bold py-2">WOMANS</p>
          <p className="py-1">Vestibulum Sed</p>
          <p className="py-1">Donec Porttitor</p>
          <p className="py-1">Donec Vitae Facilisis</p>
          <p className="py-1">Curabitur Tempus</p>
          <p className="py-1">Vivamus In Tortor</p>
          <p className="font-bold py-2">MEN</p>
          <p className="py-1">Vestibulum Sed</p>
          <p className="py-1">Donec Porttitor</p>
          <p className="py-1">Donec Vitae Facilisis</p>
          <p className="py-1">Curabitur Tempus</p>
          <p className="py-1">Vivamus In Tortor</p>
          <p className="font-bold py-2">KIDS</p>
          <p className="py-1">Vestibulum Sed</p>
          <p className="py-1">Donec Porttitor</p>
          <p className="py-1">Donec Vitae Facilisis</p>
          <p className="py-1">Curabitur Tempus</p>
          <p className="py-1">Vivamus In Tortor</p>
          <p className="font-bold py-2">ACCESSORIES</p>
          <p className="py-1">Vestibulum Sed</p>
          <p className="py-1">Donec Porttitor</p>
          <p className="py-1">Donec Vitae Facilisis</p>
          <p className="py-1">Curabitur Tempus</p>
          <p className="py-1">Vivamus In Tortor</p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item ">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-sm  font-medium">BLOG</div>
        <div className="collapse-content">
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </div>
      </div>

      <div className="collapse collapse-arrow join-item ">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-sm  font-medium">SHOP</div>
        <div className="collapse-content">
          <p className="py-1">SHOP PAGE LAYOUT</p>
          <p className="py-1">Shop List View</p>
          <p className="py-1">Shop List Left Sidebar</p>
          <p className="py-1">Shop List Right Sidebar</p>
          <p className="py-1">Left Sidebar</p>
          <p className="py-1">Right Sidebar</p>
          <p className="py-1">Shop Load More</p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item ">
        <NavLink to={"/contact-us"} className="pl-3 text-sm font-medium mb-2 ">
          CONTACT US
        </NavLink>
      </div>
    </div>
  );
};

export default Accordion;
