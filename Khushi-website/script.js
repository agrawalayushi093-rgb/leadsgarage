/**
 * ===================================================================
 * 3D Multi-Plane Z-Axis Controller & Gesture Orchestrator
 * Controls the 20x10 -> 14x6 -> 16x8 Z-depth transitions and 3D parallax
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const heroCard3D = document.getElementById('heroCard3D');
  const sections = document.querySelectorAll('.section-3d');
  const navIndicators = document.querySelectorAll('.nav-indicator');
  const progressBar = document.getElementById('progressBar');
  const liveSectionTag = document.getElementById('liveSectionTag');

  const titles = [
    '01 / 05 · Grow Business',
    '02 / 05 · Scale with us',
    '03 / 05 · Expand Reach',
    '04 / 05 · Monetize Content',
    '05 / 05 · Elevate Performance'
  ];

  let currentIndex = 0;
  let isLocked = false;
  const totalSections = sections.length;

  /**
   * Transition to targeted 3D section
   * @param {number} targetIndex - Index of destination section (0 to 4)
   */
  function goToSection(targetIndex) {
    if (targetIndex === currentIndex || targetIndex < 0 || targetIndex >= totalSections) {
      return;
    }
    if (isLocked) return;

    isLocked = true;

    const prevSection = sections[currentIndex];
    const nextSection = sections[targetIndex];

    // Trigger 3D exit on outgoing section (glides into deep Z-space)
    if (prevSection) {
      prevSection.classList.remove('active');
      prevSection.classList.add('exiting');
      setTimeout(() => {
        prevSection.classList.remove('exiting');
      }, 500);
    }

    // Trigger 3D spring entrance on incoming section (zooms in from Z-axis)
    setTimeout(() => {
      nextSection.classList.remove('exiting');
      nextSection.classList.add('active');
    }, 100);

    currentIndex = targetIndex;
    document.body.setAttribute('data-active', currentIndex);

    // Update Progress Bar
    if (progressBar) {
      const progressPercent = ((currentIndex + 1) / totalSections) * 100;
      progressBar.style.width = `${progressPercent}%`;
    }

    // Update Side Indicators
    navIndicators.forEach((ind, idx) => {
      ind.classList.toggle('active', idx === currentIndex);
    });

    // Update Section Title Tag
    if (liveSectionTag) {
      liveSectionTag.style.opacity = '0';
      setTimeout(() => {
        liveSectionTag.textContent = titles[currentIndex];
        liveSectionTag.style.opacity = '1';
      }, 200);
    }

    // Cooldown lock to ensure fluid, non-jarring transitions
    setTimeout(() => {
      isLocked = false;
    }, 750);
  }

  /**
   * Fluid Mouse Wheel / Trackpad Scroll Navigation
   */
  let wheelDeltaY = 0;
  let wheelTimer = null;

  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (isLocked) return;

    wheelDeltaY += e.deltaY;

    if (wheelTimer) clearTimeout(wheelTimer);
    wheelTimer = setTimeout(() => {
      wheelDeltaY = 0;
    }, 150);

    if (wheelDeltaY > 35) {
      wheelDeltaY = 0;
      goToSection(currentIndex + 1);
    } else if (wheelDeltaY < -35) {
      wheelDeltaY = 0;
      goToSection(currentIndex - 1);
    }
  }, { passive: false });

  /**
   * Touch Swipe Gestures for Mobile & Tablets
   */
  let touchStartY = 0;
  let touchStartX = 0;

  window.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    }
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    if (isLocked || e.changedTouches.length === 0) return;

    const touchEndY = e.changedTouches[0].clientY;
    const touchEndX = e.changedTouches[0].clientX;
    const diffY = touchStartY - touchEndY;
    const diffX = touchStartX - touchEndX;

    if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 40) {
      if (diffY > 0) {
        goToSection(currentIndex + 1);
      } else {
        goToSection(currentIndex - 1);
      }
    }
  }, { passive: true });

  /**
   * Keyboard Navigation
   */
  window.addEventListener('keydown', (e) => {
    if (isLocked) return;
    if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      goToSection(currentIndex + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      goToSection(currentIndex - 1);
    }
  });

  /**
   * Side Dot Clicks
   */
  navIndicators.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      if (!isNaN(idx)) {
        goToSection(idx);
      }
    });
  });

  /**
   * Interactive 3D Multi-Plane Mouse Parallax Tilt
   */
  let mouseMoveTimeout;
  window.addEventListener('mousemove', (e) => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Normalized coordinates from -1 to 1
    const normX = (e.clientX - width / 2) / (width / 2);
    const normY = (e.clientY - height / 2) / (height / 2);

    const tiltX = -normY * 4.5; // Max 4.5 deg X tilt
    const tiltY = normX * 4.5;  // Max 4.5 deg Y tilt

    heroCard3D.style.transform = `rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
  });

  window.addEventListener('mouseleave', () => {
    heroCard3D.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });

  // Initial State
  document.body.setAttribute('data-active', '0');
  if (progressBar) progressBar.style.width = '20%';
});
