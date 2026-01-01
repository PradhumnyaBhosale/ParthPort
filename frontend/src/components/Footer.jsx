import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Parth.dev
          </h3>
          <p className="text-gray-400 text-sm mt-1">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
        
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Built with</span>
          <FaHeart className="text-red-500 animate-pulse" />
          <span>using React, Node.js & AI</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
