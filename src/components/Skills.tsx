import React from 'react';
import { Code, Database, Globe, Palette, Server, Smartphone, Terminal, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'React/Next.js', level: 'Expert' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'JavaScript (ES6+)', level: 'Expert' },
        { name: 'HTML5 & CSS3', level: 'Expert' },
      ]
    },
    {
      title: 'Styling & Design',
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'Sass/SCSS', level: 'Advanced' },
        { name: 'Responsive Design', level: 'Expert' },
        { name: 'CSS-in-JS', level: 'Intermediate' },
      ]
    },
    {
      title: 'Backend & Database',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'PostgreSQL', level: 'Intermediate' },
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: <Terminal className="w-6 h-6" />,
      skills: [
        { name: 'Git & GitHub', level: 'Advanced' },
        { name: 'Docker', level: 'Intermediate' },
        { name: 'AWS', level: 'Intermediate' },
        { name: 'Webpack/Vite', level: 'Advanced' },
      ]
    }
  ];

  const technologies = [
    { name: 'React', icon: <Code className="w-5 h-5" /> },
    { name: 'TypeScript', icon: <Code className="w-5 h-5" /> },
    { name: 'Next.js', icon: <Zap className="w-5 h-5" /> },
    { name: 'Tailwind CSS', icon: <Palette className="w-5 h-5" /> },
    { name: 'Node.js', icon: <Server className="w-5 h-5" /> },
    { name: 'MongoDB', icon: <Database className="w-5 h-5" /> },
    { name: 'PostgreSQL', icon: <Database className="w-5 h-5" /> },
    { name: 'Docker', icon: <Terminal className="w-5 h-5" /> },
    { name: 'AWS', icon: <Globe className="w-5 h-5" /> },
    { name: 'Figma', icon: <Palette className="w-5 h-5" /> },
    { name: 'Git', icon: <Terminal className="w-5 h-5" /> },
    { name: 'Responsive Design', icon: <Smartphone className="w-5 h-5" /> },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-emerald-500';
      case 'Advanced':
        return 'bg-blue-500';
      case 'Intermediate':
        return 'bg-amber-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getLevelDots = (level: string) => {
    const dots = level === 'Expert' ? 4 : level === 'Advanced' ? 3 : 2;
    return Array.from({ length: 4 }, (_, i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full ${
          i < dots ? getLevelColor(level) : 'bg-slate-700'
        }`}
      />
    ));
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Skills & <span className="text-teal-400">Expertise</span>
          </h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise in modern web development.
          </p>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-teal-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          skill.level === 'Expert' 
                            ? 'bg-emerald-500/20 text-emerald-400' 
                            : skill.level === 'Advanced'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-amber-500/20 text-amber-400'
                        }`}>
                          {skill.level}
                        </span>
                        <div className="flex space-x-1">
                          {getLevelDots(skill.level)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technology Stack */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-slate-800/30 backdrop-blur-lg border border-slate-700/30 rounded-lg hover:border-teal-500/50 hover:bg-slate-800/50 transition-all duration-300 group"
                >
                  <div className="text-teal-400 group-hover:text-teal-300 transition-colors">
                    {tech.icon}
                  </div>
                  <span className="text-gray-300 font-medium text-sm">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 backdrop-blur-lg rounded-xl p-8 border border-teal-500/20">
              <h3 className="text-xl font-bold text-white mb-4">
                Professional Focus
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Specialized in building scalable, performant web applications with modern JavaScript frameworks. 
                Passionate about creating exceptional user experiences through clean code, thoughtful design, 
                and cutting-edge technologies. Always staying current with industry trends and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;