import React from 'react';
import Home from './pages/Home';
import { MotionConfig } from 'framer-motion';

export default function App() {
  return <MotionConfig reducedMotion="user"><Home /></MotionConfig>;
}
