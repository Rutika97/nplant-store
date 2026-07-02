import user1 from "../assets/img1.png";
import user2 from "../assets/img2.jpg";
import user3 from "../assets/img3.png";

const reviews = [
  {
    image: user1,
    name: "Shelly Hart",
    review:
      "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
  },
  {
    image: user2,
    name: "Lula Rolfson",
    review:
      "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    image: user3,
    name: "Carol Huels",
    review:
      "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
  },
];

const CustomerReview = () => {
  return (
    <section className="mt-55">

      {/* heading */}
      <h2 className="text-center text-white text-5xl font-bold mb-40">
        Customer Review
      </h2>

      {/* cards */}
      <div className="flex justify-center gap-8 flex-wrap gap-25">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="relative w-[380px] h-[320px] rounded-[45px] bg-white/5 border border-white/10 backdrop-blur-lg p-7 text-white"
          >
            {/* profile */}
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-yellow-400 text-sm">★★★★★</p>
              </div>
            </div>

            {/* review text */}
            <p className="text-white/70 text-12 leading-7 mt-11">
              {item.review}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default CustomerReview;