import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-sm text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-green-300 to-green-500 text-transparent bg-clip-text">
            Irudium
          </Link>
          <p className="text-gray-400">Transforming ideas into digital excellence</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-400"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-green-400"><Twitter className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/irudium.gs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-green-400"><Instagram className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/company/irudium/ " className="hover:text-green-400"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-green-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-400">About Us</Link></li>
            <li><Link to="/services" className="hover:text-green-400">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-green-400">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Full-Stack Development</li>
            <li>PC Building & Setup</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-white/10 border border-green-500/20 focus:border-green-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 rounded transition-colors"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Irudium. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;