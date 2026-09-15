document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.drawer-toggle');
  const drawer = document.getElementById('mobile-drawer');
  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      drawer.classList.toggle('open');
      toggle.setAttribute('aria-expanded', drawer.classList.contains('open'));
    });
  }
});
