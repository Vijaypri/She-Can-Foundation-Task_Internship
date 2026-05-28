// Dark mode toggle
const toggle = document.getElementById('dark-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Scroll reveal
const reveal = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0) translateX(0)';
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.pillar, .about-story h2, .about-story p, .testimonial, .quote-strip blockquote').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity .55s ${i * .07}s ease, transform .55s ${i * .07}s ease`;
  reveal.observe(el);
});

// Nav shadow on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.boxShadow =
    window.scrollY > 30 ? '0 4px 20px rgba(46,31,31,.1)' : 'none';
});
