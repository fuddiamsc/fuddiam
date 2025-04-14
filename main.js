// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  toggle?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Newsletter popup
  setTimeout(() => {
    const popup = document.getElementById('newsletterPopup');
    if (popup) popup.classList.remove('hidden');
  }, 5000); // show after 5s

  // Close modal
  document.querySelectorAll('.closeModal').forEach(btn =>
    btn.addEventListener('click', () => {
      btn.closest('.modal')?.classList.add('hidden');
    })
  );
});
