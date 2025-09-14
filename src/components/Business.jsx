import React from "react";

const services = [
  {
    icon: "💼",
    title: "Professional Services",
    desc: "Biznesingiz uchun sifatli va ishonchli xizmatlar taqdim etamiz.",
  },
  {
    icon: "👥",
    title: "Team Collaboration",
    desc: "Jamoangiz bilan samarali ishlash imkoniyatlarini yarating.",
  },
  {
    icon: "📈",
    title: "Business Growth",
    desc: "Strategiya va innovatsiya orqali tezkor o‘sishga erishing.",
  },
];

const Business = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Biznes Xizmatlarimiz
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Biz sizning kompaniyangizni keyingi bosqichga olib chiqish uchun
          innovatsion va ishonchli biznes yechimlarini taqdim etamiz.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4 text-5xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
