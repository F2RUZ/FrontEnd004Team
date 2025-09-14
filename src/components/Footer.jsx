import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {/* Logo & About */}
        <div>
          <h2 className="text-xl font-bold mb-3">Biznes</h2>
          <p className="text-sm text-gray-400">
            Biznesingizni rivojlantirish uchun ishonchli va innovatsion
            yechimlar.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Havolalar</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Bosh sahifa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Xizmatlar
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Biz haqimizda
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Bog‘lanish
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Aloqa</h3>
          <p className="text-sm text-gray-400">📍 Toshkent, O‘zbekiston</p>
          <p className="text-sm text-gray-400">📞 +998 90 123 45 67</p>
          <p className="text-sm text-gray-400">✉️ info@biznes.uz</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © 2025 Biznes. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
