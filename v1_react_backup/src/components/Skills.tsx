import Section from './Section';
import { content } from '../data/content';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Skills = () => {
    return (
        <Section id="skills" className="bg-transparent">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-center">
                Technical Skills
            </h2>

            <div className="space-y-20">
                {/* Languages */}
                <div>
                    <h3 className="text-xl font-medium text-gray-400 mb-10 text-center uppercase tracking-widest text-sm">Languages</h3>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
                    >
                        {content.skills.languages.map((skill) => (
                            <motion.div
                                key={skill.name}
                                variants={item}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group"
                            >
                                <div className="w-12 h-12 mb-3 flex items-center justify-center p-2 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                                </div>
                                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Technologies */}
                <div>
                    <h3 className="text-xl font-medium text-gray-400 mb-10 text-center uppercase tracking-widest text-sm">Technologies & Tools</h3>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
                    >
                        {content.skills.technologies.map((skill) => (
                            <motion.div
                                key={skill.name}
                                variants={item}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group"
                            >
                                <div className="w-12 h-12 mb-3 flex items-center justify-center p-2 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                                </div>
                                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default Skills;
