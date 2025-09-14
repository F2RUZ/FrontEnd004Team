import React from 'react';

export default function SkillsSection() {
  const skills = [
    { name: 'HTML', level: 90, color: 'bg-orange-500' },
    { name: 'CSS', level: 85, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 80, color: 'bg-yellow-400' },
    { name: 'React', level: 75, color: 'bg-cyan-500' },
    { name: 'Tailwind', level: 70, color: 'bg-teal-400' }
  ];

  return (
    <section className="py-20 bg-gray-50" aria-label="skills">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Ko‘nikmalarim</h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Quyida mening texnologiyalar bo‘yicha darajamni ko‘rsatadigan grafiklar mavjud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-3 ${skill.color} rounded-full transition-all duration-700`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
