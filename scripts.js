document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.site-nav');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('open');
      
      // Update aria-label
      const isOpen = navMenu.classList.contains('open');
      navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      navToggle.textContent = isOpen ? '✕ Close' : '☰ Menu';
    });
  }
});