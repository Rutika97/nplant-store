import plant3 from "../assets/plant3.png";
import bagIcon from "../assets/bag.png";

const ProductCard2 = () => {
  return (
    <div className="relative w-full max-w-[1500px] min-h-[420px] rounded-[40px] lg:rounded-[110px] border border-white/10 bg-white/5 backdrop-blur overflow-visible flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-10 mt-20">

      <img
        src={plant3}
        alt="Plant"
        className="w-[260px] sm:w-[340px] lg:w-[520px] object-contain lg:absolute lg:-left-8 lg:-top-24"
      />

      <div className="w-full lg:max-w-[550px] text-white text-center lg:text-left lg:ml-auto">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          For Your Desks Decorations
        </h2>

        <p className="mt-6 text-white/70 leading-8">
          I recently added a beautiful desk decoration plant to my workspace,
          and it has made such a positive difference!
        </p>

        <h3 className="mt-6 text-4xl md:text-5xl font-bold">Rs. 599/-</h3>

        <div className="flex justify-center lg:justify-start items-center gap-5 mt-8">
          <button className="px-10 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition">
            Explore
          </button>

          <button className="w-14 h-14 border border-white rounded-xl flex items-center justify-center">
            <img src={bagIcon} alt="Bag" className="w-5 h-5" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductCard2;