/* ============================================
   worldPR — main.js
   ============================================ */

(function () {
  'use strict';

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Sticky nav ---------- */
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile hamburger ---------- */
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks  = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    const toggleMenu = (open) => {
      hamburger.classList.toggle('active', open);
      navLinks.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    };

    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      toggleMenu(!isOpen);
    });

    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') toggleMenu(false);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target)) toggleMenu(false);
    });
  }

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ---------- Scroll reveal animations ---------- */
  const revealEls = document.querySelectorAll(
    '.service-card, .client-card, .featured-client, .step, ' +
    '.about-grid, .stat-item, .contact-form-wrap, .contact-info, ' +
    '.approach-card, .campaign-card, .outlet-pills, .testimonial-card, ' +
    '.case-spotlight, .media-logos'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger siblings slightly
          const siblings = Array.from(entry.target.parentElement.children);
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${idx * 60}ms`;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all immediately
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ---------- Google Form embed ---------- */
  const formEmbed    = document.getElementById('google-form-embed');
  const formIframe   = document.getElementById('google-form-iframe');
  const formFallback = document.getElementById('contact-form-fallback');
  const formExternal = document.getElementById('google-form-external-link');
  const formUrl      = window.ZAMOST_CONFIG?.googleFormUrl?.trim();

  if (formUrl && formEmbed && formIframe) {
    const viewformBase = formUrl.replace(/\?.*$/, '').replace(/\/$/, '');
    const embedUrl = `${viewformBase}?embedded=true`;
    formIframe.src = embedUrl;
    if (formExternal) formExternal.href = viewformBase;
    formEmbed.removeAttribute('hidden');
    if (formFallback) formFallback.hidden = true;
  }

  const calendlyLink = document.getElementById('calendly-link');
  const calendlyUrl  = window.ZAMOST_CONFIG?.calendlyUrl?.trim();
  if (calendlyUrl && calendlyLink) {
    calendlyLink.href = calendlyUrl;
    calendlyLink.removeAttribute('hidden');
    calendlyLink.target = '_blank';
    calendlyLink.rel = 'noopener noreferrer';
  }

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && navAnchors.length && 'IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navAnchors.forEach(a => {
            a.removeAttribute('aria-current');
            if (a.getAttribute('href') === `#${entry.target.id}`) {
              a.setAttribute('aria-current', 'page');
            }
          });
        }
      });
    }, { threshold: 0.45 });

    sections.forEach(s => sectionObserver.observe(s));
  }

})();
