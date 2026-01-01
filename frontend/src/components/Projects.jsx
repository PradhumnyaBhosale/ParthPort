import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const filters = ['All', 'AI / Computer Vision', 'AI / Human-Computer Interaction', 'Web Development'];

  useEffect(() => {
    // Fetch projects from backend
    const fetchProjects = async () => {
      try {
        // Using relative path assuming proxy or direct url in dev
        // For now hardcoding localhost
        const res = await axios.get('/api/projects');
        if (res.data.success) {
          setProjects(res.data.data);
          setFilteredProjects(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback data if API fails
        setProjects([
           {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-featured e-commerce platform built with MERN stack.',
            techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
            category: 'Full Stack',
            image: 'https://via.placeholder.com/600x400',
            liveLink: '#',
            githubLink: '#',
            details: 'Detailed description here...'
          }
        ]);
        setFilteredProjects([
           {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-featured e-commerce platform built with MERN stack.',
            techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
            category: 'Full Stack',
            image: 'https://via.placeholder.com/600x400',
            liveLink: '#',
            githubLink: '#',
            details: 'Detailed description here...'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === filter));
    }
  }, [filter, projects]);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  filter === f
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {loading ? (
           <div className="flex justify-center items-center h-64">
             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
           </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a href={project.githubLink} className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary hover:text-white transition-colors">
                        <FaGithub size={20} />
                      </a>
                      <a href={project.liveLink} className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary hover:text-white transition-colors">
                        <FaExternalLinkAlt size={18} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-primary rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredProjects.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <p className="text-gray-500 dark:text-gray-400 text-lg">No projects found for this category.</p>
              </div>
            )}
          </motion.div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="bg-white dark:bg-gray-800 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
                
                <div className="h-64 sm:h-80 overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{selectedProject.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    {selectedProject.details || selectedProject.description}
                  </p>
                  
                  <div className="mb-8">
                     <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                     <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 bg-primary hover:bg-blue-600 text-white rounded-xl font-bold text-center transition-colors flex items-center justify-center gap-2"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 border-2 border-gray-200 dark:border-gray-700 hover:border-primary text-gray-900 dark:text-white rounded-xl font-bold text-center transition-all flex items-center justify-center gap-2"
                    >
                      <FaGithub size={20} /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
