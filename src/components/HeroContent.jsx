import img from "../assets/img.png";

const HeroContent = () => {
  return (
    <div className="w-full max-w-xl text-white">

      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
        Earth's Exhale
      </h1>

      <p className="mt-5 text-gray-300 text-base sm:text-lg max-w-lg">
        "Earth Exhale" symbolizes the purity and vitality of the Earth's
        natural environment and its essential role in sustaining life.
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-8">
        <button className="px-8 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition">
          Buy Now
        </button>

        <button className="hidden md:flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
            ▶
          </div>
          <span className="[font-family:'Patrick_Hand',cursive]">Live Demo...</span>
        </button>
      </div>

      <div className="mt-14 w-full max-w-[360px] rounded-[25px] border border-white/20 bg-white/10 backdrop-blur p-5">
        <div className="flex items-center gap-3">
          <img src={img} alt="Customer" className="w-12 h-12 rounded-full object-cover" />

          <div>
            <h3 className="font-semibold">Ronnie Hamill</h3>
            <p className="text-xs text-white/60">⭐⭐⭐⭐⭐</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-white/70 leading-6">
          I can't express how thrilled I am with my new natural plants! They
          bring such a fresh and vibrant energy to my home.
        </p>
      </div>

    </div>
  );
};

export default HeroContent;