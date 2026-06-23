const phoneNumber = "917425989822";
const whatsappText = encodeURIComponent("Hello Go to Interiors, I would like to book an interior consultation in Jaipur.");
const googleReviewsUrl = "https://www.google.com/search?q=Go+to+Interiors+Jaipur+Reviews";

const projects = [
  {
    id: "living-room-jaipur",
    title: "Warm Minimal Living Room",
    category: "Living Room Interiors",
    filter: "living",
    location: "Jaipur, Rajasthan",
    image: "images/unnamed.webp",
    gallery: [
      "images/unnamed (1).webp",
      "images/unnamed (2).webp"
    ],
    summary: "A balanced family living space with layered lighting, custom storage and a calm material palette.",
    scope: "Space planning, furniture, lighting, ceiling and decor styling",
    year: "2026"
  },
  {
    id: "bedroom-suite",
    title: "Soft Luxury Bedroom Suite",
    category: "Bedroom Interiors",
    filter: "bedroom",
    location: "Mansarovar, Jaipur",
    image: "images/unnamed (1).webp",
    gallery: [
      "images/unnamed (3).webp",
      "images/unnamed (4).webp"
    ],
    summary: "A restful bedroom concept with integrated wardrobe planning and refined wall finishes.",
    scope: "Wardrobe, bed back, furniture, lighting and finishes",
    year: "2026"
  },
  {
    id: "modular-kitchen",
    title: "Contemporary Modular Kitchen",
    category: "Modular Kitchens",
    filter: "kitchen",
    location: "Jaipur, Rajasthan",
    image: "images/unnamed (2).webp",
    gallery: [
      "images/unnamed (6).webp",
      "images/unnamed.webp"
    ],
    summary: "A high-utility kitchen planned around storage efficiency, daily workflow and durable finishes.",
    scope: "Modular cabinetry, countertop, lighting and appliances coordination",
    year: "2026"
  },
  {
    id: "wardrobe-storage",
    title: "Custom Wardrobe and Storage",
    category: "Modular Wardrobes",
    filter: "wardrobe",
    location: "Jaipur, Rajasthan",
    image: "images/unnamed (3).webp",
    gallery: [
      "images/unnamed (2).webp",
      "images/unnamed (1).webp"
    ],
    summary: "Made-to-measure storage with clean shutters, ergonomic divisions and premium hardware.",
    scope: "Wardrobe planning, internal accessories, finishes and installation",
    year: "2026"
  },
  {
    id: "villa-interiors",
    title: "Complete Residential Interiors",
    category: "Residential Interiors",
    filter: "residential",
    location: "Jaipur, Rajasthan",
    image: "images/unnamed (4).webp",
    gallery: [
      "images/unnamed (6).webp",
      "images/unnamed.webp"
    ],
    summary: "A complete home interior execution scope with cohesive materials and family-friendly planning.",
    scope: "Turnkey execution, furniture, ceiling, flooring, electrical and finishing",
    year: "2026"
  },
  {
    id: "commercial-studio",
    title: "Boutique Commercial Studio",
    category: "Commercial Interiors",
    filter: "commercial",
    location: "Jaipur, Rajasthan",
    image: "images/unnamed (6).webp",
    gallery: [
      "images/unnamed (4).webp",
      "images/unnamed (3).webp"
    ],
    summary: "A sharp, welcoming commercial space designed for client interaction and team productivity.",
    scope: "Layout, furniture, lighting, partitions, branding zones and execution",
    year: "2026"
  },
  {
    id: "custom-furniture",
    title: "Made-to-Measure Furniture",
    category: "Custom Furniture",
    filter: "furniture",
    location: "Jaipur, Rajasthan",
    image: "images/unnamed.webp",
    gallery: [
      "images/unnamed (2).webp",
      "images/unnamed (3).webp"
    ],
    summary: "Custom furniture pieces designed for exact room dimensions, use patterns and long-term comfort.",
    scope: "Design, material selection, fabrication and installation",
    year: "2026"
  },
  {
    id: "false-ceiling",
    title: "Layered False Ceiling Design",
    category: "False Ceiling Designs",
    filter: "ceiling",
    location: "Jaipur, Rajasthan",
    image: "images/unnamed (1).webp",
    gallery: [
      "images/unnamed (4).webp",
      "images/unnamed (6).webp"
    ],
    summary: "A subtle ceiling and lighting treatment that adds depth without overpowering the interiors.",
    scope: "False ceiling, lighting layout, cove details and finishing",
    year: "2026"
  }
];

const reviews = [
  {
    text: "Its been a good experience with Go to Interiorser. Value for money. Quality of work is awesome and we are really happy with the interior. Everyone like it. Keep up the good work.",
    author: "Akhilesh Prajapat",
    meta: "5 reviews - 6 photos - 4 years ago"
  },
  {
    text: "Osm experience. I like your work and my home elevate in my budget and very beautiful.",
    author: "Rakesh Meena",
    meta: "1 review - a year ago"
  },
  {
    text: "Really good experience, extremely helpful. Very understanding and possess good knowledge of interior designing.",
    author: "Ishita Gupta",
    meta: "3 reviews - a year ago"
  },
  {
    text: "Best interior designer in Jaipur. Working is superb. Best customer satisfaction.",
    author: "Radhey Shyam",
    meta: "1 review - a year ago"
  },
  {
    text: "Fabulous interior designer, and work is so good.",
    author: "Aman Singhal",
    meta: "4 reviews - a year ago"
  },
  {
    text: "Very good quality and design and experience.",
    author: "Rohit Choudhary",
    meta: "Local Guide - 9 reviews - 15 photos - a year ago"
  },
  {
    text: "Gorgeous looking view and excellent furnituring.",
    author: "Pankaj Rathor",
    meta: "3 reviews - a year ago"
  },
  {
    text: "\u0906\u092a \u0915\u0947 \u0926\u094d\u0935\u093e\u0930\u093e \u0926\u0940 \u0917\u0908 \u0938\u0947\u0935\u093e \u0905\u0924\u093f \u092e\u0939\u0924\u094d\u0935\u092a\u0942\u0930\u094d\u0923,\u0905\u0924\u093f \u0906\u0935\u0936\u094d\u092f\u0915 \u0913\u0930 \u0905\u0924\u093f \u0909\u0924\u094d\u0924\u092e \u0939\u0948",
    author: "Doodi Ruparam",
    meta: "5 reviews - 1 photo - a year ago"
  },
  {
    text: "Good work and nice design.",
    author: "Faisal Khan",
    meta: "1 review - a year ago"
  },
  {
    text: "Best Services in Jaipur. I will recommend to everyone.",
    author: "Suresh Jangid",
    meta: "1 review - 1 photo - 4 years ago"
  }
];

function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

function qsa(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

function initHeader() {
  const header = qs(".site-header");
  const toggle = qs(".menu-toggle");
  const links = qsa(".nav-links a");
  const current = location.pathname.split("/").pop() || "index.html";

  const update = () => header?.classList.toggle("is-scrolled", window.scrollY > 24);
  update();
  window.addEventListener("scroll", update, { passive: true });

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current || (current === "" && href === "index.html")) link.classList.add("active");
    link.addEventListener("click", () => document.body.classList.remove("menu-open"));
  });

  toggle?.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function initReveal() {
  const items = qsa(".reveal");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}

function initCounters() {
  const counters = qsa("[data-count]");
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const duration = 1300;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target % 1 === 0 ? Math.round(target * eased) : (target * eased).toFixed(1);
        el.textContent = `${value}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => observer.observe(counter));
}

function projectCard(project, index = 0) {
  const shape = index === 0 ? "featured" : index === 2 || index === 5 ? "tall" : "";
  return `
    <article class="project-card ${shape}" data-filter="${project.filter}">
      <img src="${project.image}" alt="${project.category} project by Go to Interiors in ${project.location}" loading="lazy">
      <div class="project-info">
        <div class="project-kicker"><span>${project.category}</span><span>${project.location}</span></div>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <a class="text-link" href="project-details.html?project=${project.id}">View Project <span>+</span></a>
      </div>
    </article>
  `;
}

function initProjects() {
  const grids = qsa("[data-project-grid]");
  grids.forEach((grid) => {
    const limit = Number(grid.dataset.limit || projects.length);
    grid.innerHTML = projects.slice(0, limit).map(projectCard).join("");
  });

  const buttons = qsa(".filter-btn");
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;

      qsa(".project-card").forEach((card) => {
        const visible = filter === "all" || card.dataset.filter === filter;
        card.style.display = visible ? "" : "none";
      });
    });
  });
}

function initProjectDetail() {
  const mount = qs("[data-project-detail]");
  if (!mount) return;

  const params = new URLSearchParams(location.search);
  const selected = projects.find((project) => project.id === params.get("project")) || projects[0];
  document.title = `${selected.title} | Go to Interiors`;
  const meta = qs('meta[name="description"]');
  if (meta) meta.setAttribute("content", `${selected.title} by Go to Interiors in Jaipur. ${selected.summary}`);

  mount.innerHTML = `
    <section class="detail-hero">
      <figure><img src="${selected.image}" alt="${selected.title} interior project in Jaipur"></figure>
      <div class="detail-hero-content">
        <span class="eyebrow">Project Details</span>
        <h1>${selected.title}</h1>
        <p>${selected.summary}</p>
        <div class="detail-specs">
          <div><span>Category</span><b>${selected.category}</b></div>
          <div><span>Location</span><b>${selected.location}</b></div>
          <div><span>Year</span><b>${selected.year}</b></div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container split">
        <div class="content-stack reveal">
          <span class="eyebrow">Design Scope</span>
          <h2>Planned for daily comfort, finished with detail.</h2>
          <p class="lead">${selected.scope}. The placeholder imagery and description can be replaced with the client's original site photographs, measurements, material notes and final project story.</p>
          <div class="inline-actions">
            <a class="btn" href="https://wa.me/${phoneNumber}?text=${whatsappText}" target="_blank" rel="noopener">Discuss Similar Project</a>
            <a class="btn ghost" href="projects.html">Back to Projects</a>
          </div>
        </div>
        <div class="content-stack reveal">
          <p>Every Go to Interiors project begins with a practical understanding of space, lifestyle and budget. The execution team coordinates materials, skilled labour, site finishing and installation so the final result feels cohesive and usable.</p>
          <p>This detail page is designed for SEO-friendly project storytelling, before-and-after images, scope breakdowns and enquiry calls to action.</p>
        </div>
      </div>
    </section>
    <section class="section tight">
      <div class="container gallery-grid reveal">
        ${selected.gallery.map((image, index) => `<img src="${image}" alt="${selected.category} gallery image ${index + 1} by Go to Interiors" loading="lazy">`).join("")}
      </div>
    </section>
  `;
  initReveal();
}

function initReviews() {
  const mount = qs("[data-review-slider]");
  if (!mount) return;

  mount.innerHTML = reviews.map((review, index) => `
    <article class="review-card ${index === 0 ? "active" : ""}">
      <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <p class="quote">&ldquo;${review.text}&rdquo;</p>
      <cite>&mdash; ${review.author}</cite>
      <p>${review.meta || "Google review"}</p>
    </article>
  `).join("");

  const cards = qsa(".review-card", mount);
  let active = 0;
  const show = (next) => {
    cards[active].classList.remove("active");
    active = (next + cards.length) % cards.length;
    cards[active].classList.add("active");
  };

  qs("[data-review-prev]")?.addEventListener("click", () => show(active - 1));
  qs("[data-review-next]")?.addEventListener("click", () => show(active + 1));
  setInterval(() => show(active + 1), 6200);
}

function initForms() {
  qsa("form[data-enquiry-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const lines = [
        "New enquiry from Go to Interiors website:",
        `Name: ${data.get("name") || ""}`,
        `Phone: ${data.get("phone") || ""}`,
        `Email: ${data.get("email") || ""}`,
        `Project Type: ${data.get("projectType") || ""}`,
        `Location: ${data.get("location") || ""}`,
        `Budget: ${data.get("budget") || ""}`,
        `Preferred Date: ${data.get("date") || ""}`,
        `Message: ${data.get("message") || ""}`
      ];
      const message = encodeURIComponent(lines.join("\n"));
      const note = qs(".form-note", form);
      if (note) note.textContent = "Opening WhatsApp with your enquiry details. You can review and send it there.";
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank", "noopener");
      form.reset();
    });
  });
}

function hydrateContactLinks() {
  qsa("[data-whatsapp-link]").forEach((link) => {
    link.href = `https://wa.me/${phoneNumber}?text=${whatsappText}`;
  });

  qsa("[data-google-reviews-link]").forEach((link) => {
    link.href = googleReviewsUrl;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initReveal();
  initCounters();
  initProjects();
  initProjectDetail();
  initReviews();
  initForms();
  hydrateContactLinks();
});
