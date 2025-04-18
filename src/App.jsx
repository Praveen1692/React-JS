import React, { useEffect, useState } from 'react'

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    let start = 0;
    const duration = 2000; // total duration in ms
    const incrementTime = 20; // interval time in ms
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
  }, [end]);

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-6 w-40 m-4">
      <div className="text-4xl font-bold text-blue-600">{count}+</div>
      <div className="text-sm font-semibold text-gray-600 mt-2">{label}</div>
    </div>
  );
};


function App() {
  return (
    <div className="w-full bg-gray-100 py-12 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Achievements</h2>
      <div className="flex flex-wrap justify-center">
        <Counter end={85} label="Projects Completed" />
        <Counter end={100} label="Happy Clients" />
      </div>
    </div>
  )
}

export default App