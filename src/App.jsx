import React from 'react';
import Home from './pages/Home';
import Buyers from './pages/Buyers';
import { MotionConfig } from 'framer-motion';

export default function App() {
  const buyers = new URLSearchParams(window.location.search).get('page') === 'buyers';
  return <MotionConfig reducedMotion="user">{buyers ? <Buyers /> : <Home />}</MotionConfig>;
}
