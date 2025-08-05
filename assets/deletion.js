/* assets/deletion.js */
(function () {
  const form = document.getElementById("deletionForm");
  const status = document.getElementById("formStatus");
  const btn = document.getElementById("submitBtn");

  if (!form) return;

  // Replace with your deployed Apps Script Web App URL
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwRWUH90SFUiLZDE3YZJsBykQUVqYqbabRbISCeV1v4oWEDRf_db5fQSNrgTs7a7dOk/exec";

  function setStatus(msg, type) {
    if (!status) return;
    status.textContent = msg || "";
    status.classList.remove("ok", "err", "loading");
    if (type) status.classList.add(type);
  }

  function disableForm(disabled) {
    if (btn) btn.disabled = disabled;
    form
      .querySelectorAll("input, textarea, button")
      .forEach((el) => (el.disabled = disabled));
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    setStatus("", null);

    // Native validation
    if (!form.checkValidity()) {
      setStatus("Please complete all required fields.", "err");
      form.reportValidity && form.reportValidity();
      return;
    }

    // Stamp time
    const now = new Date().toISOString();
    const ts = form.querySelector('input[name="submittedAt"]');
    if (ts) ts.value = now;

    const data = new FormData(form);

    try {
      setStatus("Submitting…", "loading");
      disableForm(true);

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Apps Script often requires no-cors for anonymous exec
        body: data,
      });

      // With no-cors we can’t read status; assume success if no network error
      setStatus(
        "Request received. Please check your email for confirmation.",
        "ok"
      );
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus(
        "Submission failed. Please try again or contact support.",
        "err"
      );
    } finally {
      disableForm(false);
    }
  });
})();
