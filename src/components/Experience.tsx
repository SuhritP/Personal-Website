import Section from './Section';
import { content } from '../data/content';
import { motion } from 'framer-motion';
import KineticText from './KineticText';

const Experience = () => {
    return (
        <Section id="experience" className="bg-transparent relative">
            <KineticText text="EXPERIENCE" direction="left" className="text-white" />

            <div className="max-w-5xl mx-auto px-6 py-20 relative">
                {/* Timeline Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent" />

                <div className="space-y-24">
                    {content.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-indigo-500 rounded-full -translate-x-1/2 mt-6 shadow-[0_0_20px_rgba(99,102,241,0.5)] z-10" />

                            <div className="md:w-1/2 pl-16 md:pl-0">
                                <div className={`relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl hover:bg-gray-800/70 transition-colors group ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                                    }`}>
                                    <span className="text-indigo-400 font-medium text-sm mb-3 block">
                                        {exp.date}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-1 text-white">{exp.title}</h3>
                                    <h4 className="text-base text-gray-400 mb-4">{exp.company}</h4>
                                    {exp.description && (
                                        <p className="text-gray-300 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
