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

if (betaForm) {
  betaForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = betaForm.querySelector("input[name='betaEmail']");
    if (!emailInput || !emailInput.value.trim()) {
      return;
    }

    const userEmail = emailInput.value.trim();
    const subject = "QLFT TestFlight Request";
    const body = [
      "Hi Joshua,",
      "",
      "I'd like to join the QLFT TestFlight beta.",
      `Apple ID email: ${userEmail}`,
      "",
      "Thank you!",
    ].join("\n");

    const mailtoUrl = `mailto:joshuabruegge@live.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  });
}
