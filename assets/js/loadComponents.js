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

// Highlight the active page in nav
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