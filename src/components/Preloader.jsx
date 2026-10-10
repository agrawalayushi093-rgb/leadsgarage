import { publicAsset } from '../utils/publicAsset';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [loading, setLoading] = useState(true);
  const completed = useRef(false);
  const finish = useCallback(() => {
    if (completed.current) return;
    completed.current = true;
    setLoading(false);

  }, []);

  useEffect(() => {
    if (!loading) return;
    const previousOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    // Release the page even if the media connection stalls.
    const fallback = setTimeout(finish, 30000);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
      clearTimeout(fallback);
    };
  }, [loading, finish]);

  return <AnimatePresence onExitComplete={onComplete}>
    {loading && <motion.div
      role="dialog" aria-modal="true" aria-label="Leads Garage intro video"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: .35, ease: 'easeOut' } }}
      className="fixed inset-0 z-[9999] overflow-hidden bg-black"
    >
      <video src={publicAsset("/image/load.mp4")} autoPlay muted playsInline preload="auto"
        aria-label="Leads Garage introduction"
        className="absolute inset-0 block w-full h-full object-cover"
        onEnded={finish} onError={finish}
        onLoadedMetadata={event => { event.currentTarget.playbackRate = 2; }}
        onCanPlay={event => {
          event.currentTarget.playbackRate = 2;
          event.currentTarget.play()?.catch(finish);
        }}
      />
    </motion.div>}
  </AnimatePresence>;
}
