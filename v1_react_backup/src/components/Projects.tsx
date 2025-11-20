
import Section from './Section';
import { content } from '../data/content';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Projects = () => {
    return (
        <Section id="projects" className="bg-black/95">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-center">
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors flex flex-col"
                    >
                        <div className="p-8 flex flex-col h-full">
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs font-medium px-3 py-1 bg-white/5 rounded-full text-gray-300">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto">
                                {project.links.code && (
                                    <a
                                        href={project.links.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
                                    >
                                        <Github className="w-4 h-4" />
                                        View Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
