import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

type ContainerProps = {
  designation: string | null;
  className?: string;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
};

const Designation = ({ designation, className }: ContainerProps) => {
  return (
    <motion.div
      className={cn("text-sm shadow-derek dark:shadow-[var(--shadow-derek)] px-2 py-0.5 rounded w-fit text-neutral-500", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {designation && (
        <motion.span variants={itemVariants} transition={{ duration: 0.5 }}>
          {designation}
        </motion.span>
      )}
    </motion.div>
  );
};

export default Designation;
