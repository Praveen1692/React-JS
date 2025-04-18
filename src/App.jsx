import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaCheckCircle, FaSmile } from "react-icons/fa";

const Counter = ({ end, label, Icon }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const incrementTime = 20;
      const step = Math.ceil((end / duration) * incrementTime);

      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(counter);
    }
  }, [inView, end]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl p-6 w-52 m-4 transform transition duration-700 ease-in-out hover:scale-105 animate-fade-in"
    >
      <Icon className="text-4xl text-blue-500 mb-2" />
      <div className="text-4xl font-bold text-blue-700">{count}+</div>
      <div className="text-sm font-semibold text-gray-600 mt-1 text-center">
        {label}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="w-full bg-gray-100 py-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">
        Our Achievements
      </h2>
      <div className="flex flex-wrap justify-center">
        <Counter end={85} label="Projects Completed" Icon={FaCheckCircle} />
        <Counter end={100} label="Happy Clients" Icon={FaSmile} />
      </div>
    </div>
  );
}

export default App;
