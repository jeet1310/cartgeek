// ---------- Mobile Navbar Toggle ----------
const navLinks = document.querySelector('.nav-links');
const navButton = document.createElement('button');
navButton.textContent = '☰';
navButton.className = 'nav-toggle';
document.querySelector('.navbar .container').insertBefore(
  navButton,
  document.querySelector('.btn-primary')
);

navButton.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// ---------- Smooth Scroll ----------
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // adjust for fixed header height
        behavior: 'smooth'
      });
    }
    navLinks.classList.remove('open');
  });
});

// ---------- Dropdown click toggle ----------
document.querySelectorAll('.dropdown .drop-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const parent = btn.parentElement;
    document.querySelectorAll('.dropdown').forEach(d => {
      if (d !== parent) d.classList.remove('open');
    });
    parent.classList.toggle('open');
  });
});

// Close dropdowns when clicking outside
window.addEventListener('click', () => {
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
});
