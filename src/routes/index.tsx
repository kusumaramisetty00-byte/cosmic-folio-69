import { createFileRoute, redirect } from "@tanstack/react-router";

// The portfolio is a pure HTML/CSS/JS static site served from
// public/portfolio. The root URL simply redirects to it.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/portfolio/index.html" });
  },
  component: () => null,
});
