import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
      if (onComplete) onComplete();
    }, 1200);

    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#07152E] text-white selection:bg-none"
        >
          {/* Subtle Ambient Glow behind logo */}
          <div className="absolute w-[400px] h-[300px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

          {/* Centered Logo Direct on Dark Screen (Without White Background) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative z-10 flex items-center justify-center"
          >
            <img 
              src="/image/leads-garage.png" 
              alt="Leads Garage" 
              className="h-12 sm:h-14 w-auto object-contain brightness-0 invert drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
