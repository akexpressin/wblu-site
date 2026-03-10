"use client";

import { motion } from "framer-motion";

export default function Products() {
  const bottles = [
    {
      name: "Classic Steel Bottle",
      desc: "Durable stainless steel bottle for everyday hydration",
      img: "/bottle1.png",
    },
    {
      name: "Thermal Bottle",
      desc: "Keeps drinks cold for 24 hours and hot for 12 hours",
      img: "/bottle2.png",
    },
    {
      name: "Sports Bottle",
      desc: "Lightweight bottle designed for workouts",
      img: "/bottle3.png",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">

      <h2 className="text-4xl font-bold text-center mb-12 text-red-900">
        Our Bottles
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 text-gray-900">

        {bottles.map((bottle, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-xl p-6 text-center shadow"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={bottle.img}
              alt={bottle.name}
              className="mx-auto mb-4 h-48 object-contain"
            />

            <h3 className="text-xl font-semibold">
              {bottle.name}
            </h3>

            <p className="text-gray-600 mt-2">
              {bottle.desc}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}