import hero from "../assets/plant1.jpg";
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";
import ProductCard from "./ProductCard";
import ProductCard2 from "./productcard2";
import ProductCard3 from "./productcard3";
import Products from "./Products";
import CustomerReview from "./CustomerReview";
import BestCollection from "./BestCollection";
import Footer from "./Footer";

const Hero = () => {
  return (
    <>
      {/* ================= HERO + IMAGE ================= */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundPosition: "50% -420px",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-10">

          <Navbar />

          <div className="flex justify-between items-start mt-20">
            <HeroContent />
            <ProductCard />
          </div>

          <div className="mt-28">
            <h1 className="text-white text-5xl font-bold text-center mb-12">
              Our Trendy Plants
            </h1>

            <div className="flex justify-center">
              <ProductCard2 />
            </div>
          </div>

          <div className="mt-28 flex justify-center pb-32">
            <ProductCard3 />
          </div>

        </div>
      </section>

      {/* dark green starts */}

      <section className="bg-[#081007] py-24">

        <div className="w-full max-w-[1500px] mx-auto px-10">
          <Products />
        </div>

        <CustomerReview />

        <div className="mt-32">
          <BestCollection />
        </div>

        <Footer />

      </section>

    </>
  );
};

export default Hero;