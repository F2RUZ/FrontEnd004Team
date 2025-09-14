import React from "react";

const Decor = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background shapes (no images) */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 opacity-40 blur-3xl transform rotate-12 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-28 -right-16 w-72 h-72 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 opacity-30 blur-2xl transform -rotate-6 pointer-events-none"
      />

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left: headline + text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Build faster with Spoon
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-200 max-w-xl mx-auto md:mx-0">
              Modular UI components and clean patterns to help your team ship
              interfaces faster. Lightweight, responsive, and easy to customize.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:justify-start items-center gap-3 sm:gap-4">
              <a
                href="#"
                className="inline-block px-6 py-2 rounded-md bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-500 transition"
              >
                Get started
              </a>
              <a
                href="#"
                className="inline-block px-6 py-2 rounded-md border border-gray-300 text-gray-900 bg-white hover:bg-gray-100 transition"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Right: decorative cards / badges */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute -left-6 -top-6 w-24 h-24 rounded-lg bg-white/60 backdrop-blur-sm border border-white/30 transform rotate-6 shadow-md" />
              <div className="absolute -right-6 top-12 w-20 h-20 rounded-lg bg-white/40 backdrop-blur-sm border border-white/20 transform -rotate-6 shadow" />
              <div className="relative bg-white/90 dark:bg-gray-800/80 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Dashboard
                    </div>
                    <div className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                      1,248
                    </div>
                  </div>
                  <div className="text-sm text-green-600 font-semibold">+8.2%</div>
                </div>

                <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                  Recent activity, insights and quick links for your project.
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-500 transition">
                    View
                  </button>
                  <button className="px-3 py-1 rounded-md border border-gray-200 text-sm hover:bg-gray-50 transition">
                    Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* end content container */}
    </div>
  );
};

export default Decor;
