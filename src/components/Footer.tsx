import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="w-12 h-12 bg-slate-800/50 backdrop-blur-lg rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-teal-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
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

          <div className="flex items-center justify-center space-x-2 text-gray-300 mb-4">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by Amirhosein Moqaddasi</span>
          </div>

          <p className="text-gray-400 text-sm">
            © {currentYear} Amirhosein Moqaddasi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
