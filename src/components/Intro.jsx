import React from 'react';

export default function Intro({
  name = 'Ismingiz',
  title = 'Frontend Developer',
  description = 'Men zamonaviy, responsiv va tezkor veb-interfeyslar yarataman. React + Tailwind bilan ishlab chiqaman.',
  ctaText = 'Portfolio',
  ctaHref = '#portfolio',
  secondaryText = 'Bog\'lanish',
  secondaryHref = '#contact'
}) {
  return (
    <section className="min-h-screen flex items-center" aria-label="intro">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left: text */}
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-400">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-lg" />
              Online
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              {"Salom, men "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-500 to-yellow-400">
                {name}
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">{title}</h2>

            <p className="text-gray-600 max-w-xl">{description}</p>

            <div className="flex flex-wrap gap-3 items-center">
              <a
                href={ctaHref}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-semibold transition-shadow shadow-md"
              >
                {ctaText}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a href={secondaryHref} className="text-sm font-medium text-gray-700 hover:underline">
                {secondaryText}
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-3">
              <a href="#" aria-label="github" className="group">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="transition-transform transform group-hover:-translate-y-1">
                  <path d="M12 .5C5.73.5.95 5.28.95 11.57c0 4.72 3.07 8.72 7.33 10.14.54.1.73-.24.73-.53 0-.26-.01-1.12-.02-2.03-2.98.65-3.61-1.44-3.61-1.44-.49-1.24-1.2-1.57-1.2-1.57-.98-.67.07-.66.07-.66 1.08.08 1.64 1.11 1.64 1.11.96 1.64 2.52 1.17 3.13.9.1-.7.38-1.17.69-1.44-2.38-.27-4.88-1.19-4.88-5.29 0-1.17.42-2.12 1.11-2.87-.11-.27-.48-1.36.1-2.83 0 0 .9-.29 2.95 1.09A10.2 10.2 0 0 1 12 6.8c.91.01 1.83.12 2.69.36 2.05-1.38 2.95-1.09 2.95-1.09.58 1.47.21 2.56.1 2.83.69.75 1.11 1.7 1.11 2.87 0 4.11-2.51 5.01-4.9 5.28.39.34.73 1.02.73 2.06 0 1.48-.01 2.67-.01 3.03 0 .29.19.64.74.53C19.96 20.28 23 16.28 23 11.57 23 5.28 18.27.5 12 .5z" fill="currentColor" />
                </svg>
              </a>

              <a href="#" aria-label="linkedin" className="group">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="transition-transform transform group-hover:-translate-y-1">
                  <path d="M4.98 3.5a2.5 2.5 0 11.02 0zM3 8.5h4v12H3zM8.5 8.5h3.78v1.64h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07v6.34h-4v-5.63c0-1.34-.02-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.95v5.74h-4z" fill="currentColor" />
                </svg>
              </a>

              <a href="#" aria-label="twitter" className="group">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="transition-transform transform group-hover:-translate-y-1">
                  <path d="M23 4.56c-.8.35-1.66.58-2.56.69a4.48 4.48 0 0 0-7.64 4.09A12.7 12.7 0 0 1 3.15 3.6a4.48 4.48 0 0 0 1.39 5.98c-.7-.02-1.36-.21-1.94-.53v.05c0 2.14 1.52 3.93 3.55 4.34-.37.1-.76.13-1.16.05.33 1.03 1.28 1.78 2.4 1.8A8.99 8.99 0 0 1 1.5 19.54 12.68 12.68 0 0 0 7.29 21c8.8 0 13.62-7.28 13.62-13.59v-.62A9.8 9.8 0 0 0 23 4.56z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl p-1 bg-gradient-to-br from-green-400 to-yellow-300 shadow-2xl">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
                  <div className="h-56 flex items-center justify-center bg-gray-50 rounded-lg">
                    {/* Simple hero illustration (SVG) */}
                    <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="100%" stopColor="#FBBF24" />
                        </linearGradient>
                      </defs>
                      <rect x="10" y="20" width="180" height="130" rx="16" fill="url(#g)" />
                      <circle cx="60" cy="80" r="18" fill="#fff" opacity="0.9" />
                      <circle cx="140" cy="80" r="18" fill="#fff" opacity="0.9" />
                      <path d="M30 150 Q100 110 170 150" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" />
                    </svg>
                  </div>

                  <div className="mt-6 text-sm text-gray-600">Kichik kart: loyiha, tez, responsiv.</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
