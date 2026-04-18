/* =========================
   PROGRESS BAR
========================= */
const progressBar = document.querySelector(".progress-bar");

if (progressBar) {
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const total = document.body.scrollHeight - window.innerHeight;
    progressBar.style.width = `${(scrolled / total) * 100}%`;
  });
}

/* =========================
   SCROLL REVEALS
========================= */
const revealEls = document.querySelectorAll(
  ".hero, .about, .service-card, .work-card, .cta-inner, .stat"
);

revealEls.forEach(el => el.classList.add("fade-up"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealEls.forEach(el => observer.observe(el));

/* =========================
   NAV ACTIVE STATE
========================= */
const navLinks = document.querySelectorAll(".nav nav a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

document.querySelectorAll("section[id]").forEach(s => sectionObserver.observe(s));

/* =========================
   SERVICE CARD STAGGER
========================= */
const serviceCards = document.querySelectorAll(".service-card");

const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        serviceCards.forEach((card, i) => {
          setTimeout(() => card.classList.add("visible"), i * 80);
        });
        cardObserver.disconnect();
      }
    });
  },
  { threshold: 0.15 }
);

if (serviceCards.length) {
  serviceCards.forEach(c => c.classList.add("fade-up"));
  cardObserver.observe(serviceCards[0].closest("section") || serviceCards[0]);
}

/* =========================
   WORK CARD STAGGER
========================= */
const workCards = document.querySelectorAll(".work-card");

const workObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        workCards.forEach((card, i) => {
          setTimeout(() => card.classList.add("visible"), i * 100);
        });
        workObserver.disconnect();
      }
    });
  },
  { threshold: 0.1 }
);

if (workCards.length) {
  workCards.forEach(c => c.classList.add("fade-up"));
  workObserver.observe(workCards[0].closest("section") || workCards[0]);
}

/* =========================
   HERO TITLE SCROLL MORPH
========================= */
const heroTitle = document.querySelector(".hero-title");

const phrases = [
  "Attention is rented",
  "Systems build ownership",
  "I turn attention into ownership"
];

let phraseIndex = 0;

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  if (scroll > 200 && phraseIndex === 0) {
    heroTitle.textContent = phrases[1];
    phraseIndex = 1;
  }

  if (scroll > 500 && phraseIndex === 1) {
    heroTitle.textContent = phrases[2];
    phraseIndex = 2;
  }
});

/* =========================
   SYSTEM COMPACT MODE
========================= */
const system = document.querySelector(".system");
const servicesSection = document.querySelector(".services");

if (system && servicesSection) {
  window.addEventListener("scroll", () => {
    const triggerPoint = servicesSection.offsetTop - 300;
    system.classList.toggle("compact", window.scrollY > triggerPoint);
  });
}

/* =========================
   FINALITY TRIGGER
========================= */
const cta = document.querySelector(".cta");

const ctaObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.body.classList.add("ownership-achieved");
      }
    });
  },
  { threshold: 0.6 }
);

if (cta) ctaObserver.observe(cta);
