const revealItems = Array.from(document.querySelectorAll(".section, .legal-card, .legal-hero"));

revealItems.forEach((item) => {
  item.setAttribute("data-reveal", "");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealItems.forEach((item) => observer.observe(item));

const betaForm = document.querySelector("[data-beta-form]");
const betaDirectButton = document.querySelector("[data-beta-direct]");

const showSubmitToast = (message) => {
  const existingToast = document.querySelector(".submit-toast");
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement("div");
  toast.className = "submit-toast";
  toast.setAttribute("role", "status");
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("is-visible");
  });

  setTimeout(() => {
    toast.classList.remove("is-visible");
    setTimeout(() => {
      toast.remove();
    }, 220);
  }, 2200);
};

if (betaForm) {
  betaForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = betaForm.querySelector("input[name='betaEmail']");
    if (!emailInput || !emailInput.value.trim()) {
      return;
    }

    const userEmail = emailInput.value.trim();
    const subject = "QLFT TestFlight Anfrage (Webseite)";
    const body = [
      "Hi Joshua,",
      "",
      "I'd like to join the QLFT TestFlight beta.",
      `Apple ID email: ${userEmail}`,
      "",
      "Thank you!",
    ].join("\n");

    const mailtoUrl = `mailto:joshuabruegge@live.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showSubmitToast("Submitted. Email draft is opening.");

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 320);
  });
}

if (betaDirectButton) {
  betaDirectButton.addEventListener("click", (event) => {
    event.preventDefault();

    const href = betaDirectButton.getAttribute("href");
    if (!href) {
      return;
    }

    showSubmitToast("Submitted. Email draft is opening.");

    setTimeout(() => {
      window.location.href = href;
    }, 320);
  });
}
