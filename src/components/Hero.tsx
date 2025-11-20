import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { content } from '../data/content';
import { useEffect, useState } from 'react';

const ScrambleText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [display, setDisplay] = useState('');
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~';

    useEffect(() => {
        let iteration = 0;
        let interval: any;

        const startScramble = () => {
            interval = setInterval(() => {
                setDisplay(
                    text
                        .split('')
                        .map((_, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join('')
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        };

        const timeout = setTimeout(startScramble, delay * 1000);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text, delay]);

    return <span>{display}</span>;
};

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium text-indigo-400 mb-6 tracking-wide font-mono">
                        &gt; <ScrambleText text={`Hello, I'm ${content.profile.name.split(' ')[0]}`} delay={0.5} />
                    </h2>
                </motion.div>

                <div className="relative">
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9]">
                        <span className="block overflow-hidden text-gray-900 dark:text-white">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="block"
                            >
                                BUILDING
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="block"
                            >
                                THE FUTURE
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden text-gray-900 dark:text-white">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="block"
                            >
                                WITH CODE.
                            </motion.span>
                        </span>
                    </h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-light border-l-2 border-indigo-500 pl-6"
                >
                    <ScrambleText text={content.profile.title} delay={1.2} />
                    <br />
                    <span className="text-sm md:text-base mt-2 block opacity-70">
                        Cloud Infrastructure • AI Research • Full Stack
                    </span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="flex flex-wrap gap-6 items-center"
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-none overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-indigo-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative group-hover:text-white transition-colors flex items-center gap-2">
                            View My Work <ArrowRight className="w-5 h-5" />
                        </span>
                    </a>

                    <div className="flex gap-4">
                        {[
                            { icon: Github, href: content.profile.socials.github },
                            { icon: Linkedin, href: content.profile.socials.linkedin },
                            { icon: Mail, href: `mailto:${content.profile.socials.email}` }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-white/5 hover:bg-white/20 transition-colors border border-white/10"
                            >
                                <social.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
