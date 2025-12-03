/* testimonials.js
   Loads testimonials from a JSON file and renders them into the testimonials grid.
*/

(function () {
  const isInSubfolder = window.location.pathname.includes('/pages/');
  const basePath = isInSubfolder ? '../' : '';
  const endpoint = `${basePath}assets/data/testimonials.json`;

  function createCard(t) {
    const card = document.createElement('div');
    card.className = 'card';

    const quote = document.createElement('p');
    quote.className = 'testimonial-quote';
    quote.textContent = `"${t.quote}"`;

    const author = document.createElement('div');
    author.className = 'testimonial-author';
    author.textContent = `— ${t.author}`;

    const role = document.createElement('div');
    role.className = 'testimonial-role';
    role.textContent = t.role;

    card.appendChild(quote);
    card.appendChild(author);
    card.appendChild(role);
    return card;
  }

  function showError(container, msg) {
    const err = document.createElement('div');
    err.className = 'card';
    err.textContent = msg;
    container.appendChild(err);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('testimonials-list');
    if (!container) return;

    fetch(endpoint)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        if (!Array.isArray(data) || data.length === 0) {
          showError(container, 'No testimonials found.');
          return;
        }

        data.forEach(t => {
          const card = createCard(t);
          container.appendChild(card);
        });
      })
      .catch(err => {
        console.error('Error loading testimonials:', err);
        showError(container, 'Unable to load testimonials at this time.');
      });
  });
})();
