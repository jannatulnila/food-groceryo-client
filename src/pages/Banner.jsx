// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';
// import { useRef } from "react";
// import { Link } from "react-router";

// const slides = [
//   {
//     id: 1,
//     title: "Track Food. Reduce Waste.",
//     description: "Monitor expiration dates and never forget what's in your fridge.",
//     image: "https://i.ibb.co/nNPdR9Rs/0521-STD-Food-Waste-Feature-696x313.jpg",
//     link: "/features",
//     buttonText: "Learn More",
//   },
//   {
//     id: 2,
//     title: "Get Alerts Before Food Expires",
//     description: "Stay ahead with smart reminders and reduce food waste.",
//     image: "https://i.ibb.co/sJJRH0Sj/i-Stock-1355149232.jpg",
//     link: "/alerts",
//     buttonText: "Set Alerts",
//   },
//   {
//     id: 3,
//     title: "Help the Planet by Managing Your Fridge",
//     description: "Make eco-friendly choices and keep track of your grocery items.",
//     image: "https://i.ibb.co/qM697KJN/healthy-food-concept-open-fridge-full-fresh-fruits-vegetables-background-organic-nutrition-health-ca.webp",
//     link: "/about",
//     buttonText: "Start Now",
//   },
// ];

// const PrevArrow = ({ className, style, onClick }) => (
//   <button
//     className={className}
//     style={{ ...style, display: "block", left: 10, zIndex: 1 }}
//     onClick={onClick}
//     aria-label="Previous Slide"
//   >
//     ❮
//   </button>
// );

// const NextArrow = ({ className, style, onClick }) => (
//   <button
//     className={className}
//     style={{ ...style, display: "block", right: 10, zIndex: 1 }}
//     onClick={onClick}
//     aria-label="Next Slide"
//   >
//     ❯
//   </button>
// );

// const Banner = () => {
//   const sliderRef = useRef(null);

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 1500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     pauseOnHover: true,
//   };

//   return (
//     <div className="w-full h-[300px] md:h-[500px] overflow-hidden">
//       <Slider ref={sliderRef} {...settings}>
//         {slides.map((slide) => (
//           <div key={slide.id}>
//             <div
//               className="  h-[300px] md:h-[600px]  bg-cover bg-center opacity-60 flex items-center justify-center"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               <div className=" p-6 md:p-10 rounded-xl text-gray-400 text-center max-w-2xl mx-4">
//                 <h2 className=" md:text-4xl  text-2xl font-bold bg-white  bg-clip-text text-transparent mb-3">
//                   {slide.title}
//                 </h2>
//                 <h4 className="text-2xl font-semibold dark:text-amber-100">{slide.description}</h4>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Banner;





import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { Link } from "react-router"; // ✅ correct import for react-router-dom

const slides = [
  {
    id: 1,
    title: "Track Your Food, Reduce Waste",
    description:
      "Never let food expire again with our smart tracking system.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
    buttonText: "Start Tracking",
    link: "/features",
  },
  {
    id: 2,
    title: "Smart Expiry Alerts",
    description:
      "Stay notified before food expires and save money effortlessly.",
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1600&q=80",
    buttonText: "Enable Alerts",
    link: "/alerts",
  },
  {
    id: 3,
    title: "Plan Meals. Save More.",
    description:
      "Organize your fridge, plan smart meals, and reduce food waste.",
    image:
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=1600&q=80",
    buttonText: "Plan Now",
    link: "/about",
  },
];

const Banner = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="w-full h-[400px] md:h-[600px] relative overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="relative h-[400px] md:h-[600px] bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

              {/* content */}
              <div className="relative z-10 text-center text-white px-4 max-w-3xl">
                <h2 className="text-3xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-2xl mb-6 opacity-90">
                  {slide.description}
                </p>

                <Link
                  to={slide.link}
                  className="inline-block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* subtle gradient bottom overlay for modern look */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>
  );
};

export default Banner;
