import React from 'react';
import { Code, Palette, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing interfaces',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimizing for speed and user experience',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            About <span className="text-teal-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate frontend developer with expertise in modern web technologies. 
                I love creating beautiful, functional, and user-friendly web applications that 
                provide exceptional user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With a strong foundation in React, TypeScript, and modern CSS frameworks, 
                I bring ideas to life through clean code and thoughtful design. I'm always 
                eager to learn new technologies and stay up-to-date with industry trends.
              </p>
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Let's Work Together
                </a>
              </div>
            </div>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-teal-400 group-hover:text-teal-300 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;