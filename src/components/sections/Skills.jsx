import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDatabase
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiVite,
  SiTypescript
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: <FaReact size={40} className="text-blue-500" /> },
        { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-500" /> },
        { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-400" /> },
        { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-teal-500" /> },
        { name: 'TypeScript', icon: <SiTypescript size={40} className="text-blue-600" /> },
        { name: 'Vite', icon: <SiVite size={40} className="text-purple-500" /> },
      ],
    },
    {
      id: 2,
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" /> },
        { name: 'Express.js', icon: <SiExpress size={40} className="text-gray-500" /> },
        { name: 'Python', icon: <FaPython size={40} className="text-blue-500" /> },
        { name: 'FastAPI', icon: <SiFastapi size={40} className="text-teal-500" /> },
        { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-600" /> },
        { name: 'SQL', icon: <FaDatabase size={40} className="text-blue-400" /> },
      ],
    },
    {
      id: 3,
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt size={40} className="text-orange-600" /> },
        { name: 'RESTful APIs', icon: <FaDatabase size={40} className="text-indigo-500" /> },
      ],
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold mb-6 text-center"
              >
                {category.title}
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1.05, boxShadow: "0 15px 30px -10px rgba(20, 184, 166, 0.3)" }}
                    className="glass p-6 rounded-xl flex flex-col items-center justify-center text-center border border-gray-200/10 dark:border-gray-700/10 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
                  >
                    {/* Background Gradient Animation */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-all duration-700 group-hover:duration-500"></div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 border border-primary-300/20 dark:border-primary-700/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Animated Glow */}
                    <div className="absolute inset-0 bg-primary-400/5 dark:bg-primary-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse-glow"></div>

                    {/* Icon with Animation */}
                    <div className="relative z-10 mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      {skill.icon}
                    </div>

                    {/* Skill Name */}
                    <p className="font-medium relative z-10 transition-all duration-500 group-hover:text-primary-600 dark:group-hover:text-primary-400">{skill.name}</p>

                    {/* Animated Corner Dots */}
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-400 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-secondary-400 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 animate-pulse"></div>

                    {/* Animated Particles */}
                    <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-primary-400 opacity-0 group-hover:opacity-70 transition-all duration-300 group-hover:transform group-hover:translate-y-3 group-hover:translate-x-2"></div>
                    <div className="absolute bottom-1/2 left-1/4 w-1 h-1 rounded-full bg-secondary-400 opacity-0 group-hover:opacity-70 transition-all duration-300 delay-100 group-hover:transform group-hover:translate-y-3 group-hover:translate-x-2"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
