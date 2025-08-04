// ThinkInk minimal JS
document.addEventListener("DOMContentLoaded", () => {
  // Year
  const y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();

  // Active link
  const current = (
    location.pathname.split("/").pop() || "index.html"
  ).toLowerCase();
  document
    .querySelectorAll("nav a[data-route], .drawer a[data-route]")
    .forEach((a) => {
      const route = (a.getAttribute("data-route") || "").toLowerCase();
      if (route === current) a.classList.add("active");
    });

  // Mobile drawer toggle
  const burger = document.getElementById("burger");
  const drawer = document.getElementById("drawer");
  if (burger && drawer) {
    burger.addEventListener("click", () => {
      drawer.classList.toggle("open");
      burger.setAttribute("aria-expanded", drawer.classList.contains("open"));
    });
  }

  // Compact header on scroll
  const header = document.querySelector(".header-wrap");
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 8) header.classList.add("compact");
      else header.classList.remove("compact");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  document.getElementById("year").textContent = new Date().getFullYear();

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
  // Image Preview (Lightbox) for .feature-media
  (function () {
    const modal = document.getElementById("imgPreview");
    if (!modal) return;

    const imgEl = modal.querySelector(".preview__img");
    const captionEl = modal.querySelector(".preview__caption");

    function openModal(src, alt) {
      if (!src) return;
      imgEl.src = src;
      imgEl.alt = alt || "";
      captionEl.textContent = alt || "";
      modal.classList.remove("hidden");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
    }

    function closeModal() {
      modal.classList.add("hidden");
      modal.setAttribute("aria-hidden", "true");
      // Clear src to release memory and avoid flashing old image next time
      imgEl.src = "";
      document.body.classList.remove("modal-open");
    }

    // Open on click of .feature-media
    document.addEventListener("click", (e) => {
      const media = e.target.closest && e.target.closest(".feature-media");
      if (media) {
        e.preventDefault();
        const previewSrc = media.getAttribute("data-preview");
        const img = media.querySelector("img");
        const src = previewSrc || (img ? img.currentSrc || img.src : "");
        const alt = img ? img.alt : "";
        openModal(src, alt);
        return;
      }

      // Close on elements marked with [data-close]
      if (e.target.matches && e.target.matches("[data-close]")) {
        e.preventDefault();
        closeModal();
      }
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
      }
    });
  })();
});
