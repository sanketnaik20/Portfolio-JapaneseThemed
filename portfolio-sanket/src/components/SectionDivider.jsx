import React from 'react';
import { motion } from 'framer-motion';

// An animated SVG brush stroke separator
const SectionDivider = () => {
  return (
    <div style={{ width: '100%', height: '60px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '4rem 0' }}>
      <motion.svg 
        width="300" 
        height="20" 
        viewBox="0 0 300 20" 
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <path 
          d="M0,10 Q150,20 300,10" 
          stroke="var(--crimson)" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
};

export default SectionDivider;