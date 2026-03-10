"use client";

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-white">

      <h2 className="text-4xl font-bold text-center mb-10 text-red-900">
        Contact Us
      </h2>

      <form
        action="https://formspree.io/f/xnjgpbzw"
        method="POST"
        className="max-w-xl mx-auto flex flex-col gap-4 px-6"
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border p-3 rounded placeholder-gray-400 text-gray-900 caret-red-600"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border p-3 rounded placeholder-gray-400 text-gray-900 caret-red-600"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="border p-3 rounded placeholder-gray-400 text-gray-900 caret-red-600"
        />

        <button
          type="submit"
          className="bg-red-600 text-white py-3 rounded hover:bg-red-700"
        >
          Send Message
        </button>

      </form>

    </section>
  );
}