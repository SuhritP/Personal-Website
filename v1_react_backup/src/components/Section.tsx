import React from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`py-24 md:py-40 px-6 relative ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // Custom ease for "Apple-like" feel
                className="max-w-7xl mx-auto"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
