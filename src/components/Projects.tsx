import Section from './Section';
import { content } from '../data/content';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import KineticText from './KineticText';

const Projects = () => {
    return (
        <Section id="projects" className="bg-transparent relative">
            <KineticText text="PROJECTS" direction="right" className="text-white" />

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="space-y-32">
                    {content.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="group relative"
                        >
                            <div className="flex flex-col md:flex-row gap-12 items-start">
                                <div className="md:w-1/3">
                                    <span className="text-9xl font-black text-white/5 absolute -top-20 -left-10 select-none -z-10">
                                        0{index + 1}
                                    </span>
                                    <h3 className="text-4xl md:text-6xl font-bold mb-6 leading-none group-hover:text-indigo-400 transition-colors text-white">
                                        {project.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 text-xs font-mono border border-white/20 rounded-full text-gray-400">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-6">
                                        <a
                                            href={project.links.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-lg font-medium text-gray-200 hover:text-indigo-400 transition-colors"
                                        >
                                            <Github className="w-5 h-5" /> Code
                                        </a>
                                    </div>
                                </div>

                                <div className="md:w-2/3 relative">
                                    <div className="absolute -inset-4 bg-indigo-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative bg-white/5 border border-white/10 p-8 md:p-12 backdrop-blur-md rounded-xl">
                                        <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                                            {project.description}
                                        </p>
                                        <ArrowUpRight className="absolute top-6 right-6 w-8 h-8 text-white/20 group-hover:text-indigo-400 group-hover:rotate-45 transition-all" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Projects;
