import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-24 bg-[#0B1009] text-white py-12">
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-10  grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-12">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="w-14 h-14"/>
            <h2 className="text-3xl font-bold">
              FloraVision.</h2></div>
          <p className="text-white/80 mt-6 leading-7 max-w-sm">
            From lush indoor greens to vibrant outdoor blooms,
            our plants are crafted to thrive and elevate your
            living environment.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Quick Links </h3>
          <ul className="space-y-4 text-white/70">
            <li className="hover:text-white cursor-pointer"> Home</li>
            <li className="hover:text-white cursor-pointer"> Type's of Plants</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">
              Privacy
            </li></ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6"> For Every Update.
          </h3>
          <div
            className="
              flex
              flex-col
              sm:flex-row
              border
              border-white
              rounded-lg
              overflow-hidden
            ">

            <input
              type="email"
              placeholder="Enter Email"
              className="
                flex-1
                px-5
                py-4
                bg-transparent
                text-white
                placeholder:text-gray-400
                outline-none
              "/>

            <button
              className="
                px-8
                py-4
                bg-white
                text-black
                font-bold
                hover:bg-gray-200
                transition
              ">
              SUBSCRIBE</button>
             </div>
          <div className="flex gap-8 mt-8">
        <a
              href="#"
              className="text-2xl font-bold hover:text-[#55B000]">FB
            </a>
            <a
              href="#"
              className="text-2xl font-bold hover:text-[#55B000]">
              TW
            </a>
            <a
              href="#"
              className="text-2xl font-bold hover:text-[#55B000]">
              LI
            </a>
          </div></div></div>
      <div
        className="
          border-t
          border-white/10
          mt-12
          pt-6
          text-center
          text-white/50
          px-6
        ">
      </div>

    </footer>
  );
};
export default Footer;
