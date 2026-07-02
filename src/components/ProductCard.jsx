import plant2 from "../assets/plant2.png";

const ProductCard = () => {
  return (
    <div className="w-full flex justify-center lg:justify-end mt-16 px-5">
      <div className="relative w-full max-w-[420px] h-[520px] rounded-[40px] border border-white/20 bg-white/5 backdrop-blur-md text-white overflow-visible">

        <img
          src={plant2}
          alt="Aglaonema Plant"
          className="absolute -top-36 left-1/2 -translate-x-1/2 w-[340px] md:w-[420px] object-contain"
        />

        <div className="absolute left-8 right-8 bottom-32">
          <p className="text-gray-300 text-lg">Indoor Plant</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2 leading-tight">
            Aglaonema Plant
          </h2>
        </div>

        <button className="absolute left-8 bottom-16 px-8 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition">
          Buy Now
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <div className="w-8 h-1 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;