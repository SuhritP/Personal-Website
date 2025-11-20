import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { content } from '../data/content';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black z-0" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="text-xl md:text-2xl font-medium text-blue-400 mb-6 tracking-wide">
                        Hello, I'm {content.profile.name.split(' ')[0]}
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50"
                >
                    Building the future <br /> with code.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                >
                    {content.profile.title}. <br />
                    Passionate about cloud infrastructure, AI, and scalable web applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="#projects"
                        className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
                    >
                        View My Work
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="flex gap-4 mt-4 md:mt-0 md:ml-4">
                        <a href={content.profile.socials.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/20 transition-all hover:scale-110 border border-white/10">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href={content.profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/20 transition-all hover:scale-110 border border-white/10">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href={`mailto:${content.profile.socials.email}`} className="p-4 bg-white/5 rounded-full hover:bg-white/20 transition-all hover:scale-110 border border-white/10">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: '6rem' }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"
            />
        </section>
    );
};

export default Hero;
