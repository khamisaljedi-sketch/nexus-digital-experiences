// ===== NESTORA — MAIN JS =====

// Navbar scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
document.getElementById('hamburger')?.addEventListener('click', () => {
  document.getElementById('mobileMenu')?.classList.toggle('open');
});

// Fav count init
updateFavCount();

// Fade in observer
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
setTimeout(() => {
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}, 100);

// Search tabs
document.querySelectorAll('.stab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.stab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// City cards click
document.querySelectorAll('.city-card').forEach(card => {
  card.addEventListener('click', () => {
    const city = card.dataset.city;
    window.location.href = `properties.html?city=${encodeURIComponent(city)}`;
  });
});

// Featured properties on index page
const featuredGrid = document.getElementById('featuredGrid');
if (featuredGrid && typeof properties !== 'undefined') {
  const featured = properties.slice(0, 6);
  featuredGrid.innerHTML = featured.map(p => buildPropertyCard(p)).join('');
  setTimeout(() => {
    featuredGrid.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }, 100);
}
