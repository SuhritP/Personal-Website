import Section from './Section';
import { content } from '../data/content';

const Contact = () => {
    return (
        <Section id="contact" className="min-h-[50vh] flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter text-white">
                    LET'S TALK
                </h2>
                <a
                    href={`mailto:${content.profile.socials.email}`}
                    className="inline-block px-12 py-6 bg-white text-black font-bold text-xl hover:scale-105 transition-transform duration-300 rounded-full"
                >
                    Say Hello
                </a>
            </div>
        </Section>
    );
};

export default Contact;
