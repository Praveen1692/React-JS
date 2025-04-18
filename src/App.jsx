import React from "react";
import {
  Bot as Lotus,
  Globe2,
  BookOpen,
  Users,
  Star,
  MapPin,
  Video,
  MessageCircle,
  Quote,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

function App() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/*content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-x-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <Lotus size={20} className="text-white" />
          </div>
          {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Transform Your Life with Yoga 
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8">
          Led by Dr. Anjali Shukla, HoD of Yoga
          <span className="block text-lg sm:text-xl mt-2 text-gray-300">
            15+ Years of Experience
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold text-lg hover:bg-purple-100 transition-colors duration-300">
            Join Online Classes
          </button>
          <button className="px-8 py-4 bg-purple-600 text-white rounded-full font-semibold text-lg hover:bg-purple-700 transition-colors duration-300">
            Join Offline Classes
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
