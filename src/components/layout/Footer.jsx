import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub size={20} />, url: 'https://github.com/vivekbarnaon' },
    { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/vivek-kumar-b04874289/' },
    { icon: <FaTwitter size={20} />, url: 'https://twitter.com/' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-sm mr-3">
              <span>VK</span>
            </div>
            <div>
              <span className="text-xl font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 text-transparent bg-clip-text">Vivek Kumar</span>
            </div>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-xl flex items-center justify-center transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                {/* Icon */}
                <div className="relative z-10 text-primary-500 dark:text-primary-400 group-hover:text-white transition-colors duration-300">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Vivek Kumar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
