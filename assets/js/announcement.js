/* announcement.js
   Controls the announcement banner behavior: show/hide and persist dismissal.
   Stores dismissal state in localStorage under 'announcementDismissed_v1'.
*/
(function () {
  const STORAGE_KEY = 'announcementDismissed_v1';

  function init(basePath) {
    const banner = document.getElementById('announcement-banner');
    const dismiss = document.getElementById('announcement-dismiss');
    const link = document.getElementById('announcement-link');

    if (!banner) return;

    // If user dismissed previously, don't show
    try {
      if (localStorage && localStorage.getItem(STORAGE_KEY) === '1') {
        banner.hidden = true;
        return;
      }
    } catch (e) {
      console.warn('localStorage unavailable for announcement');
    }

    // Set the F2F URL here if you want to direct users; can be updated later
    const f2fUrl = 'https://f2fcoaching.example';
    if (link) link.href = f2fUrl;

    // Show banner
    banner.hidden = false;

    // Dismiss handler
    if (dismiss) {
      dismiss.addEventListener('click', () => {
        banner.hidden = true;
        try { localStorage.setItem(STORAGE_KEY, '1'); } catch (e) { /* ignore */ }
      });
    }
  }

  // Expose init to window for loadComponents to invoke
  window.__announcementInit = init;
})();
