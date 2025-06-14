import React from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import ProfileImg from "../assets/Profile.jpg";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-teal-400 to-blue-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl animate-fade-in">
            <img
              src={ProfileImg}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Frontend
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Developer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-200">
            Crafting beautiful, responsive web experiences with modern
            technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-300">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-teal-400 text-teal-400 font-semibold rounded-full hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up delay-400">
            <a
              href="https://github.com/Moqaddasi"
              className="w-12 h-12 bg-slate-800/50 backdrop-blur-lg rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-teal-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/amirhoseinmoqaddasi/"
              className="w-12 h-12 bg-slate-800/50 backdrop-blur-lg rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#contact"
              className="w-12 h-12 bg-slate-800/50 backdrop-blur-lg rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-orange-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
