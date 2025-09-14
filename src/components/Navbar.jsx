import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 text-gray-900 p-4 shadow-md">
      <div className="max-w-7xl mx-auto relative flex items-center justify-between">
        {/* Logo (left) */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold italic select-none">Spoon</h1>
        </div>

        {/* Center menu (centered using absolute + transform) */}
        <ul className="hidden md:flex gap-8 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
          <li>
            <a href="#" className="hover:text-blue-600 transition">Features</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition">Premium</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition">Pricing</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition">About</a>
          </li>
        </ul>

        {/* Right side actions (Sign in + Get Started) */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:text-blue-600 transition">Sign in</a>
          <a
            href="#"
            className="border border-white px-4 py-1.5 rounded-md hover:bg-white hover:text-black transition"
          >
            Get Started
          </a>
        </div>

        {/* Mobile: burger button on the right */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl focus:outline-none ml-4"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (keeps same content, dropdown under navbar) */}
      {open && (
        <ul className="md:hidden bg-white/80 backdrop-blur-lg text-gray-900 flex flex-col items-center gap-4 py-4 shadow-lg">
          <li>
            <a href="#" className="hover:text-blue-600 transition" onClick={() => setOpen(false)}>Features</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition" onClick={() => setOpen(false)}>Premium</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition" onClick={() => setOpen(false)}>Pricing</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition" onClick={() => setOpen(false)}>About</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition" onClick={() => setOpen(false)}>Sign in</a>
          </li>
          <li>
            <a
              href="#"
              className="mt-2 border border-gray-300 px-4 py-2 rounded-md text-center hover:bg-blue-600 hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
