
import { content } from '../data/content';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-gray-500 text-sm">
                    Designed & Built by {content.profile.name}
                </p>

                <div className="flex gap-6">
                    <a href={content.profile.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href={content.profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
