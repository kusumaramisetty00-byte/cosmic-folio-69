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
  resume: "assets/Kusuma_Ramisetty_Resume.pdf",
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
    title: "Sales Forecasting for Retail Using Time Series Analysis",
    image: "assets/project-1.jpg",
    categories: ["Data Analytics", "Excel", "Power BI"],
    description:
      "Cleaned retail sales data, analyzed seasonal patterns, built forecasts, and created an interactive Power BI dashboard for sales, growth, and product performance.",
    technologies: ["Microsoft Excel", "Power BI", "Time Series Analysis"],
    features: [
      "Missing-value and duplicate-record cleanup",
      "Seasonal trend and sales pattern analysis",
      "Future sales forecasting",
      "Monthly sales, growth, and product performance dashboard",
    ],
    github: "",
    demo: "",
    details: {
      overview: "A retail analytics project using historical sales data to understand performance over time and forecast future sales trends.",
      problem: "Raw retail records required cleaning and analysis before trends, peak periods, and underperforming products could be identified.",
      objective: "Create a reliable analysis and interactive dashboard that supports clearer sales decisions.",
      dataset: "Historical retail sales records containing dates, sales values, and product performance information.",
      methodology: [
        "Cleaned missing values and removed duplicate records in Microsoft Excel",
        "Performed time-series analysis to identify seasonal trends and sales patterns",
        "Built forecasts and presented results in an interactive Power BI dashboard",
      ],
      results: "Produced a dashboard that tracks monthly sales, growth rate, product performance, and forecast trends.",
      insights: ["Identified peak sales periods", "Highlighted underperforming products for further review"],
    },
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    image: "assets/project-2.jpg",
    categories: ["HTML", "CSS", "JavaScript"],
    description:
      "Designed and developed this responsive portfolio to present my profile, technical skills, projects, education, resume, and contact information.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Semantic, accessible page structure",
      "Responsive desktop and mobile layouts",
      "Filterable projects and detailed project views",
      "Working resume and contact links",
    ],
    github: "",
    demo: "",
    details: {
      overview: "A personal portfolio website created to give recruiters a clear overview of my background, skills, education, and practical work.",
      problem: "My professional information and project work needed one organized, easy-to-share online destination.",
      objective: "Build a clean portfolio that is easy to navigate and works well across desktop and mobile screens.",
      dataset: "This project does not use a dataset; its content is based on my resume and professional profile.",
      methodology: [
        "Structured the content with semantic HTML",
        "Created the visual design and responsive layouts with CSS",
        "Added project filters, details, validation, and navigation behavior with JavaScript",
      ],
      results: "Delivered a responsive single-page portfolio with clear sections for recruiters and working profile actions.",
      insights: ["Clear content hierarchy improves scanning", "Responsive design keeps key actions usable on smaller screens"],
    },
    github: "https://github.com/kusumaramisetty00-byte/cosmic-folio-69",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    image: "assets/project-3.jpg",
    categories: ["HTML", "CSS", "JavaScript"],
    description:
      "A responsive personal portfolio that presents my profile, data analytics skills, academic background, achievements, and contact details in a clear vCard-style layout.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive vCard-style layout",
      "Skills and education presentation",
      "Projects and achievements showcase",
      "Direct professional contact links",
    ],
    github: "https://github.com/kusumaramisetty00-byte/personal-portfolio",
    demo: "",
    details: {
      overview: "A public portfolio project built to organize my professional background and technical capabilities in one mobile-friendly website.",
      problem: "Recruiters need a quick way to review my skills, education, achievements, and contact information.",
      objective: "Present my professional profile in a concise, accessible, and responsive format.",
      dataset: "This website uses professional profile content rather than a data-analysis dataset.",
      methodology: [
        "Organized profile information into focused sections",
        "Built the visual layout with HTML and CSS",
        "Added interactive behavior with JavaScript",
      ],
      results: "Published a responsive portfolio repository that can be reviewed and shared through GitHub.",
      insights: ["Compact layouts help recruiters scan information quickly", "Mobile-friendly presentation improves accessibility"],
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
    degree: "Master of Computer Applications (MCA)",
    institution: "Vikram Simhapuri University",
    duration: "2024–2026",
    details: ["CGPA: 8.7"],
  },
  {
    degree: "Bachelor of Science (Computers)",
    institution: "",
    duration: "2021–2024",
    details: ["CGPA: 9.0"],
  },
  {
    degree: "Intermediate",
    institution: "",
    duration: "2019–2021",
    details: ["Score: 94.5%"],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "",
    duration: "2019",
    details: ["Score: 92%"],
  },
];

const certifications = [
  { name: "Data Analytics Certification", issuer: "Analytics Benchmark", date: "2024", credentialId: "", url: "" },
];

const achievements = [
  { title: "Academic Achievement", description: "Successfully completed Bachelor's Degree" },
  { title: "Data Analytics Project", description: "Created a Sales Forecasting Dashboard using Power BI" },
  { title: "Programming Skills", description: "Developed practical projects using Python and JavaScript" },
  { title: "Web Development", description: "Built responsive websites using HTML, CSS and JavaScript" },
];

const blogPosts = [
  { title: "Python for Beginners", excerpt: "Learn Python basics including variables, conditions, loops, functions, and data structures." },
  { title: "Introduction to Django", excerpt: "Understand Django MVT architecture, virtual environments, URLs, views, models, and templates." },
  { title: "JavaScript Array Methods", excerpt: "Learn useful methods like map(), filter(), find(), forEach(), and reduce() with practical examples." },
  { title: "SQL Basics for Beginners", excerpt: "Learn SELECT, WHERE, GROUP BY, ORDER BY, JOIN, and other commonly used SQL queries." },
  { title: "Getting Started with Power BI", excerpt: "Learn how to clean data, create visualizations, build dashboards, and understand KPIs." },
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

/** Build a link or an inactive button. */
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
            ${p.github ? linkButton(p.github, "GitHub") : ""}
            ${p.demo ? linkButton(p.demo, "Live Demo") : ""}
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
        ${e.institution ? `<p>${escapeHtml(e.institution)}</p>` : ""}
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
        <h3>${escapeHtml(a.title)}</h3>
        <p>${escapeHtml(a.description)}</p>
      </article>`
    )
    .join("");
}

function renderBlog() {
  const el = $("#blogGrid");
  if (!blogPosts.length) {
    el.innerHTML = `<article class="card reveal">${emptyNote("Articles will be published here.")}</article>`;
    return;
  }
  el.innerHTML = blogPosts
    .map(
      (b) => `
      <article class="card reveal">
        <h3>${escapeHtml(b.title)}</h3>
        <p>${escapeHtml(b.excerpt)}</p>
        ${b.url ? `<div class="project-actions">${linkButton(b.url, "Read More")}</div>` : ""}
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
      ${(project.github || project.demo) ? `<div class="project-actions">${project.github ? linkButton(project.github, "GitHub") : ""}${project.demo ? linkButton(project.demo, "Live Demo") : ""}</div>` : ""}
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

    const name = $("#cName").value.trim();
    const sender = $("#cEmail").value.trim();
    const subject = $("#cSubject").value.trim();
    const message = $("#cMessage").value.trim();
    const body = `${message}\n\nFrom: ${name}\nEmail: ${sender}`;
    window.location.href = `mailto:${portfolioLinks.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.classList.add("success");
    status.textContent = "Your email app is ready with this message.";
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
   EDIT MODE — click text on the page to change it.
   Changes are saved in this browser (localStorage) and
   re-applied on every visit. "Reset all" restores originals.
   ========================================================= */
const EDIT_KEY = "portfolio-edits";

function editTargetKey(el) {
  const section = el.closest("section, footer, header");
  const scope = section ? (section.id || section.className) : "page";
  const tag = el.tagName.toLowerCase();
  const siblings = Array.from((section || document).querySelectorAll(tag));
  return scope + "|" + tag + "|" + siblings.indexOf(el);
}

function editableElements() {
  return Array.from(
    document.querySelectorAll(
      "main h1, main h2, main h3, main p, main li, main .skill-chip, footer p"
    )
  ).filter((el) => el.children.length === 0 || el.childElementCount === 0 || el.innerText.trim() !== "");
}

function applySavedEdits() {
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(EDIT_KEY) || "{}"); } catch (e) { saved = {}; }
  editableElements().forEach((el) => {
    const key = editTargetKey(el);
    if (saved[key] !== undefined) el.innerText = saved[key];
  });
}

function initEditMode() {
  const toggle = document.getElementById("editToggle");
  const bar = document.getElementById("editBar");
  const done = document.getElementById("editDone");
  const reset = document.getElementById("editReset");
  if (!toggle || !bar) return;

  let active = false;

  function setActive(on) {
    active = on;
    document.body.classList.toggle("edit-mode", on);
    bar.hidden = !on;
    toggle.setAttribute("aria-pressed", String(on));
    toggle.textContent = on ? "✏️ Editing…" : "✏️ Edit";
    editableElements().forEach((el) => {
      el.contentEditable = on ? "true" : "false";
      if (on) el.setAttribute("spellcheck", "false");
      else el.removeAttribute("spellcheck");
    });
    if (on) {
      const first = editableElements()[0];
      if (first) first.focus();
    }
  }

  function saveEdits() {
    const saved = {};
    editableElements().forEach((el) => {
      saved[editTargetKey(el)] = el.innerText;
    });
    localStorage.setItem(EDIT_KEY, JSON.stringify(saved));
  }

  toggle.addEventListener("click", () => setActive(!active));
  done.addEventListener("click", () => { saveEdits(); setActive(false); });
  reset.addEventListener("click", () => {
    localStorage.removeItem(EDIT_KEY);
    location.reload();
  });
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
  applySavedEdits();
  initEditMode();
  initNavigation();
  initFilters();
  initModal();
  initContactForm();
  initReveal();
  initParticles();
});
