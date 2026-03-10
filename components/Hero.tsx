"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-24 bg-red-50">

      <motion.h1
        className="text-5xl font-bold text-red-900"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Pure Hydration
      </motion.h1>

      <p className="mt-4 text-gray-600 text-lg">
        Premium reusable water bottles for everyday life
      </p>

      <a href="#products" className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
        Explore Products
      </a>

    </section>
  );
}