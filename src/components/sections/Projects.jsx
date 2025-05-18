import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Smart Scanner App',
      description: 'A mobile application that uses OCR technology to scan and digitize documents with AI-powered text recognition.',
      techStack: ['FastAPI', 'React Native', 'TensorFlow', 'OCR'],
      image: '/images/smart-scanner.jpg',
      github: 'https://github.com/yourusername/smart-scanner',
      demo: 'https://smart-scanner-demo.com',
    },
    {
      id: 2,
      title: 'B11 Fitness',
      description: 'A comprehensive fitness tracking platform with personalized workout plans and nutrition guidance.',
      techStack: ['React.js', 'Node.js', 'Express', 'MongoDB'],
      image: '/images/fitness-app.jpg',
      github: 'https://github.com/yourusername/b11-fitness',
      demo: 'https://b11fitness.com',
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'A responsive weather application that provides real-time weather forecasts, hourly updates, and 7-day predictions with interactive maps and location-based services.',
      techStack: ['React.js', 'OpenWeather API', 'Tailwind CSS', 'Geolocation API'],
      image: '/images/weather-app.jpg',
      github: 'https://github.com/vivekbarnaon/WeatherApp.git',
      demo: 'https://v0-weather-app-golwicepwcp.vercel.app/',
    },
    {
      id: 4,
      title: 'Virtual Assistant',
      description: 'A command-line virtual assistant that can perform various tasks like setting reminders, searching the web, and more.',
      techStack: ['Python', 'NLP', 'Speech Recognition', 'APIs'],
      image: '/images/virtual-assistant.jpg',
      github: 'https://github.com/vivekbarnaon/Virtual_Assistant.git',
      demo: null,
    },
    {
      id: 5,
      title: 'Mental Health Assessment Tool',
      description: 'A web application that provides mental health assessments and resources for users seeking support.',
      techStack: ['Python', 'React.js', 'Flask', 'SQLite'],
      image: '/images/mental-health.jpg',
      github: 'https://github.com/vivekbarnaon/Mind-recommend.git',
      demo: 'https://mind-recommend.vercel.app/',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -15px rgba(0, 0, 0, 0.1)" }}
              className="glass rounded-2xl overflow-hidden shadow-xl border border-gray-200/10 dark:border-gray-700/10 group relative cursor-pointer"
              onClick={() => window.open(project.demo || project.github, '_blank')}
            >
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 opacity-0 group-hover:opacity-30 transition-all duration-700 -z-10 blur-sm group-hover:blur"></div>

              {/* Animated Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary-400/5 dark:bg-primary-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse-glow"></div>

              <div className="relative overflow-hidden h-56">
                {/* Animated Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Animated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end transform transition-transform duration-500 translate-y-0 group-hover:translate-y-0">
                  <div className="p-6 w-full transform transition-transform duration-500 translate-y-0 group-hover:translate-y-0">
                    {/* Project Title with Animation */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white mb-2 transform transition-all duration-500 group-hover:text-primary-300 group-hover:translate-x-2">{project.title}</h3>
                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <FaExternalLinkAlt className="text-white text-sm" />
                      </div>
                    </div>

                    {/* Tech Stack Tags with Animation */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium transform transition-transform duration-300 hover:scale-105 hover:bg-primary-500/40"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.techStack.length > 3 && (
                        <motion.span
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium transform transition-transform duration-300 hover:scale-105 hover:bg-secondary-500/40"
                        >
                          +{project.techStack.length - 3} more
                        </motion.span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-6 h-20 sm:h-24 overflow-y-auto text-sm sm:text-base">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4 hidden">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-between">
                  <div className="flex gap-3 sm:gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 sm:gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm"
                    >
                      <FaGithub /> Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 sm:gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>

                  <a
                    href={project.demo || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 sm:mt-0 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white text-sm font-medium transition-all duration-300 w-full sm:w-auto text-center relative overflow-hidden group"
                  >
                    <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {project.demo ? <FaExternalLinkAlt className="inline-block" /> : <FaGithub className="inline-block" />}
                      {project.demo ? 'Live Demo' : 'View Project'}
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
