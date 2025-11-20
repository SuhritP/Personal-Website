
import Section from './Section';
import { content } from '../data/content';
import { Mail } from 'lucide-react';

const Contact = () => {
    return (
        <Section id="contact" className="bg-black text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                    Get In Touch
                </h2>
                <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                    I'm always open to discussing new opportunities, interesting projects, or potential collaborations. Whether you have a question about my work or want to connect, feel free to reach out!
                </p>

                <a
                    href={`mailto:${content.profile.socials.email}`}
                    className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
                >
                    <Mail className="w-5 h-5" />
                    Say Hello
                </a>
            </div>
        </Section>
    );
};

export default Contact;
