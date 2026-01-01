import { motion } from 'framer-motion';
import { FaDownload, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Technologies', value: '15+' },
  ];

  const highlights = [
    { icon: <FaCode />, title: 'Passionate Coder', desc: 'Writing clean, efficient code is my therapy.' },
    { icon: <FaLightbulb />, title: 'Problem Solver', desc: 'I love tackling complex challenges.' },
    { icon: <FaRocket />, title: 'Fast Learner', desc: 'Always executing on the bleeding edge of tech.' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image & Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-96 relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Profile"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary rounded-2xl z-0 hidden md:block"></div>
          </motion.div>

          {/* Right Side - Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              I'm an IT Student & developer based in Pune, India.
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I am currently pursuing my B.Tech. in Information Technology at JSPM Rajarshi Shahu College of Engineering, Tathawade. I have a passion for building professional applications and exploring computer vision using Python and OpenCV. I've also contributed as a Frontend Developer for The Mother Global Foundation (NGO), working with React.js and Vite.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, you can find me playing Cricket or Volleyball, or participating in tech community events.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl hover:border-primary transition-colors">
                  <div className="text-primary text-xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-sm dark:text-white">{item.title}</h4>
                </div>
              ))}
            </div>

            <a 
              href="https://drive.google.com/file/d/1H6oJZxH1nDUdEuylWRgaWdAtRAezI3bn/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-colors shadow-lg hover:shadow-xl">
                <FaDownload /> Download Resume
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
