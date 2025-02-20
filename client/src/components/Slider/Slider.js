import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../ui/ui";


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "Explore Nature",
      content: "Discover breathtaking landscapes and wildlife.",
      image: "https://source.unsplash.com/800x400/?nature",
    },
    {
      id: 1,
      title: "Urban Adventures",
      content: "Experience the vibrant city life and its wonders.",
      image: "https://source.unsplash.com/800x400/?city",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto p-4">
      <motion.div
        key={slides[currentSlide].id}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-lg"
      >
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">{slides[currentSlide].title}</h2>
          <p className="text-lg mb-4">{slides[currentSlide].content}</p>
          <Button onClick={nextSlide} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {currentSlide === 0 ? "See Urban Adventures" : "Back to Nature"}
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Slider;