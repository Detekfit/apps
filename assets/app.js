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

    const burger = document.getElementById("burger");
    const drawer = document.getElementById("drawer");
    const closeBtn = document.getElementById("close-drawer");
    const backdrop = document.getElementById("drawer-backdrop");

    function openDrawer() {
        drawer.classList.add("open");
        backdrop.classList.add("active");
        burger.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden"; // Prevent body scroll when drawer is open
    }

    function closeDrawer() {
        drawer.classList.remove("open");
        backdrop.classList.remove("active");
        burger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = ""; // Restore body scroll
    }

    // Open drawer on burger click
    if (burger && drawer) {
        burger.addEventListener("click", openDrawer);
    }

    // Close drawer on close button click
    if (closeBtn) {
        closeBtn.addEventListener("click", closeDrawer);
    }

    // Close drawer on backdrop click
    if (backdrop) {
        backdrop.addEventListener("click", closeDrawer);
    }

    // Close drawer on outside click (improved logic)
    document.addEventListener("click", (event) => {
        if (drawer.classList.contains("open") && 
            !drawer.contains(event.target) && 
            !burger.contains(event.target)) {
            closeDrawer();
        }
    });

    // Close drawer on escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && drawer.classList.contains("open")) {
            closeDrawer();
        }
    });

    // Handle active navigation state
    const navLinks = document.querySelectorAll('.drawer a[data-route]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');
            
            // Close drawer after navigation (optional)
            setTimeout(() => {
                closeDrawer();
            }, 150);
        });
    });

    // Add touch support for mobile swipe gestures
    let startX = 0;
    let currentX = 0;
    let isDrawerOpen = false;

    drawer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDrawerOpen = drawer.classList.contains('open');
    });

    drawer.addEventListener('touchmove', (e) => {
        if (!isDrawerOpen) return;
        
        currentX = e.touches[0].clientX;
        const diffX = startX - currentX;
        
        if (diffX > 0) {
            const translateX = Math.min(diffX, 280);
            drawer.style.transform = `translateX(-${translateX}px)`;
        }
    });

    drawer.addEventListener('touchend', (e) => {
        if (!isDrawerOpen) return;
        
        const diffX = startX - currentX;
        drawer.style.transform = '';
        
        if (diffX > 100) {
            closeDrawer();
        }
    });





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

  document.getElementById("year").textContent = new Date().getFullYear();

  function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const reason = document.getElementById("reason").value.trim();
  }

  (function () {
    const overlay = document.getElementById("blog-loader");
    const target = document.getElementById("dib-posts");

    function closeOverlay(reason) {
      if (!overlay || overlay.dataset.closed === "1") return;
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
      overlay.dataset.closed = "1";
      target?.setAttribute("aria-busy", "false");
      // console.debug('Loader closed:', reason);
    }

    // Close on first content mutation inside #dib-posts
    if (target && "MutationObserver" in window) {
      const observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          if (m.addedNodes && m.addedNodes.length) {
            closeOverlay("dib-content-added");
            observer.disconnect();
            break;
          }
        }
      });
      observer.observe(target, { childList: true, subtree: true });
    }

    // Safety timeout: close after 6.5s even if nothing arrived
    const timeout = setTimeout(() => closeOverlay("timeout"), 6500);

    // If script already populated before this ran
    if (target && target.children.length > 0) {
      clearTimeout(timeout);
      closeOverlay("pre-populated");
    }

    // Optional: ESC to close
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeOverlay("esc");
    });

    // Optional: click outside dialog to close
    overlay?.addEventListener("click", (e) => {
      if (e.target === overlay) closeOverlay("backdrop");
    });

    // In case the DropInBlog script dispatches a custom event in future
    window.addEventListener("dropinblog:loaded", () =>
      closeOverlay("dib-event")
    );
  })();

  document.getElementById("year").textContent = new Date().getFullYear();

});
