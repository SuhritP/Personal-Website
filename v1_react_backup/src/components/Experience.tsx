
import Section from './Section';
import { content } from '../data/content';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <Section id="experience" className="bg-black/95">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-center">
                Experience
            </h2>

            <div className="max-w-3xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 transform md:-translate-x-1/2" />

                <div className="space-y-12">
                    {content.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 top-0 w-2.5 h-2.5 bg-blue-500 rounded-full transform md:-translate-x-1/2 z-10 ring-4 ring-black" />

                            <div className="flex-1 md:w-1/2 pl-8 md:pl-0">
                                <div className={`bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                    }`}>
                                    <span className="text-blue-400 text-sm font-mono mb-2 block">
                                        {exp.date}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {exp.title}
                                    </h3>
                                    <p className="text-gray-400 font-medium mb-4">
                                        {exp.company}
                                    </p>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>

                            {/* Empty space for the other side */}
                            <div className="hidden md:block flex-1" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
