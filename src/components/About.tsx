import Section from './Section';
import { content } from '../data/content';
import KineticText from './KineticText';

const About = () => {
    return (
        <Section id="about" className="bg-transparent py-0!">
            <KineticText text="ABOUT ME" direction="left" className="text-white" />

            <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
                <div className="space-y-12 text-2xl md:text-4xl font-light leading-tight">
                    {content.about.description.map((paragraph, index) => (
                        <p key={index} className="text-gray-200">
                            <span className="text-indigo-400 font-mono text-sm block mb-2">0{index + 1} //</span>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default About;
