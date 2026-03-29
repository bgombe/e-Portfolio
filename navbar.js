ing// Navbar functionality - Mobile toggle & Dropdown
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // Dropdown toggle on click (for mobile/compatibility)
  const dropbtns = document.querySelectorAll('.dropbtn');
  dropbtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const dropdown = this.nextElementSibling;
      dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
  });
  
  // Close dropdown/mobile on outside click
  document.addEventListener('click', function() {
    document.querySelectorAll('.dropdown-content').forEach(dd => dd.style.display = 'none');
    navLinks.classList.remove('active');
  });
  
  // Active nav indicator (visual for UNITS page)
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const unitsLink = document.querySelector('a[href="units.html"]');
  if (unitsLink && currentPath === 'units.html') {
    unitsLink.classList.add('active-nav');
  }
});
