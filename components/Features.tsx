"use client";

import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "BPA Free",
      desc: "Safe and healthy materials for everyday hydration",
    },
    {
      title: "24 Hour Cold",
      desc: "Advanced insulation keeps drinks cold all day",
    },
    {
      title: "Leak Proof",
      desc: "Designed to prevent spills in your bag",
    },
    {
      title: "Eco Friendly",
      desc: "Reusable bottles helping reduce plastic waste",
    },
  ];

  return (
    <section id="features" className="py-20 bg-red-50">

      <h2 className="text-4xl font-bold text-center mb-12 text-red-900">
        Why Choose WBlu
      </h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6 text-black">

        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              {feature.title}
            </h3>

            <p className="text-gray-600">
              {feature.desc}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}