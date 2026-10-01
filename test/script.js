/**
 * ===================================================================
 * Payop — Full-Page 3D Motion & Text Fade Manager
 * Smooth Forward/Backward Transitions & Persistent Center Text Crossfade
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const sectionLayers = document.querySelectorAll('.section-layer');
  const navDots = document.querySelectorAll('.nav-dot');
  const capsuleTicks = document.querySelectorAll('.capsule-tick');
  const capsuleThumb = document.getElementById('capsuleThumb');
  const progressBar = document.getElementById('progressBar');
  const stepIndicator = document.getElementById('stepIndicator');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');

  // Persistent Center Text Elements
  const centerContent = document.getElementById('centerContent');
  const heroSticker = document.getElementById('heroSticker');
  const heroDesc = document.getElementById('heroDesc');

  // Section Content Data
  const sections = [
    {
      title: '01 / 05 · Gaming Payments',
      sticker: 'Gaming',
      stickerClass: 'sticker-gaming',
      desc: 'Payop gives you 500+ global payment methods, real fraud protection, and instant payouts — all without getting blocked or ignored.'
    },
    {
      title: '02 / 05 · iGaming Infrastructure',
      sticker: 'iGaming',
      stickerClass: 'sticker-igaming',
      desc: '500+ localized deposit methods, real-time risk scoring, and zero-drop checkout built to scale high-volume gaming operations.'
    },
    {
      title: '03 / 05 · Multi-Currency Payouts',
      sticker: 'Payouts',
      stickerClass: 'sticker-payouts',
      desc: 'Direct SEPA Instant, Faster Payments, Pix, and crypto settlement rails without manual reconciliation or banking delays.'
    },
    {
      title: '04 / 05 · Zero-Fraud Shield',
      sticker: 'Security',
      stickerClass: 'sticker-shield',
      desc: 'Machine learning risk analysis with 99.98% acceptance rate and zero false positives for legitimate gaming customers.'
    },
    {
      title: '05 / 05 · Developer Experience',
      sticker: 'Developers',
      stickerClass: 'sticker-api',
      desc: 'Clean REST endpoints, idempotent event webhooks, and drop-in SDKs. Integrate your global cashier in an afternoon.'
    }
  ];

  let currentIndex = 0;
  let isLocked = false;
  const totalSections = sections.length;

  /**
   * Transition to section with forward / backward continuity
   * and simple clean center text crossfade
   * @param {number} targetIndex - The target section index
   */
  function goToSection(targetIndex) {
    if (targetIndex === currentIndex || targetIndex < 0 || targetIndex >= totalSections) {
      return;
    }
    if (isLocked) return;

    isLocked = true;

    // Determine direction for smooth forward/backward exit physics
    const direction = targetIndex > currentIndex ? 'forward' : 'backward';
    document.body.setAttribute('data-direction', direction);

    const prevLayer = sectionLayers[currentIndex];
    const nextLayer = sectionLayers[targetIndex];
    const targetData = sections[targetIndex];

    // 1. Simple, clean fade out & in of center text
    if (centerContent) {
      centerContent.classList.add('is-fading');
      setTimeout(() => {
        if (heroSticker) {
          heroSticker.textContent = targetData.sticker;
          heroSticker.className = `sticker-word ${targetData.stickerClass}`;
        }
        if (heroDesc) {
          heroDesc.textContent = targetData.desc;
        }
        centerContent.classList.remove('is-fading');
      }, 160);
    }

    // 2. Outgoing 3D Section Layer Exit
    if (prevLayer) {
      prevLayer.classList.remove('active');
      prevLayer.classList.add('exiting');
      setTimeout(() => {
        prevLayer.classList.remove('exiting');
      }, 500);
    }

    // 3. Incoming 3D Section Layer Entry
    setTimeout(() => {
      nextLayer.classList.remove('exiting');
      nextLayer.classList.add('active');
    }, 80);

    currentIndex = targetIndex;
    document.body.setAttribute('data-active', currentIndex);

    // 4. Update Top Progress Bar
    if (progressBar) {
      const progressPercent = ((currentIndex + 1) / totalSections) * 100;
      progressBar.style.width = `${progressPercent}%`;
    }

    // 5. Update Left Capsule Slider Thumb
    if (capsuleThumb) {
      const offset = currentIndex * 24.5;
      capsuleThumb.style.transform = `translateY(${offset}px)`;
    }
    capsuleTicks.forEach((tick, idx) => {
      tick.classList.toggle('active', idx === currentIndex);
    });

    // 6. Update Right Side Nav Dots
    navDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });

    // 7. Update Top Header Step Indicator
    if (stepIndicator) {
      stepIndicator.style.opacity = '0';
      setTimeout(() => {
        stepIndicator.textContent = targetData.title;
        stepIndicator.style.opacity = '1';
      }, 180);
    }

    // Release lock once landing animation settles
    setTimeout(() => {
      isLocked = false;
    }, 650);
  }

  /**
   * Quick Directional Buttons
   */
  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      goToSection(currentIndex - 1);
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      goToSection(currentIndex + 1);
    });
  }

  /**
   * Left Capsule Tick Clicks
   */
  capsuleTicks.forEach((tick) => {
    tick.addEventListener('click', () => {
      const idx = parseInt(tick.getAttribute('data-index'), 10);
      if (!isNaN(idx)) {
        goToSection(idx);
      }
    });
  });

  /**
   * Right Side Dot Navigation Clicks
   */
  navDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      if (!isNaN(idx)) {
        goToSection(idx);
      }
    });
  });

  /**
   * Mouse Wheel & Trackpad Momentum Scroll
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
    }, 140);

    if (wheelDeltaY > 26) {
      wheelDeltaY = 0;
      goToSection(currentIndex + 1); // Forward (Down)
    } else if (wheelDeltaY < -26) {
      wheelDeltaY = 0;
      goToSection(currentIndex - 1); // Backward (Up)
    }
  }, { passive: false });

  /**
   * Touch Swipe Gestures (Mobile / Tablet)
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

    if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 30) {
      if (diffY > 0) {
        goToSection(currentIndex + 1); // Swipe Up -> Forward
      } else {
        goToSection(currentIndex - 1); // Swipe Down -> Backward
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

  // Initialize first state
  document.body.setAttribute('data-active', '0');
  document.body.setAttribute('data-direction', 'forward');
  if (progressBar) progressBar.style.width = '20%';
  if (capsuleThumb) capsuleThumb.style.transform = 'translateY(0px)';
});
