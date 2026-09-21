# Portfolio — Pure HTML, CSS & JavaScript

Single-page personal portfolio. No frameworks, no build step.

```
portfolio/
├── index.html
├── css/style.css
├── js/script.js
└── assets/  (profile.jpg, Kusuma_Ramisetty_Resume.pdf, project-*.jpg)
```

## How to edit

Open `js/script.js`. The top of the file is a CONFIG area:

- `portfolioConfig.name` — your name (updates nav, hero, footer).
- `portfolioLinks` — GitHub, LinkedIn, email, resume path. Leave a value as `""`
  and the related button is automatically shown as "unavailable" instead of
  linking somewhere fake.
- `skills`, `projects`, `experience`, `education`, `certifications`,
  `achievements`, `blogPosts` — plain arrays. Add or remove objects and the page
  re-renders those sections. Empty arrays show a neutral "coming soon" note.

## Resume

Replace the PDF at `assets/Kusuma_Ramisetty_Resume.pdf`. The Download / View Resume buttons then
work immediately.

## Running locally

Open `index.html` in a browser, or serve the folder with any static server.
