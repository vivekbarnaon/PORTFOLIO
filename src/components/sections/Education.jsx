import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'B.Tech',
      institution: 'Heritage Institute of Technology, Kolkata',
      duration: '2023 - 2027',
      icon: <FaGraduationCap size={24} />,
      description: 'Currently pursuing Bachelor of Technology with a focus on Computer Science and Engineering.',
    },
    {
      id: 2,
      degree: '10+2',
      institution: 'Swarath Sahu +2 High School',
      duration: '2021 - 2023',
      icon: <FaSchool size={24} />,
      percentage: '70%',
      description: 'Completed higher secondary education with a focus on Science and Mathematics.',
    },
    {
      id: 3,
      degree: '10th',
      institution: 'MD Carmel School',
      duration: '2020 - 2021',
      icon: <FaSchool size={24} />,
      percentage: '75%',
      description: 'Completed secondary education with distinction in Science and Mathematics.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-secondary-600"></div>

            {/* Timeline Items */}
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`flex flex-col md:flex-row mb-16 relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-4 border-primary-500 z-10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary-500 animate-pulse"></div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 ml-10 md:ml-0 md:px-8">
                  <div className="glass p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center text-white mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-primary-500 to-secondary-600 text-transparent bg-clip-text">{item.degree}</h3>
                        <h4 className="text-lg font-semibold">{item.institution}</h4>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full inline-block">
                      <FaCalendarAlt className="mr-2 text-primary-500" />
                      <span>{item.duration}</span>
                    </div>

                    {item.percentage && (
                      <div className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Percentage:</span>
                          <span className="text-primary-500 font-bold">{item.percentage}</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className="bg-gradient-to-r from-primary-500 to-secondary-600 h-2.5 rounded-full"
                            style={{ width: item.percentage }}
                          ></div>
                        </div>
                      </div>
                    )}

                    <p className="text-gray-700 dark:text-gray-300 border-l-4 border-primary-500 pl-4 py-2">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
