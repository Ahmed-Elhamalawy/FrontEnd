// import "../../atoms/css/contact-us/btn.css";

const GetInTouch = () => {
  return (
    <section className="mb-0">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 px-10 sm:px-10 lg:px-24 mt-36 mb-0">
        <form action="">
          <h1 className="text-4xl mb-5">Get In Touch</h1>
          <p className="mb-5 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            blandit massa enim. Nullam id varius nunc id varius nunc.
          </p>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
            <input
              type="text"
              placeholder="   Enter Name "
              className=" outline-none border rounded-md h-11"
            />
            <input
              type="text"
              placeholder="   Enter Email "
              className=" outline-none border rounded-md h-11"
            />
            <input
              type="text"
              placeholder="  Enter Phone No. "
              className=" outline-none border rounded-md h-11"
            />
            <input
              type="text"
              placeholder="  Enter Subject "
              className=" outline-none border rounded-md h-11"
            />
          </div>
          <textarea
            placeholder="   Message"
            className="grid grid-cols-2 h-44 my-5 w-full border rounded-md outline-none"
          ></textarea>
          <div className="grid grid-cols-2 h-10">
            <a
              href=""
              className="bg-red h-14  text-xl text-white	rounded flex items-center justify-center w-3/4"
            >
              Send Message
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
