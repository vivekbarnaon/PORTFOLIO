import { motion } from 'framer-motion';
import { FaUser, FaCode, FaLaptopCode, FaBrain, FaGraduationCap, FaRocket } from 'react-icons/fa';
import profileImage from '../../assets/Portfolio image.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-gray-900 dark:to-gray-800"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yNCAzMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTI0IDBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')]"></div>

      {/* Animated Shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDuration: '15s' }}></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 text-transparent bg-clip-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Profile Image - Takes 5 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 animate-rotate animate-pulse-glow"></div>

              {/* Profile Image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transition-all duration-500 group-hover:scale-[1.03]">
                <img
                  src={profileImage}
                  alt="Vivek Kumar"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-5 right-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-500 dark:text-primary-400 shadow-lg transform translate-x-1/2 animate-float" style={{ animationDuration: '6s' }}>
                <FaCode size={20} />
              </div>
              <div className="absolute bottom-5 left-0 w-12 h-12 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center text-secondary-500 dark:text-secondary-400 shadow-lg transform -translate-x-1/2 animate-float" style={{ animationDuration: '8s', animationDelay: '1s' }}>
                <FaBrain size={20} />
              </div>
            </div>
          </motion.div>

          {/* Content - Takes 7 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            {/* About Me Header */}
            <div className="mb-2">
              <div className="flex items-center space-x-3 mb-2">
                <div className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 w-12 rounded-full"></div>
                <span className="text-lg text-gray-700 dark:text-gray-300 font-medium bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">Full Stack Developer & AI Engineer</span>
              </div>
            </div>

            {/* Main Description */}
            <div className="glass p-6 rounded-xl border border-gray-200/10 dark:border-gray-700/10 shadow-lg relative overflow-hidden group">
              {/* Animated Border on Hover */}
              <div className="absolute inset-0 border border-primary-300/20 dark:border-primary-700/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a passionate Full Stack Developer and AI Engineer with a strong interest in building
                innovative solutions that solve real-world problems. Currently pursuing my B.Tech in
                <span className="font-medium"> Computer Science and Engineering with Artificial Intelligence and Machine Learning </span>
                at Heritage Institute of Technology, Kolkata. I am constantly exploring new technologies and frameworks
                to enhance my skills in both web development and AI domains.
              </p>
            </div>

            {/* Career Objective */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl border border-gray-200/10 dark:border-gray-700/10 shadow-lg relative overflow-hidden group"
            >
              {/* Animated Border on Hover */}
              <div className="absolute inset-0 border border-primary-300/20 dark:border-primary-700/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary-400/5 dark:bg-primary-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse-glow"></div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex-shrink-0 flex items-center justify-center text-white">
                  <FaRocket size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">Career Objective</h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Innovative and results-driven Full Stack Developer & AI Engineer
                    with a strong passion for building intelligent solutions and scalable
                    applications. Seeking an opportunity to contribute to impactful
                    projects in AI and Web Development, while continuously growing
                    my skills and advancing my career in cutting-edge technologies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="glass p-4 rounded-xl border border-gray-200/10 dark:border-gray-700/10 shadow-lg flex items-center space-x-3 group hover:bg-primary-50/50 dark:hover:bg-primary-900/10 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-500 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                  <FaLaptopCode size={18} />
                </div>
                <div>
                  <h5 className="font-medium">Full Stack Development</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">React, Node.js, Python</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="glass p-4 rounded-xl border border-gray-200/10 dark:border-gray-700/10 shadow-lg flex items-center space-x-3 group hover:bg-secondary-50/50 dark:hover:bg-secondary-900/10 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center text-secondary-500 dark:text-secondary-400 group-hover:scale-110 transition-transform duration-300">
                  <FaBrain size={18} />
                </div>
                <div>
                  <h5 className="font-medium">AI Engineering</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Machine Learning, NLP, Computer Vision</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
                className="glass p-4 rounded-xl border border-gray-200/10 dark:border-gray-700/10 shadow-lg flex items-center space-x-3 group hover:bg-accent-50/50 dark:hover:bg-accent-900/10 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center text-accent-500 dark:text-accent-400 group-hover:scale-110 transition-transform duration-300">
                  <FaGraduationCap size={18} />
                </div>
                <div>
                  <h5 className="font-medium">Education</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">B.Tech, CSE AIML</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                viewport={{ once: true }}
                className="glass p-4 rounded-xl border border-gray-200/10 dark:border-gray-700/10 shadow-lg flex items-center space-x-3 group hover:bg-primary-50/50 dark:hover:bg-primary-900/10 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-500 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                  <FaRocket size={18} />
                </div>
                <div>
                  <h5 className="font-medium">Problem Solver</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Innovative & Results-driven</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
