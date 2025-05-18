import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import profileImage from '../../assets/Portfolio image.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800"></div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {/* Animated Circles */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDuration: '15s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-200 dark:bg-secondary-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-200 dark:bg-accent-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDuration: '25s', animationDelay: '1s' }}></div>

          {/* Additional Animated Elements */}
          <div className="absolute top-1/3 right-1/3 w-32 h-32 border-2 border-primary-300 dark:border-primary-700 rounded-full opacity-20 animate-rotate" style={{ animationDuration: '30s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-48 h-48 border-2 border-secondary-300 dark:border-secondary-700 rounded-full opacity-20 animate-rotate" style={{ animationDuration: '40s', animationDirection: 'reverse' }}></div>

          {/* Floating Particles */}
          <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary-400 rounded-full opacity-40 animate-float" style={{ animationDuration: '6s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-secondary-400 rounded-full opacity-40 animate-float" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 right-1/2 w-4 h-4 bg-accent-400 rounded-full opacity-40 animate-float" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/2 left-3/4 w-2 h-2 bg-primary-400 rounded-full opacity-40 animate-float" style={{ animationDuration: '9s', animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 right-3/4 w-3 h-3 bg-secondary-400 rounded-full opacity-40 animate-float" style={{ animationDuration: '10s', animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yNCAzMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTI0IDBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">


            <div className="relative">
              <span className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 text-sm font-medium mb-4">
                Full Stack Developer & AI Engineer
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
              <span className="block overflow-hidden">
                <span className="inline-block transform transition-transform duration-1000 animate-float" style={{ animationDelay: '0.2s' }}>Hello, I'm</span>
              </span>
              <div className="h-20 overflow-hidden relative">
                <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-transparent bg-clip-text animate-typing inline-block">Vivek Kumar</span>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 transform scale-x-0 animate-typing" style={{ transformOrigin: 'left', animationDelay: '1s', animationFillMode: 'forwards' }}></div>
              </div>
            </h1>

            <div className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-8 w-24"></div>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-10">
              Passionate about creating innovative solutions that solve real-world problems.
              Specializing in modern web technologies and artificial intelligence.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-medium flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <FaEnvelope /> Contact Me
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-primary-500 dark:text-primary-400 border border-primary-200 dark:border-primary-700 font-medium flex items-center justify-center gap-2 transition-colors shadow-lg hover:bg-primary-50 dark:hover:bg-gray-700 group"
              >
                <FaDownload className="group-hover:animate-bounce" /> View Resume
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 group">
              {/* Rotating Gradient Border - Outer Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 animate-rotate animate-pulse-glow"></div>

              {/* Second Rotating Layer (opposite direction) */}
              <div className="absolute inset-0 rounded-full bg-gradient-conic from-primary-300 via-secondary-300 to-accent-300 opacity-50 animate-rotate" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>

              {/* White Padding Layer */}
              <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-900"></div>

              {/* Profile Image Container */}
              <div className="absolute inset-3 rounded-full overflow-hidden transition-all duration-500 group-hover:inset-5">
                <img
                  src={profileImage}
                  alt="Vivek Kumar"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-3 rounded-full opacity-0 group-hover:opacity-30 bg-gradient-to-r from-primary-500 to-secondary-500 transition-opacity duration-500"></div>

              {/* Floating Particles */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary-400 opacity-70 animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-secondary-400 opacity-70 animate-float" style={{ animationDelay: '1.2s' }}></div>
              <div className="absolute top-1/4 -right-5 w-4 h-4 rounded-full bg-accent-400 opacity-70 animate-float" style={{ animationDelay: '0.8s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
