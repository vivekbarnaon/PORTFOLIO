import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('Uw3QpwEpK-JNfFgVe');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      // Using EmailJS send method with template parameters
      const templateParams = {
        from_name: formData.user_name,
        from_email: formData.user_email,
        to_name: 'Vivek Kumar',
        to_email: 'vivekbarnaon@gmail.com',
        message: formData.message,
      };

      await emailjs.send(
        'service_yjnvnxl', // Your service ID
        'template_yjnvnxl', // Your template ID
        templateParams,
        'Uw3QpwEpK-JNfFgVe' // Your public key
      );

      console.log('Email sent successfully!');

      // Reset form
      setFormData({
        user_name: '',
        user_email: '',
        message: '',
      });

      setSubmitSuccess(true);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitError(true);

      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'vivekbarnaon@gmail.com',
      link: 'mailto:vivekbarnaon@gmail.com',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 8102333910',
      link: 'tel:+918102333910',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Kolkata, West Bengal, India',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <FaGithub size={24} />, url: 'https://github.com/vivekbarnaon' },
    { icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/in/vivek-kumar-b04874289/' },
    { icon: <FaTwitter size={24} />, url: 'https://twitter.com/' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Feel free to reach out to me for any questions, opportunities, or just to say hello!
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-300 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{info.label}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-medium mb-4">Connect with me:</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                    {/* Icon */}
                    <div className="relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                      {link.icon}
                    </div>

                    {/* Tooltip */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 text-primary-500 dark:text-primary-400 text-xs font-medium py-1 px-2 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:-bottom-8 transition-all duration-300 whitespace-nowrap">
                      {link.url.includes('github') ? 'GitHub' :
                       link.url.includes('linkedin') ? 'LinkedIn' :
                       'Twitter'}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="glass p-8 rounded-2xl border border-gray-200/10 dark:border-gray-700/10 shadow-xl relative overflow-hidden group">
              {/* Animated Background Elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary-400/5 dark:bg-primary-600/5 animate-float" style={{ animationDuration: '15s' }}></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-secondary-400/5 dark:bg-secondary-600/5 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>

              {/* Animated Border */}
              <div className="absolute inset-0 border border-primary-300/10 dark:border-primary-700/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary-500 to-secondary-600 text-transparent bg-clip-text">Send Me a Message</h3>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Thank you for your message! I'll get back to you soon.
                </motion.div>
              )}

              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  There was an error sending your message. Please try again.
                </motion.div>
              )}

              <form ref={form} onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300/30 dark:border-gray-700/30 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      placeholder="Your email address"
                      className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300/30 dark:border-gray-700/30 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Your message"
                      className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300/30 dark:border-gray-700/30 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                    ></textarea>
                  </div>
                </div>

                {/* Hidden field for recipient */}
                <input type="hidden" name="to_email" value="vivekbarnaon@gmail.com" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white font-medium transition-all duration-300 disabled:opacity-70 shadow-lg shadow-primary-500/20 hover:shadow-xl overflow-hidden"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Animated Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>

                  {/* Button Content */}
                  <div className="relative z-10">
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <span>Send Message</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
