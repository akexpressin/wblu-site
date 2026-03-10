export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">

      <h1 className="text-2xl font-bold text-red-600">
        WBlu
      </h1>

      <div className="flex gap-6 text-gray-700">
        <a href="/" className="hover:text-red-600">Home</a>
        <a href="#products" className="hover:text-red-600">Products</a>
        <a href="#features" className="hover:text-red-600">About</a>
        <a href="#contact" className="hover:text-red-600">Contact</a>
      </div>

    </nav>
  );
}