import plant2 from "../assets/plant2.png";
import plant3 from "../assets/plant3.png";
import plant4 from "../assets/plant5.png";
import plant5 from "../assets/plant7.png";
import plant6 from "../assets/plant8.png";
import plant7 from "../assets/plant6.png";
import bagIcon from "../assets/bag.png";

const plants = [
  {
    image: plant2,
    name: "Aglaonema plant",
    price: "Rs. 300/-",
    desc: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care."
  },
  {
    image: plant3,
    name: "Plantain Lilies",
    price: "Rs. 380/-",
    desc: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes."
  },
  {
    image: plant4,
    name: "Cactus",
    price: "Rs. 259/-",
    desc: "It is known for their ability to thrive in arid environments."
  },
  {
    image: plant5,
    name: "Swiss Cheese Plant",
    price: "Rs. 400/-",
    desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves."
  },
  {
    image: plant6,
    name: "Sansevieria plant",
    price: "Rs. 450/-",
    desc: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature."
  },
  {
    image: plant7,
    name: "Agave plant",
    price: "Rs. 359/-",
    desc: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves."
  }
];

const Products = () => {
  return (
    <section className="mt-24 px-5 md:px-0">

      

      <h2 className="text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-35">
        Our Top Selling Plants
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-30 justify-items-center">
        {plants.map((plant, index) => (
          <div
            key={index}
            className="w-full h-85 max-w-[360px] rounded-[40px] bg-white/5 border border-white/10 backdrop-blur p-8 text-white pt-35 relative"
          >
            <img
              src={plant.image}
              alt={plant.name}
              className="w-[220px] md:w-[270px] object-contain absolute -top-30 left-1/2 -translate-x-1/2"
            />

            <h3 className="text-2xl font-semibold">{plant.name}</h3>

            <p className="text-white/70 text-sm mt-3 leading-6">
              {plant.desc}
            </p>

            <div className="flex justify-between items-center mt-3">
              <h4 className="text-2xl md:text-3xl">{plant.price}</h4>

              <button className="w-11 h-11 rounded-lg border border-white flex items-center justify-center hover:bg-white transition">
                <img src={bagIcon} alt="Bag" className="w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Products;