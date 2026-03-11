export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-4 bg-red-600 shadow">

      <h1 className="text-2xl font-bold text-white">
        WBlu
      </h1>

      <div className="flex gap-3 md:gap-6 text-gray-700 text-sm md:text-base">
        <a href="/" className="text-white hover:text-red-900">Home</a>
        <a href="#products" className="text-white hover:text-red-900">Products</a>
        <a href="#features" className="text-white hover:text-red-900">About</a>
        <a href="#contact" className="text-white hover:text-red-900">Contact</a>
      </div>

    </nav>
  );
}