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
    '.approach-card'
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

  /* ---------- Contact form validation ---------- */
  const form      = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const successEl = document.getElementById('form-success');

  if (form) {
    const fields = {
      'first-name': { el: null, errorEl: null, validate: v => v.trim().length >= 2 ? '' : 'Please enter your first name.' },
      'last-name':  { el: null, errorEl: null, validate: v => v.trim().length >= 2 ? '' : 'Please enter your last name.' },
      'email':      { el: null, errorEl: null, validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email address.' },
      'message':    { el: null, errorEl: null, validate: v => v.trim().length >= 20 ? '' : 'Please enter at least 20 characters.' },
    };

    // Cache elements
    Object.keys(fields).forEach(id => {
      fields[id].el      = document.getElementById(id);
      fields[id].errorEl = document.getElementById(`${id}-error`);
    });

    const validateField = (id) => {
      const { el, errorEl, validate } = fields[id];
      if (!el) return true;
      const msg = validate(el.value);
      errorEl.textContent = msg;
      el.classList.toggle('invalid', !!msg);
      return !msg;
    };

    // Inline validation on blur
    Object.keys(fields).forEach(id => {
      const { el } = fields[id];
      if (el) {
        el.addEventListener('blur', () => validateField(id));
        el.addEventListener('input', () => {
          if (el.classList.contains('invalid')) validateField(id);
        });
      }
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const allValid = Object.keys(fields).map(validateField).every(Boolean);
      if (!allValid) {
        // Focus first invalid field
        const firstInvalid = form.querySelector('.invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          form.reset();
          form.hidden = true;
          successEl.removeAttribute('hidden');
          successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
          alert('Something went wrong. Please try again or email barbara@zamostpr.com directly.');
        }
      } catch (err) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        alert('Something went wrong. Please try again or email barbara@zamostpr.com directly.');
      }
    });
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

  /* ---------- Press Clips Carousel ---------- */
  const carouselTrack = document.getElementById('carousel-track');
  const carouselPrev = document.getElementById('carousel-prev');
  const carouselNext = document.getElementById('carousel-next');
  const carouselIndicators = document.getElementById('carousel-indicators');

  if (carouselTrack && carouselPrev && carouselNext && carouselIndicators) {
    const slides = Array.from(carouselTrack.children);
    const slideCount = slides.length;
    let currentIndex = 0;
    let autoRotateTimer = null;
    let isPaused = false;

    const createIndicators = () => {
      slides.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.classList.add('carousel-indicator');
        indicator.setAttribute('role', 'tab');
        indicator.setAttribute('aria-label', `Go to press clip ${index + 1}`);
        indicator.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        carouselIndicators.appendChild(indicator);
      });
    };

    const updateCarousel = () => {
      carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      carouselPrev.disabled = currentIndex === 0;
      carouselNext.disabled = currentIndex === slideCount - 1;

      const indicators = carouselIndicators.querySelectorAll('.carousel-indicator');
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
        indicator.setAttribute('aria-selected', index === currentIndex ? 'true' : 'false');
      });

      slides.forEach((slide, index) => {
        slide.setAttribute('aria-hidden', index !== currentIndex ? 'true' : 'false');
      });
    };

    const goToSlide = (index) => {
      currentIndex = Math.max(0, Math.min(slideCount - 1, index));
      updateCarousel();
      resetAutoRotate();
    };

    const nextSlide = () => {
      if (currentIndex < slideCount - 1) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(0);
      }
    };

    const prevSlide = () => {
      if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
      }
    };

    const startAutoRotate = () => {
      if (!isPaused) {
        autoRotateTimer = setInterval(() => {
          nextSlide();
        }, 5000);
      }
    };

    const stopAutoRotate = () => {
      if (autoRotateTimer) {
        clearInterval(autoRotateTimer);
        autoRotateTimer = null;
      }
    };

    const resetAutoRotate = () => {
      stopAutoRotate();
      startAutoRotate();
    };

    const pauseAutoRotate = () => {
      isPaused = true;
      stopAutoRotate();
    };

    const resumeAutoRotate = () => {
      isPaused = false;
      startAutoRotate();
    };

    carouselPrev.addEventListener('click', prevSlide);
    carouselNext.addEventListener('click', nextSlide);

    const carouselWrapper = document.querySelector('.carousel-wrapper');
    if (carouselWrapper) {
      carouselWrapper.addEventListener('mouseenter', pauseAutoRotate);
      carouselWrapper.addEventListener('mouseleave', resumeAutoRotate);
      carouselWrapper.addEventListener('focusin', pauseAutoRotate);
      carouselWrapper.addEventListener('focusout', resumeAutoRotate);
    }

    document.addEventListener('keydown', (e) => {
      if (document.activeElement && 
          (document.activeElement === carouselPrev || 
           document.activeElement === carouselNext ||
           carouselIndicators.contains(document.activeElement))) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prevSlide();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          nextSlide();
        }
      }
    });

    createIndicators();
    updateCarousel();
    startAutoRotate();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAutoRotate();
      } else if (!isPaused) {
        startAutoRotate();
      }
    });
  }

})();
