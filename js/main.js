import { navLogic } from "./ui.js";
import { projects } from "./project-data.js";
import { renderProjectDetails } from "./project.js";

// Normalize asset paths so "assets/foo.jpg" works on any page depth
const asset = (p) => (!p ? "" : p.startsWith("/") ? p : `/${p.replace(/^(\.\/)+/, "")}`);

// ---- Function 1: thumbnails on homepage ----
export function renderProjectThumbnails(selector = "#projects-grid") {
    const container = document.querySelector(selector);
    if (!container) return; // Not on the homepage

    container.innerHTML = projects
        .map(
            (project) => `
      <a class="project-item" href="pages/project.html?id=${encodeURIComponent(project.id)}">
        <div class="project-card">
          <img src="${asset(project.image)}" alt="${project.title}" />
          <div class="project-card-body">
            <h3>${project.title}</h3>
            <p>${project.shortDescription}</p>
          </div>
        </div>
      </a>
    `
        )
        .join("");
}

// Initialize everything safely after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    // nav / mobile menu etc.
    if (typeof navLogic === "function") navLogic();

    // Page-aware rendering:
    if (document.querySelector("#projects-grid")) {
        renderProjectThumbnails("#projects-grid");
    }
    if (document.querySelector("#project-details")) {
        renderProjectDetails("#project-details");
    }
});
