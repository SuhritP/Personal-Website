import Section from './Section';
import { content } from '../data/content';
import { motion } from 'framer-motion';
import KineticText from './KineticText';

const Skills = () => {
    return (
        <Section id="skills" className="bg-transparent relative">
            <KineticText text="SKILLS" direction="left" className="text-white" />

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Languages */}
                    <div>
                        <h3 className="text-2xl font-mono text-indigo-400 mb-8 border-b border-indigo-500/30 pb-4 inline-block">
                            &lt;Languages /&gt;
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {content.skills.languages.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                                    className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 transition-all cursor-crosshair rounded-lg"
                                >
                                    <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-4 opacity-80" />
                                    <span className="text-sm font-medium tracking-wider text-gray-200">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Technologies */}
                    <div>
                        <h3 className="text-2xl font-mono text-indigo-400 mb-8 border-b border-indigo-500/30 pb-4 inline-block">
                            &lt;Technologies /&gt;
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {content.skills.technologies.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                                    className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 transition-all cursor-crosshair rounded-lg"
                                >
                                    <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-4 opacity-80" />
                                    <span className="text-sm font-medium tracking-wider text-gray-200">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Skills;
