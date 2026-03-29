// Consolidated script.js - Navbar + Contact Form (Fixed syntax)

document.addEventListener('DOMContentLoaded', function() {
  // Navbar mobile toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navLinks.classList.toggle('mobile-open');
    });
    
    // Close on outside click
    document.addEventListener('click', function() {
      navLinks.classList.remove('mobile-open');
    });
  }
  
  // Dropdown click support (mobile)
  const dropbtns = document.querySelectorAll('.dropbtn');
  dropbtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const dropdown = this.nextElementSibling;
      const isOpen = dropdown.style.display === 'block';
      document.querySelectorAll('.dropdown-content').forEach(d => d.style.display = 'none');
      if (!isOpen) {
        dropdown.style.display = 'block';
      }
    });
  });
  
  // Contact form handler
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate send
      setTimeout(function() {
        formMessage.textContent = 'Message sent successfully! I'll get back to you soon.';
        formMessage.className = 'form-message success';
        contactForm.reset();
      }, 500);
    });
  }
  
  // Active page highlighting (non-module pages)
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a[href]');
  links.forEach(function(link) {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
  
  // Module pages - highlight current module in dropdown
  if (currentPath.includes('module')) {
    const moduleLinks = document.querySelectorAll('.dropdown-content a');
    moduleLinks.forEach(function(link) {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  }
});
