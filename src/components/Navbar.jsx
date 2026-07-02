import logo from "../assets/logo.png";
import bagicon from "../assets/bag.png";
import glassicon from "../assets/glass.png";

const Navbar = () => {
  return (
    <nav className="w-full px-5 md:px-10 lg:px-16 py-6 flex items-center justify-between">

      <div className="flex items-center gap-2">
        <img src={logo} alt="FloraVision Logo" className="w-10 h-10 object-contain" />
        <h1 className="text-white text-2xl md:text-3xl font-bold opacity-90">
          FloraVision.
        </h1>
      </div>

      <ul className="hidden lg:flex items-center gap-10 text-white/80 [font-family:'Patrick_Hand',cursive]">
        <li className="cursor-pointer hover:text-white transition">Home</li>

        <li className="flex items-center gap-1 cursor-pointer hover:text-white transition">
          Plants Type
          <span className="text-[10px]">▼</span>
        </li>

        <li className="cursor-pointer hover:text-white transition">More</li>
        <li className="cursor-pointer hover:text-white transition">Contact</li>
      </ul>

      <div className="flex items-center gap-5">
        <img src={glassicon} alt="Search" className="w-5 h-5 cursor-pointer" />
        <img src={bagicon} alt="Bag" className="w-5 h-5 cursor-pointer" />
        <div className="text-white text-2xl cursor-pointer ml-2">☰</div>
      </div>

    </nav>
  );
};

export default Navbar;