import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface KineticTextProps {
    text: string;
    className?: string;
    direction?: 'left' | 'right';
}

const KineticText = ({ text, className = "", direction = 'left' }: KineticTextProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        direction === 'left' ? ["0%", "-20%"] : ["-20%", "0%"]
    );

    return (
        <div ref={ref} className="overflow-hidden whitespace-nowrap py-2">
            <motion.h2
                style={{ x }}
                className={`text-6xl md:text-9xl font-black uppercase tracking-tighter opacity-10 text-white ${className}`}
            >
                {text} {text} {text}
            </motion.h2>
        </div>
    );
};

export default KineticText;
