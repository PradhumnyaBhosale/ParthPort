import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Skills = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const fetchCerts = async () => {
      try {
        const res = await axios.get('/api/certifications');
        if (res.data.success) {
          setCertifications(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching certifications:", error);
      }
    };
    fetchCerts();
  }, []);

  const skills = {
    "Programming Languages": [
      { name: 'C/C++', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 80 },
    ],
    "Web Technologies": [
      { name: 'React.js', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'SQL', level: 80 },
    ],
    "Tools & Concepts": [
      { name: 'Git/GitHub', level: 85 },
      { name: 'Jira', level: 75 },
      { name: 'Data Structures', level: 85 },
      { name: 'Algorithms', level: 80 },
    ]
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-2">
                {category}
              </h3>
              <div className="space-y-4">
                {items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-primary h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 px-6 py-4 rounded-full shadow-md border border-gray-100 dark:border-gray-700 flex items-center gap-2"
              >
                <span className="font-semibold text-primary">{cert.name}</span>
                <span className="text-sm text-gray-500">({cert.date})</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
