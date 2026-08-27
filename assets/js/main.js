/* Verdant Office - front-end behaviour */
(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("hidden") === false;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      toggle.querySelector(".material-symbols-outlined").textContent = open ? "close" : "menu";
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.add("hidden");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        toggle.querySelector(".material-symbols-outlined").textContent = "menu";
      }
    });
  }

  // Simple client-side form feedback (no backend configured).
  function wireForm(formId, statusId, message) {
    var form = document.getElementById(formId);
    var status = document.getElementById(statusId);
    if (!form || !status) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      form.reset();
      status.textContent = message;
      status.classList.remove("hidden");
    });
  }

  wireForm("contact", "form-status", "Thank you - we'll be in touch within one business day.");
  wireForm("newsletter", "newsletter-status", "You're subscribed. Welcome to Verdant Office.");
})();
