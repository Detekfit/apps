// Update footer year
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  // Mark active nav link based on path
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a[data-route]').forEach(a => {
    if (a.getAttribute('data-route') === path) {
      a.classList.add('active');
    }
  });
});
