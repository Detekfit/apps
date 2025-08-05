(function () {
  const start = () => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    document
      .querySelectorAll(".reveal, .reveal-delayed, .stagger")
      .forEach((el) => io.observe(el));

    const glow = document.querySelector(".hero-glow");
    if (glow) requestAnimationFrame(() => glow.classList.add("on"));

    const demo = document.querySelector(".demo");
    const parallax = demo?.querySelector(".demo-parallax");
    if (demo && parallax) {
      let raf = null;
      const strength = 6;
      const onMove = (x, y, rect) => {
        const rx = ((y - rect.top) / rect.height - 0.5) * -strength;
        const ry = ((x - rect.left) / rect.width - 0.5) * strength;
        parallax.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      };
      const reset = () =>
        (parallax.style.transform = "rotateX(0deg) rotateY(0deg)");
      demo.addEventListener("mousemove", (ev) => {
        const rect = demo.getBoundingClientRect();
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => onMove(ev.clientX, ev.clientY, rect));
      });
      demo.addEventListener("mouseleave", () => {
        if (raf) cancelAnimationFrame(raf);
        reset();
      });
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
