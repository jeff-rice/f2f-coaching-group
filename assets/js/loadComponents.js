/**
 * loadComponents.js
 * 
 * Dynamically loads shared components (navbar and footer) into pages.
 * This allows for centralized component management without duplicating HTML.
 * 
 * Features:
 * - Automatically detects current page depth (root vs /pages/)
 * - Loads navbar and footer components from /components/ folder
 * - Sets active navigation link based on current page
 * - Updates copyright year in footer dynamically
 */

// Determine the correct path based on current location
const isInSubfolder = window.location.pathname.includes('/pages/');
const basePath = isInSubfolder ? '../' : '';

// Load navbar
fetch(`${basePath}components/navbar.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
    setActiveNavLink();
  })
  .catch(error => console.error('Error loading navbar:', error));

// Load footer
fetch(`${basePath}components/footer.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
    // Set the year AFTER the footer HTML is loaded
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  })
  .catch(error => console.error('Error loading footer:', error));

/**
 * Highlights the active page link in the navbar
 * Compares current URL with href attributes to mark the current page
 * Also marks parent menu items if link is in a dropdown
 */
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkPage = href.split('/').pop();
    if (linkPage === currentPage) {
      link.classList.add('active');
      // if link is inside a dropdown, also mark the parent
      const parent = link.closest('.has-dropdown');
      if (parent) {
        const parentLink = parent.querySelector('a');
        if (parentLink) parentLink.classList.add('active');
      }
    }
  });
}