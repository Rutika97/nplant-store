import plant2 from "../assets/plant2.png";

const BestCollection = () => {
  return (
    <section className="mt-12 sm:mt-16 lg:mt-20 px-5 lg:px-10">

      {/* heading */}
      <div className="flex items-center justify-center gap-3 mb-16 sm:mb-24 lg:mb-45">
        <div className="
          w-6 h-6
          sm:w-8 sm:h-8
          lg:w-10 lg:h-10
          border-l-[3px]
          border-b-[3px]
          border-[#2E5E0E]
          rounded-bl-[15px]
        "></div>

        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Our Best O2
        </h2>

        <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 border-r-[3px] border-t-[3px] border-[#2E5E0E] rounded-tr-[15px]" />
      </div>

      {/* card - main section */}
      <div className="relative max-w-[1350px] mx-auto rounded-[30px] sm:rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-md overflow-visible flex flex-col lg:flex-row items-center px-6 md:px-10 lg:px-16 py-10 pt-40 sm:pt-48 lg:pt-10">

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={plant2}
            alt="Plant"
            className="
              absolute
              left-1/2 -translate-x-1/2 -top-24
              sm:-top-28
              lg:left-[-2rem] lg:translate-x-0 lg:-top-40

              w-[220px]
              sm:w-[280px]
              md:w-[340px]
              lg:w-[450px]
              xl:w-[540px]

              object-contain
              z-10
            "
          />
        </div>

        {/* right content */}
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left mt-4 lg:mt-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            We Have Small And Best O2 Plants Collection's
          </h2>

          <p className="mt-4 sm:mt-6 text-white/70 leading-7 text-sm md:text-base">
            Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into
            the atmosphere through the process of photosynthesis.
          </p>

          <p className="mt-4 text-white/70 leading-7 text-sm md:text-base">
            Many plants can help filter out pollutants and toxins from the air, such as formaldehyde,
            benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-between items-center gap-6 mt-8">
            <button className="w-full sm:w-auto px-8 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition">
              Explore
            </button>

            <div className="flex gap-6 text-xl">
              <button>{"<"}</button>
              <button>other</button>
              <button>{">"}</button>
            </div>
          </div>
        </div>

      </div>

      {/* slider dots */}
      <div className="flex justify-center gap-3 mt-8">
        <div className="w-8 h-1 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-white"></div>
      </div>

    </section>
  )
}

export default BestCollection