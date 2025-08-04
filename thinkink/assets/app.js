// ThinkInk minimal JS
document.addEventListener('DOMContentLoaded', () => {
  // Year
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  // Active link
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('nav a[data-route], .drawer a[data-route]').forEach(a=>{
    const route = (a.getAttribute('data-route') || '').toLowerCase();
    if(route === current) a.classList.add('active');
  });

  // Mobile drawer toggle
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('drawer');
  if (burger && drawer){
    burger.addEventListener('click', () => {
      drawer.classList.toggle('open');
      burger.setAttribute('aria-expanded', drawer.classList.contains('open'));
    });
  }

  // Compact header on scroll
  const header = document.querySelector('.header-wrap');
  if (header){
    const onScroll = () => {
      if (window.scrollY > 8) header.classList.add('compact');
      else header.classList.remove('compact');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
  }

  document.getElementById('year').textContent = new Date().getFullYear();
});