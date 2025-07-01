import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useRef } from "react";
import { Link } from "react-router";

const slides = [
  {
    id: 1,
    title: "Track Food. Reduce Waste.",
    description: "Monitor expiration dates and never forget what's in your fridge.",
    image: "https://i.ibb.co/nNPdR9Rs/0521-STD-Food-Waste-Feature-696x313.jpg",
    link: "/features",
    buttonText: "Learn More",
  },
  {
    id: 2,
    title: "Get Alerts Before Food Expires",
    description: "Stay ahead with smart reminders and reduce food waste.",
    image: "https://i.ibb.co/sJJRH0Sj/i-Stock-1355149232.jpg",
    link: "/alerts",
    buttonText: "Set Alerts",
  },
  {
    id: 3,
    title: "Help the Planet by Managing Your Fridge",
    description: "Make eco-friendly choices and keep track of your grocery items.",
    image: "https://i.ibb.co/qM697KJN/healthy-food-concept-open-fridge-full-fresh-fruits-vegetables-background-organic-nutrition-health-ca.webp",
    link: "/about",
    buttonText: "Start Now",
  },
];

const PrevArrow = ({ className, style, onClick }) => (
  <button
    className={className}
    style={{ ...style, display: "block", left: 10, zIndex: 1 }}
    onClick={onClick}
    aria-label="Previous Slide"
  >
    ❮
  </button>
);

const NextArrow = ({ className, style, onClick }) => (
  <button
    className={className}
    style={{ ...style, display: "block", right: 10, zIndex: 1 }}
    onClick={onClick}
    aria-label="Next Slide"
  >
    ❯
  </button>
);

const Banner = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <div className="w-full h-[300px] md:h-[500px] overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="  h-[300px] md:h-[600px] bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-amber-50 bg-opacity-20 p-6 md:p-10 rounded-xl text-gray-400 text-center max-w-2xl mx-4">
                <h2 className="text-2xl md:text-4xl font-bold mb-3">
                  {slide.title}
                </h2>
                <h4 className="text-2xl font-semibold">{slide.description}</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;



