import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Props {
  isVisible: boolean;
}

const Loader = ({ isVisible }: Props) => {
  const [hasStartedHiding, setHasStartedHiding] = useState(false);

  useEffect(() => {
    if (isVisible && !hasStartedHiding) {
      setHasStartedHiding(true);
    }
  }, [isVisible, hasStartedHiding]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="text-white text-4xl font-bold"
      >
        LOADING
      </motion.div>
    </motion.div>
  );
};

export default Loader;
