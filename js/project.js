import { projects } from "./project-data.js";

// Same asset normalizer used in main.js
const asset = (p) => (!p ? "" : p.startsWith("/") ? p : `/${p.replace(/^(\.\/)+/, "")}`);

// ---- Function 2: details on project page ----
export function renderProjectDetails(selector = "#project-details") {
  const container = document.querySelector(selector);
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const idParam = params.get("id");
  const projectId = Number(idParam);

  if (!Number.isInteger(projectId)) {
    container.innerHTML = `
      <h2>Mangler prosjekt-ID</h2>
      <p>Legg til ?id= i URLen, f.eks. <code>?id=1</code>.</p>
      <p><a class="btn" href="../index.html">Tilbake til Hjem</a></p>
    `;
    return;
  }

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    container.innerHTML = `
      <h2>Prosjekt ikke funnet</h2>
      <p>Vi fant ingen data for ID <strong>${idParam}</strong>.</p>
      <p><a class="btn" href="../index.html">Tilbake til Hjem</a></p>
    `;
    return;
  }

  // Generate HTML for all images
  const imagesHtml = (project.images || [])
    .map((img) => `<img class="project-hero" src="${asset(img)}" alt="${project.title}"/>`)
    .join("");

  container.innerHTML = `
    <article class="project-article">
    <h1>${project.title}</h1>
      <p>${project.description}</p>
      ${imagesHtml}
    </article>
  `;
}

