import React, { useLayoutEffect, useRef } from 'react';
import './InnerPageScreens.css';

// This layout is mounted only by the inner-page branch of App.
export default function InnerPageScreens({ children, page }) {
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    if (page === 'about') {
      const root = document.documentElement;
      const content = contentRef.current;
      const spacer = document.querySelector('.site-header-spacer');
      const update = () => content.style.setProperty('--section-nav', Math.ceil(spacer?.getBoundingClientRect().height || 80) + 'px');
      root.setAttribute('data-about-scroll', '');
      update();
      const observer = new ResizeObserver(update);
      if (spacer) observer.observe(spacer);
      return () => {
        observer.disconnect();
        root.removeAttribute('data-about-scroll');
      };
    }

    // Browser-owned scrolling avoids competing wheel and scrollend animations.
    if (['homeServices', 'insurance', 'finance', 'healthAndBeauty'].includes(page)) {
      const root = document.documentElement;
      const content = contentRef.current;
      const spacer = document.querySelector('.site-header-spacer');
      const update = () => content.style.setProperty('--section-nav', Math.ceil(spacer?.getBoundingClientRect().height || 80) + 'px');
      root.setAttribute('data-industry-flow', '');
      content.setAttribute('data-industry-flow', '');
      update();
      const observer = new ResizeObserver(update);
      if (spacer) observer.observe(spacer);
      return () => {
        observer.disconnect();
        root.removeAttribute('data-industry-flow');
        content.removeAttribute('data-industry-flow');
      };
    }

    // For content-heavy and multi-card pages like Buyers and Advertisers, allow
    // natural, fluid, and continuous smooth scrolling without snap-locking or section forcing.
    if (page === 'buyers' || page === 'advertisers' || page === 'affiliateMarketing' || page === 'inboundCalls' || page === 'webDevelopment' || page === 'socialMediaMarketing' || page === 'crmConsultation' || page === 'emailSms') {
      const content = contentRef.current;
      const root = document.documentElement;
      const spacer = document.querySelector('.site-header-spacer');
      const update = () => content.style.setProperty('--section-nav', Math.ceil(spacer?.getBoundingClientRect().height || 80) + 'px');
      root.setAttribute('data-partnership-flow', '');
      update();
      const observer = new ResizeObserver(update);
      if (spacer) observer.observe(spacer);
      return () => { observer.disconnect(); root.removeAttribute('data-partnership-flow'); };
    }

    const isSmoothOneView = ['about', 'homeServices', 'insurance', 'finance', 'healthAndBeauty'].includes(page);

    const content = contentRef.current;
    const documentRoot = document.documentElement;
    const spacer = document.querySelector('.site-header-spacer');
    const sections = [...content.querySelectorAll('section, footer, [data-inner-section-group]')]
      .filter(section => !section.parentElement.closest('section, footer, [data-inner-section-group]'));
    const hosts = new Set();
    const scrollHosts = new Set();
    const previousNav = documentRoot.style.getPropertyValue('--inner-page-nav');
    const previousSnap = documentRoot.getAttribute('data-inner-page-snap');
    const desktop = matchMedia('(min-width:1101px) and (min-height:600px)');
    let scheduled = 0;
    let disposed = false;
    let measuredNav = -1;
    let settleTimer = 0;
    let lastInput = 0;
    let measuredViewport = '';
    let gestureActive = false;
    let gestureOrigin = -1;
    let gestureStartY = 0;
    let gestureDirection = 0;
    const skippedSections = new Set();
    let aboutAligning = false;

    sections.forEach(section => {
      section.style.setProperty('--inner-section-base-top', getComputedStyle(section).paddingTop);
      section.setAttribute('data-inner-section', '');
      // Decorative shells used overflow:hidden, which makes their descendants
      // snap to an invisible local scroll container instead of the document.
      for (let host = section.parentElement; host && host !== content; host = host.parentElement) {
        const style = getComputedStyle(host);
        if (style.overflowX === 'hidden' || style.overflowY === 'hidden') {
          host.setAttribute('data-inner-snap-ancestor', '');
          scrollHosts.add(host);
        }
      }
      // Remove spacing around single-section containers, without adding wrappers
      // or changing the content grids and animation targets inside each section.
      for (let host = section.parentElement; host && host !== content; host = host.parentElement) {
        if (sections.filter(candidate => host.contains(candidate)).length !== 1) break;
        host.setAttribute('data-inner-section-host', '');
        hosts.add(host);
      }
    });
    sections[0]?.setAttribute('data-inner-first', '');

    const measure = () => {
      scheduled = 0;
      if (disposed) return;
      const viewport = `${innerWidth}:${window.visualViewport?.height || innerHeight}`;
      if (viewport !== measuredViewport) {
        measuredViewport = viewport;
        clearTimeout(settleTimer);
        documentRoot.removeAttribute('data-inner-scroll-settled');
        skippedSections.forEach(section => section.removeAttribute('data-inner-snap-skip'));
        skippedSections.clear();
        gestureActive = false;
        // Re-read responsive padding only on viewport changes, never on scroll.
        sections.forEach(section => section.removeAttribute('data-inner-section'));
        sections.forEach(section => section.style.setProperty('--inner-section-base-top', getComputedStyle(section).paddingTop));
        sections.forEach(section => section.setAttribute('data-inner-section', ''));
      }
      // The spacer changes with the viewport, not with the navbar's scroll
      // animation. Observing the animated header caused redundant layout work.
      const nav = Math.ceil(spacer?.getBoundingClientRect().height || 0);
      if (nav !== measuredNav) {
        measuredNav = nav;
        content.style.setProperty('--section-nav', `${nav}px`);
        documentRoot.style.setProperty('--inner-page-nav', `${nav}px`);
      }
      if (documentRoot.hasAttribute('data-inner-page-snap') !== desktop.matches) {
        documentRoot.toggleAttribute('data-inner-page-snap', desktop.matches);
      }
      const viewportHeight = window.visualViewport?.height || innerHeight;
      sections.forEach(section => {
        const available = viewportHeight - (section === sections[0] ? nav : 0);
        const natural = section.getBoundingClientRect().height > available + 2;
        if (section.hasAttribute('data-inner-natural-scroll') !== natural) {
          section.toggleAttribute('data-inner-natural-scroll', natural);
        }
      });
    };
    const queueMeasure = () => {
      if (!scheduled) scheduled = requestAnimationFrame(measure);
    };
    measure();
    const observer = new ResizeObserver(queueMeasure);
    sections.forEach(section => observer.observe(section));
    if (spacer) observer.observe(spacer);
    desktop.addEventListener('change', queueMeasure);
    window.visualViewport?.addEventListener('resize', queueMeasure);
    window.addEventListener('resize', queueMeasure);
    document.fonts.ready.then(queueMeasure);

    const clearSettling = () => {
      if (isSmoothOneView && aboutAligning) {
        aboutAligning = false;
        window.scrollTo({ top: scrollY, behavior: 'instant' });
      }
      if (!gestureActive) {
        gestureActive = true;
        gestureStartY = scrollY;
        gestureDirection = 0;
        gestureOrigin = sections.findIndex((section, index) => Math.abs(section.getBoundingClientRect().top - (index === 0 ? measuredNav : 0)) < 4);
      }
      lastInput = performance.now();
      clearTimeout(settleTimer);
      documentRoot.removeAttribute('data-inner-scroll-settled');
      skippedSections.forEach(section => section.removeAttribute('data-inner-snap-skip'));
      skippedSections.clear();
    };
    const settleNearBoundary = () => {
      clearTimeout(settleTimer);
      if (disposed || !desktop.matches) return;
      if (!isSmoothOneView && documentRoot.hasAttribute('data-inner-scroll-settled')) return;
      const quietFor = performance.now() - lastInput;
      if (quietFor < 180) {
        settleTimer = setTimeout(settleNearBoundary, 180 - quietFor);
        return;
      }
      const rects = sections.map(section => section.getBoundingClientRect());
      gestureActive = false;
      if (isSmoothOneView && aboutAligning) {
        aboutAligning = false;
        gestureDirection = 0;
        return;
      }
      // Oversized content keeps normal scrolling inside the section.
      if (rects.some((rect, index) => sections[index].hasAttribute('data-inner-natural-scroll') && rect.top < -2 && rect.bottom > innerHeight + 2)) return;
      if (isSmoothOneView) {
        // Uses native smooth scrolling only after scrollend. A new input
        // cancels this finishing motion immediately; no wheel input is blocked.
        documentRoot.removeAttribute('data-inner-scroll-settled');
        const offsets = rects.map((rect, index) => rect.top - (index === 0 ? measuredNav : 0));
        let target = offsets.reduce((best, offset, index) => Math.abs(offset) < Math.abs(offsets[best]) ? index : best, 0);
        if (gestureDirection > 0) {
          const next = offsets.findIndex(offset => offset > 3);
          if (next !== -1) target = next;
        } else if (gestureDirection < 0) {
          for (let index = offsets.length - 1; index >= 0; index--) {
            if (offsets[index] < -3) { target = index; break; }
          }
        }
        if (Math.abs(offsets[target]) > 2) {
          aboutAligning = true;
          window.scrollTo({ top: Math.max(0, scrollY + offsets[target]), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
        }
        return;
      }
      const distance = Math.min(...rects.map((rect, index) => Math.abs(rect.top - (index === 0 ? measuredNav : 0))));
      if (distance > 2) documentRoot.setAttribute('data-inner-scroll-settled', '');
    };
    const cancelForKey = event => {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) {
        clearSettling();
        gestureDirection = ['ArrowUp', 'PageUp'].includes(event.key) ? -1 : ['ArrowDown', 'PageDown', ' '].includes(event.key) ? 1 : 0;
      }
    };
    // Unsupported scrollend browsers retain fully native continuous scrolling.
    document.addEventListener('scrollend', settleNearBoundary);
    document.addEventListener('keydown', cancelForKey);
    document.addEventListener('touchstart', clearSettling, { passive: true });
    document.addEventListener('touchmove', clearSettling, { passive: true });
    document.addEventListener('pointerdown', clearSettling, { passive: true });

    const processRegions = new Set([...content.querySelectorAll('[role="region"]')]
      .filter(region => getComputedStyle(region).getPropertyValue('--visible-steps')));
    // Passive guard against the older carousel's vertical-wheel preventDefault.
    // Never cancel wheel input or set a scroll position; the browser owns motion.
    const preservePageWheel = event => {
      clearSettling();
      if (!desktop.matches || event.ctrlKey || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;
      gestureDirection = Math.sign(event.deltaY);
      const region = event.target.closest?.('[role="region"]');
      if (processRegions.has(region)) event.stopPropagation();
    };
    document.addEventListener('wheel', preservePageWheel, { capture: true, passive: true });

    return () => {
      disposed = true;
      cancelAnimationFrame(scheduled);
      clearTimeout(settleTimer);
      observer.disconnect();
      desktop.removeEventListener('change', queueMeasure);
      window.visualViewport?.removeEventListener('resize', queueMeasure);
      window.removeEventListener('resize', queueMeasure);
      document.removeEventListener('wheel', preservePageWheel, true);
      document.removeEventListener('scrollend', settleNearBoundary);
      document.removeEventListener('keydown', cancelForKey);
      document.removeEventListener('touchstart', clearSettling);
      document.removeEventListener('touchmove', clearSettling);
      document.removeEventListener('pointerdown', clearSettling);
      documentRoot.removeAttribute('data-inner-scroll-settled');
      skippedSections.forEach(section => section.removeAttribute('data-inner-snap-skip'));
      sections.forEach(section => {
        section.removeAttribute('data-inner-section');
        section.removeAttribute('data-inner-natural-scroll');
        section.removeAttribute('data-inner-first');
        section.style.removeProperty('--inner-section-base-top');
      });
      hosts.forEach(host => host.removeAttribute('data-inner-section-host'));
      scrollHosts.forEach(host => host.removeAttribute('data-inner-snap-ancestor'));
      if (previousSnap === null) documentRoot.removeAttribute('data-inner-page-snap');
      else documentRoot.setAttribute('data-inner-page-snap', previousSnap);
      if (previousNav) documentRoot.style.setProperty('--inner-page-nav', previousNav);
      else documentRoot.style.removeProperty('--inner-page-nav');
    };
  }, [page]);

  return <div ref={contentRef} data-reference-pages data-inner-screens>{children}</div>;
}
