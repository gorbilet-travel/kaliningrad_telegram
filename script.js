// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal-up').forEach((el) => io.observe(el));

// Subtle parallax on hero aurora
const aurora = document.querySelector('.bg-aurora');
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const y = window.scrollY * 0.04;
      if (aurora) aurora.style.transform = `translateY(${y}px)`;
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });
