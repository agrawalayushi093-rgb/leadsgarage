/**
 * ===================================================================
 * Payop — iOS Fluid Scroll & Gesture Manager
 * Emulates native iPhone spring momentum, touch swipe, and wheel dynamics
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const sectionLayers = document.querySelectorAll('.section-layer');
  const navDots = document.querySelectorAll('.nav-dot');
  const progressBar = document.getElementById('progressBar');
  const stepIndicator = document.getElementById('stepIndicator');

  const titles = [
    '01 / 05 · iGaming Infrastructure',
    '02 / 05 · Esports Economy',
    '03 / 05 · Multi-Currency Payouts',
    '04 / 05 · Zero-Fraud Shield',
    '05 / 05 · Developer Experience'
  ];

  let currentIndex = 0;
  let isLocked = false;
  const totalSections = sectionLayers.length;

  /**
   * Transition to section with iOS spring physics
   */
  function goToSection(targetIndex) {
    if (targetIndex === currentIndex || targetIndex < 0 || targetIndex >= totalSections) {
      return;
    }
    if (isLocked) return;

    isLocked = true;

    const prevLayer = sectionLayers[currentIndex];
    const nextLayer = sectionLayers[targetIndex];

    // Trigger smooth fluid exit on outgoing layer
    if (prevLayer) {
      prevLayer.classList.remove('active');
      prevLayer.classList.add('exiting');
      setTimeout(() => {
        prevLayer.classList.remove('exiting');
      }, 500);
    }

    // Trigger fluid spring entrance on incoming layer
    setTimeout(() => {
      nextLayer.classList.remove('exiting');
      nextLayer.classList.add('active');
    }, 120);

    currentIndex = targetIndex;
    document.body.setAttribute('data-active', currentIndex);

    // Update Top Progress Bar
    if (progressBar) {
      const progressPercent = ((currentIndex + 1) / totalSections) * 100;
      progressBar.style.width = `${progressPercent}%`;
    }

    // Update Side Nav Dots
    navDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });

    // Update Header Step Indicator with soft crossfade
    if (stepIndicator) {
      stepIndicator.style.opacity = '0';
      setTimeout(() => {
        stepIndicator.textContent = titles[currentIndex];
        stepIndicator.style.opacity = '1';
      }, 200);
    }

    // Release gesture lock after spring settles
    setTimeout(() => {
      isLocked = false;
    }, 700);
  }

  /**
   * Fluid Mouse Wheel / Trackpad Gesture Handler
   * Accumulates momentum to prevent jerky intermediate frames
   */
  let wheelDeltaY = 0;
  let wheelTimeout = null;

  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (isLocked) return;

    wheelDeltaY += e.deltaY;

    if (wheelTimeout) clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => {
      wheelDeltaY = 0;
    }, 150);

    // Threshold to detect deliberate scroll gesture
    if (wheelDeltaY > 35) {
      wheelDeltaY = 0;
      goToSection(currentIndex + 1);
    } else if (wheelDeltaY < -35) {
      wheelDeltaY = 0;
      goToSection(currentIndex - 1);
    }
  }, { passive: false });

  /**
   * iOS Native Touch Swipe Gestures (Mobile / Tablet)
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

    // Primarily vertical swipe
    if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 40) {
      if (diffY > 0) {
        goToSection(currentIndex + 1); // Swiped up -> next section
      } else {
        goToSection(currentIndex - 1); // Swiped down -> previous section
      }
    }
  }, { passive: true });

  /**
   * Keyboard Arrow Navigation
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
   * Side Dot Navigation Clicks
   */
  navDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      if (!isNaN(idx)) {
        goToSection(idx);
      }
    });
  });

  // Initialize first section
  document.body.setAttribute('data-active', '0');
  if (progressBar) progressBar.style.width = '20%';
});
