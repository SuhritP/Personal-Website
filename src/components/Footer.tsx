import { Github, Linkedin, Mail } from 'lucide-react';
import { content } from '../data/content';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 relative z-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Suhrit Padakanti. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <a
                        href={content.profile.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-indigo-400 transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href={content.profile.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-indigo-400 transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href={`mailto:${content.profile.socials.email}`}
                        className="text-gray-500 hover:text-indigo-400 transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
