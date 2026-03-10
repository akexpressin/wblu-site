export default function Footer() {
  return (
    <footer className="bg-[#3b0000] text-white py-10">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-red-600">WBlu</h2>
          <p className="text-white">
            Premium reusable bottles designed for sustainable hydration.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#features">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <p className="text-gray-400">
            Instagram | Facebook | Twitter
          </p>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} WBlu. All rights reserved.
      </p>

    </footer>
  );
}