/* =========================================================
   Portfolio — script.js  (vanilla JavaScript only)

   HOW TO EDIT THIS SITE
   ---------------------
   Everything you normally change lives in the CONFIG area below:
   portfolioConfig, portfolioLinks, skills, projects, experience,
   education, certifications, achievements, blogPosts.
   Leave a link as an empty string ("") and its button is shown as
   "unavailable" instead of pointing to a fake URL.
   ========================================================= */

/* =========== CONFIG: basic details =========== */
const portfolioConfig = {
  name: "Ramisetty Kusuma", // <- replace with your full name
};

/* =========== CONFIG: links (leave "" if not available yet) =========== */
const portfolioLinks = {
  github: "https://github.com/kusumaramisetty00-byte",
  linkedin: "https://linkedin.com/in/ramisetty-kusuma-495777330",
  email: "kusumaramisetty00@gmail.com",
  resume: "/__l5e/assets-v1/6c9d06b5-dafa-415a-8b8f-22abbbb38116/Kusuma_Resume.pdf",
};

/* =========== CONFIG: skills =========== */
const skills = [
  {
    category: "Programming",
    items: [
      { icon: "🐍", name: "Python", description: "Data cleaning, analysis and automation with pandas and NumPy." },
      { icon: "🟨", name: "JavaScript", description: "Interactive interfaces and light front-end tooling." },
    ],
  },
  {
    category: "Data & Analytics",
    items: [
      { icon: "🗄️", name: "SQL", description: "Querying, joins, aggregations and analytical reporting." },
      { icon: "📊", name: "Excel", description: "Pivot tables, formulas and structured reporting workbooks." },
      { icon: "📈", name: "Power BI", description: "Interactive dashboards and data storytelling." },
      { icon: "📉", name: "HTML", description: "Visual exploration and shareable analytics views." },
    ],
  },
  {
    category: "Database",
    items: [{ icon: "🛢️", name: "MySQL", description: "Relational schema design and query optimisation." }],
  },
  {
    category: "Tools",
    items: [
      { icon: "🔧", name: "Git", description: "Version control for analysis code and notebooks." },
      { icon: "🐙", name: "GitHub", description: "Collaboration, code hosting and project documentation." },
    ],
  },
];

/* =========== CONFIG: projects =========== */
const projects = [
  {
    id: "sales-forecasting",
    title: "Sales Forecasting for Retail",
    image: "assets/project-1.jpg",
    categories: ["Data Analytics", "Python", "SQL", "Power BI"],
    description:
      "A data analytics and forecasting project focused on analyzing historical retail sales data, identifying trends, generating forecasts, and presenting insights through interactive dashboards.",
    technologies: ["Python", "SQL", "Excel", "Power BI"],
    features: [
      "Historical sales trend analysis",
      "Seasonality and demand pattern detection",
      "Forecast model for upcoming periods",
      "Interactive Power BI dashboard",
    ],
    github: "",
    demo: "",
    details: {
      overview: "[Overview placeholder — describe the project in 2–3 sentences.]",
      problem: "[Problem statement placeholder.]",
      objective: "[Objective placeholder.]",
      dataset: "[Dataset description placeholder.]",
      methodology: ["[Step 1]", "[Step 2]", "[Step 3]"],
      results: "[Results placeholder.]",
      insights: ["[Key insight 1]", "[Key insight 2]"],
    },
  },
  {
    id: "sql-analytics",
    title: "SQL Analytics Case Study",
    image: "assets/project-2.jpg",
    categories: ["Data Analytics", "SQL"],
    description:
      "A structured SQL case study exploring a relational dataset to answer business questions with queries, views and summary reporting.",
    technologies: ["SQL", "MySQL", "Excel"],
    features: ["Relational schema exploration", "Analytical queries and views", "Business question breakdown", "Summary reporting"],
    github: "",
    demo: "",
    details: {
      overview: "[Overview placeholder.]",
      problem: "[Problem statement placeholder.]",
      objective: "[Objective placeholder.]",
      dataset: "[Dataset description placeholder.]",
      methodology: ["[Step 1]", "[Step 2]"],
      results: "[Results placeholder.]",
      insights: ["[Key insight 1]"],
    },
  },
  {
    id: "python-automation",
    title: "Python Data Automation",
    image: "assets/project-3.jpg",
    categories: ["Python", "Data Analytics"],
    description:
      "A Python workflow that cleans, transforms and exports recurring datasets, replacing a manual spreadsheet process.",
    technologies: ["Python", "pandas", "Excel"],
    features: ["Automated data cleaning", "Reusable transformation functions", "Scheduled report export", "Validation checks"],
    github: "",
    demo: "",
    details: {
      overview: "[Overview placeholder.]",
      problem: "[Problem statement placeholder.]",
      objective: "[Objective placeholder.]",
      dataset: "[Dataset description placeholder.]",
      methodology: ["[Step 1]", "[Step 2]"],
      results: "[Results placeholder.]",
      insights: ["[Key insight 1]"],
    },
  },
];

/* =========== CONFIG: experience / education / etc. =========== */
const experience = [
  // Example shape (delete this comment and add real entries):
  // { position: "", company: "", duration: "", location: "", responsibilities: [], technologies: [] }
];

const education = [
  {
    degree: "[MCA]",
    institution: "[ Vikram simhapuri University ]",
    duration: "[2024] – [2026]",
    details: ["[Computer science]", "\n"],
  },
];

const certifications = [
  // { name: "", issuer: "", date: "", credentialId: "", url: "" }
];

const achievements = [
  // { title: "", description: "", date: "" }
];

const blogPosts = [
  // { title: "", category: "", date: "", excerpt: "", url: "" }
];

/* =========================================================
   HELPERS
   ========================================================= */
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

/** Escape text before inserting into HTML. */
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

/** Build a link or an inactive placeholder button. */
function linkButton(url, label, variant = "btn--ghost") {
  if (!url) {
    return `<span class="btn ${variant} btn--sm is-disabled" aria-disabled="true">${escapeHtml(label)} — unavailable</span>`;
  }
  return `<a class="btn ${variant} btn--sm" href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(label)}</a>`;
}

function tagList(items) {
  if (!items || !items.length) return "";
  return `<div class="tags">${items.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>`;
}

function emptyNote(message) {
  return `<p class="empty-note">${escapeHtml(message)}</p>`;
}

/* =========================================================
   1. APPLY CONFIG (name + links)
   ========================================================= */
function applyConfig() {
  $$("[data-config='name']").forEach((el) => (el.textContent = portfolioConfig.name));

  $$("[data-link]").forEach((el) => {
    const key = el.dataset.link;
    const value = portfolioLinks[key];
    if (!value) {
      el.classList.add("is-disabled");
      el.setAttribute("aria-disabled", "true");
      el.removeAttribute("href");
      return;
    }
    el.href = key === "email" ? `mailto:${value}` : value;
    if (key === "email" && el.textContent.trim().startsWith("[")) el.textContent = value;
    if (key !== "resume" && key !== "email") {
      el.target = "_blank";
      el.rel = "noopener";
    }
  });

  $("#year").textContent = new Date().getFullYear();
}

/* =========================================================
   2. RENDER SECTIONS
   ========================================================= */
function renderSkills() {
  $("#skillsGroups").innerHTML = skills
    .map(
      (group) => `
      <div class="skill-group reveal">
        <h3>${escapeHtml(group.category)}</h3>
        <div class="skill-cards">
          ${group.items
            .map(
              (s) => `
            <article class="card skill-card">
              <div class="skill-icon" aria-hidden="true">${escapeHtml(s.icon)}</div>
              <div><h3>${escapeHtml(s.name)}</h3><p>${escapeHtml(s.description)}</p></div>
            </article>`
            )
            .join("")}
        </div>
      </div>`
    )
    .join("");
}

function renderProjects() {
  const grid = $("#projectsGrid");
  grid.innerHTML = projects
    .map(
      (p) => `
      <article class="card project-card reveal" data-categories="${escapeHtml(p.categories.join("|"))}">
        <div class="project-media">
          <img src="${escapeHtml(p.image)}" alt="Preview of ${escapeHtml(p.title)}" loading="lazy" width="1200" height="750" />
        </div>
        <div class="project-body">
          <h3>${escapeHtml(p.title)}</h3>
          <p>${escapeHtml(p.description)}</p>
          ${tagList(p.technologies)}
          <ul class="project-features">${p.features.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul>
          <div class="project-actions">
            ${linkButton(p.demo, "Live Demo")}
            <button class="btn btn--primary btn--sm" data-project="${escapeHtml(p.id)}">View Details</button>
          </div>
        </div>
      </article>`
    )
    .join("");

  // Filter buttons are derived from the project categories.
  const categories = ["All", ...new Set(projects.flatMap((p) => p.categories))];
  $("#filters").innerHTML = categories
    .map((c, i) => `<button class="filter-btn${i === 0 ? " is-active" : ""}" data-filter="${escapeHtml(c)}">${escapeHtml(c)}</button>`)
    .join("");
}

function renderExperience() {
  const el = $("#experienceTimeline");
  if (!experience.length) {
    el.classList.remove("timeline");
    el.innerHTML = `<div class="card reveal">${emptyNote(
       "Entry level "
    )}</div>`;
    return;
  }
  el.innerHTML = experience
    .map(
      (e) => `
      <article class="card timeline-item reveal">
        <p class="meta">${escapeHtml(e.duration)}${e.location ? " · " + escapeHtml(e.location) : ""}</p>
        <h3>${escapeHtml(e.position)}</h3>
        <p>${escapeHtml(e.company)}</p>
        <ul>${(e.responsibilities || []).map((r) => `<li>${escapeHtml(r)}</li>`).join("")}</ul>
        ${tagList(e.technologies)}
      </article>`
    )
    .join("");
}

function renderEducation() {
  $("#educationTimeline").innerHTML = education
    .map(
      (e) => `
      <article class="card timeline-item reveal">
        <p class="meta">${escapeHtml(e.duration)}</p>
        <h3>${escapeHtml(e.degree)}</h3>
        <p>${escapeHtml(e.institution)}</p>
        <ul>${(e.details || []).map((d) => `<li>${escapeHtml(d)}</li>`).join("")}</ul>
      </article>`
    )
    .join("");
}

function renderCertifications() {
  const el = $("#certificationsGrid");
  if (!certifications.length) {
    el.innerHTML = `<article class="card reveal">${emptyNote(" Certified in Data Analytics Training")}</article>`;
    return;
  }
  el.innerHTML = certifications
    .map(
      (c) => `
      <article class="card reveal">
        <p class="meta">${escapeHtml(c.date)}</p>
        <h3>${escapeHtml(c.name)}</h3>
        <p>${escapeHtml(c.issuer)}</p>
        ${c.credentialId ? `<p>Credential ID: ${escapeHtml(c.credentialId)}</p>` : ""}
        <div class="project-actions">${linkButton(c.url, "View Certificate")}</div>
      </article>`
    )
    .join("");
}

function renderAchievements() {
  const el = $("#achievementsGrid");
  if (!achievements.length) {
    el.innerHTML = `<article class="card reveal">${emptyNote("Achievements will appear here once added.")}</article>`;
    return;
  }
  el.innerHTML = achievements
    .map(
      (a) => `
      <article class="card reveal">
        ${a.date ? `<p class="meta">${escapeHtml(a.date)}</p>` : ""}
        <h3>${escapeHtml(a.title)}</h3>
        <p>${escapeHtml(a.description)}</p>
      </article>`
    )
    .join("");
}

function renderBlog() {
  const el = $("#blogGrid");
  if (!blogPosts.length) {
    el.innerHTML = `<article class="card reveal"><p class="meta">Coming soon</p><h3>Articles in progress</h3>${emptyNote(
      "Written articles will be published here."
    )}</article>`;
    return;
  }
  el.innerHTML = blogPosts
    .map(
      (b) => `
      <article class="card reveal">
        <p class="meta">${escapeHtml(b.category)} · ${escapeHtml(b.date)}</p>
        <h3>${escapeHtml(b.title)}</h3>
        <p>${escapeHtml(b.excerpt)}</p>
        <div class="project-actions">${linkButton(b.url, "Read More")}</div>
      </article>`
    )
    .join("");
}

/* =========================================================
   3. NAVIGATION (mobile menu, scroll state, active link)
   ========================================================= */
function initNavigation() {
  const navbar = $("#navbar");
  const navLinks = $("#navLinks");
  const hamburger = $("#hamburger");

  hamburger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    hamburger.classList.toggle("is-open", open);
    hamburger.setAttribute("aria-expanded", String(open));
    hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("is-open");
      hamburger.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });

  const onScroll = () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 30);
    $("#toTop").classList.toggle("is-visible", window.scrollY > 500);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Highlight the section currently in view.
  const sections = $$("main section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        $$(".nav-links a[href^='#']").forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${id}`));
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => observer.observe(s));

  $("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* =========================================================
   4. SCROLL REVEAL
   ========================================================= */
function initReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        setTimeout(() => entry.target.classList.add("is-visible"), i * 70);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => observer.observe(el));
}

/* =========================================================
   5. PROJECT FILTERING
   ========================================================= */
function initFilters() {
  const filters = $("#filters");
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    $$(".filter-btn", filters).forEach((b) => b.classList.toggle("is-active", b === btn));

    const filter = btn.dataset.filter;
    $$(".project-card").forEach((card) => {
      const match = filter === "All" || card.dataset.categories.split("|").includes(filter);
      card.classList.add("is-filtering");
      setTimeout(() => {
        card.classList.toggle("is-hidden", !match);
        requestAnimationFrame(() => card.classList.remove("is-filtering"));
      }, 180);
    });
  });
}

/* =========================================================
   6. PROJECT DETAILS MODAL
   ========================================================= */
function initModal() {
  const modal = $("#projectModal");
  const body = $("#modalBody");
  let lastFocused = null;

  function open(project) {
    const d = project.details || {};
    body.innerHTML = `
      <h2 id="modalTitle">${escapeHtml(project.title)}</h2>
      <img src="${escapeHtml(project.image)}" alt="Preview of ${escapeHtml(project.title)}" loading="lazy" />
      <h4>Overview</h4><p>${escapeHtml(d.overview)}</p>
      <h4>Problem Statement</h4><p>${escapeHtml(d.problem)}</p>
      <h4>Objective</h4><p>${escapeHtml(d.objective)}</p>
      <h4>Dataset</h4><p>${escapeHtml(d.dataset)}</p>
      <h4>Methodology</h4><ul>${(d.methodology || []).map((m) => `<li>${escapeHtml(m)}</li>`).join("")}</ul>
      <h4>Technologies</h4>${tagList(project.technologies)}
      <h4>Key Features</h4><ul>${project.features.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul>
      <h4>Results</h4><p>${escapeHtml(d.results)}</p>
      <h4>Key Insights</h4><ul>${(d.insights || []).map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
      <div class="project-actions">${linkButton(project.github, "GitHub")}${linkButton(project.demo, "Live Demo")}</div>
    `;
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    $(".modal-close", modal).focus();
  }

  function close() {
    modal.hidden = true;
    document.body.classList.remove("no-scroll");
    if (lastFocused) lastFocused.focus();
  }

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-project]");
    if (trigger) {
      const project = projects.find((p) => p.id === trigger.dataset.project);
      if (project) open(project);
      return;
    }
    if (e.target.closest("[data-close-modal]")) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) close();
  });
}

/* =========================================================
   7. CONTACT FORM VALIDATION
   ========================================================= */
function initContactForm() {
  const form = $("#contactForm");
  const status = $("#formStatus");
  const submitBtn = $("#submitBtn");

  const setError = (input, message) => {
    const target = $(`[data-error-for='${input.id}']`);
    if (target) target.textContent = message;
    input.setAttribute("aria-invalid", message ? "true" : "false");
  };

  function validate() {
    let valid = true;
    const fields = [$("#cName"), $("#cEmail"), $("#cSubject"), $("#cMessage")];
    fields.forEach((input) => {
      const value = input.value.trim();
      if (!value) {
        setError(input, "This field is required.");
        valid = false;
      } else if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
        setError(input, "Enter a valid email address.");
        valid = false;
      } else {
        setError(input, "");
      }
    });
    return valid;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.className = "form-status";
    status.textContent = "";

    if (!validate()) {
      status.classList.add("error");
      status.textContent = "Please fix the highlighted fields.";
      return;
    }

    // No email service is connected yet, so nothing is actually sent.
    // Connect a service (e.g. Formspree, EmailJS or your own API) here.
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
      status.classList.add("error");
      const mail = portfolioLinks.email ? ` Email ${portfolioLinks.email} directly in the meantime.` : "";
      status.textContent = `This form isn't connected to an email service yet, so your message wasn't sent.${mail}`;
    }, 700);
  });

  form.addEventListener("input", (e) => {
    if (e.target.matches("input, textarea")) setError(e.target, "");
  });
}

/* =========================================================
   8. HERO PARTICLES (lightweight canvas animation)
   ========================================================= */
function initParticles() {
  const canvas = $("#particles");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!canvas || reduceMotion) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  const pointer = { x: -999, y: -999 };

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const count = Math.min(70, Math.round(window.innerWidth / 22));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      const dist = Math.hypot(p.x - pointer.x, p.y - pointer.y);
      const glow = dist < 140 ? 0.55 : 0.22;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(140, 210, 255, ${glow})`;
      ctx.fill();
    });
    requestAnimationFrame(frame);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
  });
  resize();
  frame();
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderExperience();
  renderEducation();
  renderCertifications();
  renderAchievements();
  renderBlog();
  applyConfig();
  initNavigation();
  initFilters();
  initModal();
  initContactForm();
  initReveal();
  initParticles();
});
