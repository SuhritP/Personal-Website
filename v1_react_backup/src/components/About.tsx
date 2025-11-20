import Section from './Section';
import { content } from '../data/content';

const About = () => {
    return (
        <Section id="about" className="bg-transparent">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">
                    About Me
                </h2>
                <div className="space-y-8 text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                    {content.about.description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default About;
